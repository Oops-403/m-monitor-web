import { BigNumber, providers, Contract, utils, ContractInterface } from 'ethers'
import { getFunctionFragment } from '@/ethereum-sdk/utils/contract'
import { TokenFarmFunction, TokenFarmEvent, TokenFarmsABI } from '@/ethereum-sdk/abi/tokenFarms'
import { NFTFarmFunction, NFTFarmsEvent, NFTFarmsABI } from '@/ethereum-sdk/abi/nftFarms'
import { LPFarmFunction, LPFarmsEvent, LPFarmsABI } from '@/ethereum-sdk/abi/lpFarms'
import { wallets } from '@/config/wallets'

const enum DBName {
  TokenFarm = 'tokenFarm',
  NFTFarm = 'nftFarm',
  LPFarm = 'lpFarm'
}

const provider = new providers.JsonRpcProvider('https://rinkeby.infura.io/v3/0362057efe1343109860f9c5ab54027f')

const stepBlock = 10000

const farmContracts = {
  tokenFarm: '0x3e0acbd96fca500596d6371256c6368f61596896',
  nftFarm: '0x642a190c291a7c151e1f4e2fbe54406c8775b03e',
  lpFarm: '0xf84f708ea2b5044cd33483bc70bbbd292622437b',
  startBlock: 10507200
}

const tokenFarmInfo = new Map()
const nftFarmInfo = new Map()
const lpFarmInfo = new Map()

