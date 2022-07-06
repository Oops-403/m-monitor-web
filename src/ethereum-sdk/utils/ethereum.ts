import { ethers } from 'ethers'
import { supportsInterfaceABI } from '../abi/singleFragments'
import { ReadProvider } from '../types'

export function validateWalletAddress (address: string) {
  if (!ethers.utils.isAddress(address)) {
    throw new Error('Invalid wallet address.')
  }
  if (address === ethers.constants.AddressZero) {
    throw new Error('Wallet cannot be the null address.')
  }
  return address.toLowerCase()
}

export async function isERC1155Asset (provider: ReadProvider, contractAddress: string) {
  const contract = new ethers.Contract(contractAddress, supportsInterfaceABI, provider)
  return contract.supportsInterface('0xd9b67a26')
}

export async function isERC721Asset (provider: ReadProvider, contractAddress: string) {
  const contract = new ethers.Contract(contractAddress, supportsInterfaceABI, provider)
  return contract.supportsInterface('0x80ac58cd')
}
