import { ethers, BaseContract, ContractInterface, utils, providers } from 'ethers'

export async function validateContractAddress (provider: providers.JsonRpcProvider | providers.Web3Provider, address: string): Promise<boolean> {
  const contractCode = await provider.getCode(address)
  return contractCode !== '0x'
}

/**
 * @param abi
 * @param fragmentName
 * @returns { utils.FunctionFragment }
 */
export function getFunctionFragment (abi: Exclude<ContractInterface, utils.Interface>, fnName: string): utils.FunctionFragment {
  return new ethers.utils.Interface(abi).getFunction(fnName)
}

/**
 * @param abi
 * @param eventName
 * @returns { utils.EventFragment }
 */
export function getEventFragment (abi: Exclude<ContractInterface, utils.Interface>, eventName: string): utils.EventFragment {
  return new ethers.utils.Interface(abi).getEvent(eventName)
}

/**
 * @param provider
 * @param address
 * @param abis
 * @returns a instance of contract
 */
export function getContract<T extends BaseContract> (provider: providers.Web3Provider | providers.JsonRpcProvider, address: string, abis: ContractInterface) {
  return new ethers.Contract(address, abis, provider) as T
}
