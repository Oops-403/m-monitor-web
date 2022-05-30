import { ethers, BaseContract, ContractInterface } from 'ethers'
import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { JsonFragment, FunctionFragment, EventFragment } from '@ethersProject/abi'

export async function validateContractAddress (provider: JsonRpcProvider | Web3Provider, address: string) {
  const contractCode = await provider.getCode(address)
  return contractCode !== '0x'
}

/**
 * @param abi
 * @param fragmentName
 * @returns { FunctionFragment }
 */
export function getFunctionFragment (abi: JsonFragment[], fnName: string): FunctionFragment {
  return new ethers.utils.Interface(abi).getFunction(fnName)
}

/**
 * @param abi
 * @param eventName
 * @returns { EventFragment }
 */
export function getEventFragment (abi: JsonFragment[], eventName: string): EventFragment {
  return new ethers.utils.Interface(abi).getEvent(eventName)
}

/**
 * @param provider
 * @param address
 * @param abis
 * @returns a instance of contract
 */
export function getContract<T extends BaseContract> (provider: JsonRpcProvider | Web3Provider, address: string, abis: ContractInterface) {
  return new ethers.Contract(address, abis, provider) as T
}