async function fetchUsersPendingReward (wallets: string[]) {
  console.log('>>> %c start fetch user pending reward', 'color: #0f0;')

  const tokenContact = new Contract(
    farmContracts.tokenFarm,
    [getFunctionFragment(TokenFarmsABI, TokenFarmFunction.PendingReward)],
    provider
  )

  const nftContact = new Contract(
    farmContracts.nftFarm,
    [getFunctionFragment(NFTFarmsABI, NFTFarmFunction.PendingReward)],
    provider
  )
  const lpContact = new Contract(
    farmContracts.lpFarm,
    [getFunctionFragment(LPFarmsABI, LPFarmFunction.PendingReward)],
    provider
  )

  await Promise.all(
    wallets.map(async (item) => {
      // token
      const tokenPending = await tokenContact.pendingReward(item)
      tokenFarmInfo.set(item.toLowerCase(), {
        wallet: item.toLowerCase(),
        pending: BigNumber.from(tokenPending).toString(),
        total: Number(utils.formatUnits(tokenPending, 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
      })

      // nft
      const nftPending = await nftContact.pendingReward(item)
      nftFarmInfo.set(item.toLowerCase(), {
        wallet: item.toLowerCase(),
        pending: BigNumber.from(nftPending).toString(),
        total: Number(utils.formatUnits(nftPending, 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
      })

      // lp
      const lpPending = await lpContact.pendingReward('0', item)
      lpFarmInfo.set(item.toLowerCase(), {
        wallet: item.toLowerCase(),
        pending: BigNumber.from(lpPending).toString(),
        total: Number(utils.formatUnits(lpPending, 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
      })
    })
  )

  console.log('%c end fetch user pending reward <<<', 'color: #c60;')
}

async function statFarmUserReward (
  {
    provider,
    farmAddress,
    farmABI,
    eventName,
    dbName,
    fromBlock,
    latestBlock
  }: {
    provider: providers.JsonRpcProvider | providers.Web3Provider,
    farmAddress: string,
    farmABI: Exclude<ContractInterface, utils.Interface>,
    eventName: string,
    dbName: DBName,
    fromBlock: number,
    latestBlock: number
  }) {
  let startBlock = fromBlock
  // if (records && Array.isArray(records)) {
  //   records.forEach(item => {
  //     console.log(item.endBlock)
  //     startBlock = Math.max(startBlock, item.endBlock)
  //   })
  // }
  let endBlock = startBlock + stepBlock > latestBlock ? latestBlock : startBlock + stepBlock

  const iface = new utils.Interface(farmABI)
  const topics1 = [iface.getEventTopic(eventName)]
  console.log(`>>> %c ${dbName} start with block: ${startBlock}`, 'color: #0f0;')

  while (endBlock <= latestBlock) {
    const filter: providers.Filter = {
      address: farmAddress,
      topics: [topics1],
      fromBlock: startBlock,
      toBlock: endBlock
    }
    const logList = await provider.getLogs(filter)
    await Promise.all(
      logList.map(async (log) => {
        const item = iface.parseLog(log)
        if (item.name === eventName) {
          let old
          if (wallets.includes(item.args._user.toLowerCase())) {
            console.log('1111111111', item, log)
            if (dbName === DBName.TokenFarm) {
              old = await tokenFarmInfo.get(item.args._user.toLowerCase())
            } else if (dbName === DBName.NFTFarm) {
              old = nftFarmInfo.get(item.args._user.toLowerCase())
            } else if (dbName === DBName.LPFarm) {
              old = lpFarmInfo.get(item.args._user.toLowerCase())
            }
          }

          if (old && old.wallet) {
            if (dbName === DBName.TokenFarm) {
              tokenFarmInfo.set(item.args._user.toLowerCase(), {
                wallet: old.wallet,
                pending: old.pending,
                endBlock: log.blockNumber,
                claimed: BigNumber.from(old.claimed || '0').add(item.args._amount).toString(),
                total: Number(utils.formatUnits(BigNumber.from(item.args._amount).add(utils.parseEther(old.total + '')), 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
              })
            }

            if (dbName === DBName.NFTFarm) {
              nftFarmInfo.set(item.args._user.toLowerCase(), {
                wallet: old.wallet,
                pending: old.pending,
                endBlock: log.blockNumber,
                claimed: BigNumber.from(old.claimed || '0').add(item.args._amount).toString(),
                total: Number(utils.formatUnits(BigNumber.from(item.args._amount).add(utils.parseEther(old.total + '')), 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
              })
            }

            if (dbName === DBName.LPFarm) {
              lpFarmInfo.set(item.args._user.toLowerCase(), {
                wallet: old.wallet,
                pending: old.pending,
                endBlock: log.blockNumber,
                claimed: BigNumber.from(old.claimed || '0').add(item.args._amount).toString(),
                total: Number(utils.formatUnits(BigNumber.from(item.args._amount).add(utils.parseEther(old.total + '')), 18).replace(/^(\d*\.\d{2})\d*/, '$1'))
              })
            }
          }
        }
      })
    )

    startBlock = endBlock
    if (endBlock === latestBlock) {
      console.log(`%c ${dbName} end with block: ${endBlock} <<<`, 'color:#f00;')
      endBlock = endBlock + 1
      break
    }
    endBlock = endBlock + stepBlock > latestBlock ? latestBlock : endBlock + stepBlock
  }
}

async function statFarmsData () {
  const latestBlock = await provider.getBlockNumber()
  // token farm
  const tokenFarmParam = {
    provider,
    farmAddress: farmContracts.tokenFarm,
    farmABI: TokenFarmsABI,
    eventName: TokenFarmEvent.RewardUser,
    dbName: DBName.TokenFarm,
    fromBlock: farmContracts.startBlock,
    latestBlock
  }
  await statFarmUserReward(tokenFarmParam)

  // nft farm
  const nftFarmParam = {
    provider,
    farmAddress: farmContracts.nftFarm,
    farmABI: NFTFarmsABI,
    eventName: NFTFarmsEvent.RewardUser,
    dbName: DBName.NFTFarm,
    fromBlock: farmContracts.startBlock,
    latestBlock
  }
  await statFarmUserReward(nftFarmParam)

  // lp farm
  const lpFarmParam = {
    provider,
    farmAddress: farmContracts.lpFarm,
    farmABI: LPFarmsABI,
    eventName: LPFarmsEvent.RewardUser,
    dbName: DBName.LPFarm,
    fromBlock: farmContracts.startBlock,
    latestBlock
  }
  await statFarmUserReward(lpFarmParam)
}

export const analyzeFarmsWithWallets = async (wallets: string[]) => {
  await fetchUsersPendingReward(wallets)
  await statFarmsData()

  return {
    tokenFarm: [...tokenFarmInfo.values()],
    nftFarm: [...nftFarmInfo.values()],
    lpFarmInfo: [...lpFarmInfo.values()]
  }
}
