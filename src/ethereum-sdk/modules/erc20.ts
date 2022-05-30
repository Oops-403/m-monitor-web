import { ethers } from 'ethers'
import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { getContract, getFunctionFragment } from '../utils/contract'
import { ERC20ABI, ERC20Contract, ERC20Function } from '../abi/erc20'
import { TxData } from '../types'

export interface ERC20ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
  decimals?: number;
}

export class ERC20 {
  private config: ERC20ContractConfig;

  constructor (config: ERC20ContractConfig) {
    this.config = config
  }

  public async tokenName (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Name)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    return contract.name()
  }

  public async tokenSymbol (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Symbol)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    return contract.symbol()
  }

  public async tokenVersion (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Version)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    return contract.version()
  }

  public async tokenDecimals (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Decimals)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    return contract.decimals()
  }

  public async totalSupply (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.TotalSupply)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    const total = await contract.totalSupply()
    const decimals = this.config.decimals ? this.config.decimals : await this.tokenDecimals(provider)
    return ethers.utils.formatUnits(total, decimals)
  }

  public async balanceOf (provider: JsonRpcProvider | Web3Provider, account: string) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Allowance)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    const decimals = this.config.decimals ? this.config.decimals : await this.tokenDecimals(provider)
    const balance = await contract.balanceOf(account)
    return ethers.utils.formatUnits(balance, decimals)
  }

  public async allowance (provider: JsonRpcProvider | Web3Provider, owner: string, spender: string) {
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Allowance)
    const contract = getContract<ERC20Contract>(provider, this.config.contractAddress, [abi])
    const decimals = this.config.decimals ? this.config.decimals : await this.tokenDecimals(provider)
    const allowanceAmount = await contract.allowance(owner, spender)
    return ethers.utils.formatUnits(allowanceAmount, decimals)
  }

  public async approve (web3Provider: Web3Provider, spender: string, value: string) {
    const amount = ethers.utils.parseUnits(value, 18)
    const abi = getFunctionFragment(ERC20ABI, ERC20Function.Approve)
    const contract = getContract<ERC20Contract>(web3Provider, this.config.contractAddress, [abi])
    const signer = await web3Provider.getSigner()
    const estimateGas = await contract.connect(signer).estimateGas.approve(spender, amount)

    const txData: TxData = {
      gasLimit: Math.ceil(estimateGas.toNumber() * this.config.gasIncreaseFactor)
    }
    return await contract.connect(signer).estimateGas.approve(spender, amount, txData)
  }

  // transferFrom: (from: string, to: string, value: BigNumberish) => Promise<boolean>;
  // transfer: (to: string, value: BigNumberish) => Promise<boolean>;
  // approveAndCall: (spender: string, value: BigNumberish, extraData: string) => Promise<boolean>;
}
