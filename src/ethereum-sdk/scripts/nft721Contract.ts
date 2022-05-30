/* eslint-disable @typescript-eslint/no-unused-vars */
import { ethers } from 'ethers'
import { isERC721Asset } from '../utils/ethereum'
import { INFURA_URL_RINKEBY } from '../config'
import { ERC721 } from '../modules/erc721'

const readonlyProvider = new ethers.providers.JsonRpcProvider(INFURA_URL_RINKEBY)

const contract = new ERC721({
  contractAddress: '',
  gasIncreaseFactor: 1.0
})

const isERC721NFT = async (contractAddress: string) => {
  const res = await isERC721Asset(readonlyProvider, contractAddress)
  console.log('isERC721: ', res)
}

const baseInfo = async () => {
  const name = await contract.name(readonlyProvider)
  console.log('name: ', name)

  const symbol = await contract.symbol(readonlyProvider)
  console.log('symbol: ', symbol)
}

async function run () {
  await isERC721NFT('0x4e5b4656ad17b53a00931da99bbf590d51c13631')
}

run()
