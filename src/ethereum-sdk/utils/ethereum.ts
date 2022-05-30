import { ethers } from 'ethers'
import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { supportsInterfaceABI } from '../abi/singleFragments'
// import { getContract, getFunctionFragment } from '../utils/contract'
// import { ERC20Contract } from '../abi/erc20'
// import { ERC1155Contract } from '../abi/erc1155'
// import { ERC721Contract } from '../abi/erc721'
// import { BaseAsset, BaseAssetContract } from '../types'

export function validateWalletAddress (address: string) {
  if (!ethers.utils.isAddress(address)) {
    throw new Error('Invalid wallet address.')
  }
  if (address === ethers.constants.AddressZero) {
    throw new Error('Wallet cannot be the null address.')
  }
  return address.toLowerCase()
}

export async function isERC1155Asset (provider: JsonRpcProvider | Web3Provider, contractAddress: string) {
  const contract = new ethers.Contract(contractAddress, supportsInterfaceABI, provider)
  return contract.supportsInterface('0xd9b67a26')
}

export async function isERC721Asset (provider: JsonRpcProvider | Web3Provider, contractAddress: string) {
  const contract = new ethers.Contract(contractAddress, supportsInterfaceABI, provider)
  return contract.supportsInterface('0x80ac58cd')
}
