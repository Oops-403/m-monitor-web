import { ethers } from 'ethers'
import { ERC20ContractConfig, ERC20 } from '../modules/erc20'
import { INFURA_URL_RINKEBY } from '../config'

const config: ERC20ContractConfig = {
  // MY token
  contractAddress: '0x30acede1d87d48aba245e59fba30ee66129fa464',
  // decimals: 18,
  gasIncreaseFactor: 1.0
}

const erc20 = new ERC20(config)
const readonlyProvider = new ethers.providers.JsonRpcProvider(INFURA_URL_RINKEBY)

async function fetchBaseInfo () {
  const name = await erc20.tokenName(readonlyProvider)
  console.log('name:', name)

  const symbol = await erc20.tokenSymbol(readonlyProvider)
  console.log('symbol:', symbol)

  const decimals = await erc20.tokenDecimals(readonlyProvider)
  console.log('decimals:', decimals)

  const totalSupply = await erc20.totalSupply(readonlyProvider)
  console.log('totalSuppy:', totalSupply)
}

async function run () {
  await fetchBaseInfo()
}

run()
