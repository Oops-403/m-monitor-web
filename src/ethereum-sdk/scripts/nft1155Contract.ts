/* eslint-disable @typescript-eslint/no-unused-vars */
import { BigNumberish, ethers } from 'ethers'
import { isERC1155Asset } from '../utils/ethereum'
import { INFURA_URL_RINKEBY } from '../config'
import { ERC1155 } from '../modules/erc1155'

const readonlyProvider = new ethers.providers.JsonRpcProvider(INFURA_URL_RINKEBY)

const isERC1155NFT = async (contractAddress: string) => {
  const res = await isERC1155Asset(readonlyProvider, contractAddress)
  console.log('isERC721: ', res)
}

const contract = new ERC1155({
  contractAddress: '0x4e5b4656ad17b53a00931da99bbf590d51c13631',
  gasIncreaseFactor: 1.0
})

const contractBaseInfo = async () => {
  const name = await contract.name(readonlyProvider)
  console.log('name: ', name)

  const symbol = await contract.symbol(readonlyProvider)
  console.log('symbol: ', symbol)

  const templateURI = await contract.templateURI(readonlyProvider)
  console.log('templateURI: ', templateURI)
}

const walletBaseInfo = async () => {
  // tokenId
  const currentSupply = await contract.currentSupply(readonlyProvider, '0x6d1cb7174539857b0e88da980500bc7234f6c463266b62c97600010000000001')
  console.log('currentSupply: ', currentSupply)
  // wallet, tokenId
  const balance = await contract.balanceOf(readonlyProvider, '0x6d1cb7174539857b0e88da980500bc7234f6c463', '0x6d1cb7174539857b0e88da980500bc7234f6c463266b62c97600010000000001')
  console.log('balanceOf: ', balance)
  //
  const getbalance = await contract.getBalance(readonlyProvider, '0x6d1cb7174539857b0e88da980500bc7234f6c463', '0x6d1cb7174539857b0e88da980500bc7234f6c463266b62c97600010000000001')
  console.log('getBalance: ', getbalance)

  // owner, operate
  const res = await contract.isApprovedForAll(readonlyProvider, '', '')
  console.log('isApprovedForAll: ', res)
}

const getDetailByTokenId = async (tokenId: string) => {
  const creator = await contract.getIdCreator(readonlyProvider, tokenId)
  const uri = await contract.getUri(readonlyProvider, tokenId)
  console.log({
    creator,
    uri
  })
}

async function run () {
  // await contractBaseInfo()
}

run()
