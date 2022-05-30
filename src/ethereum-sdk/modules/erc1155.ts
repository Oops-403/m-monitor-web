import { BigNumberish, ContractTransaction, ethers } from 'ethers'
import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { ERC1155Contract, ERC1155Function, ERC1155ABI } from '../abi/erc1155'
import { getContract, getFunctionFragment } from '../utils/contract'
import { TxData } from '../types'

export interface ERC1155ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
}

export class ERC1155 {
  private config: ERC1155ContractConfig;

  constructor (config: ERC1155ContractConfig) {
    this.config = config
  }

  public async name (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Name)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.name()
  }

  public async symbol (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Symbol)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.symbol()
  }

  public async templateURI (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.TemplateURI)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.templateURI()
  }

  public async currentSupply (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.CurrentSupply)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.currentSupply(tokenId)
  }

  public async getIdCreator (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.GetIdCreator)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.getIdCreator && contract.getIdCreator(tokenId)
  }

  public async getUri (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Uri)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.uri && contract.uri(tokenId)
  }

  public async balanceOf (provider: JsonRpcProvider | Web3Provider, owner: string, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.BalanceOf)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    const balance = await contract.balanceOf(owner, tokenId)
    return ethers.utils.formatUnits(balance, 0)
  }

  public async getBalance (provider: JsonRpcProvider | Web3Provider, owner: string, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.GetBalance)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    const balance = await contract.getBalance(owner, tokenId)
    return ethers.utils.formatUnits(balance, 0)
  }

  public async isApprovedForAll (provider: JsonRpcProvider | Web3Provider, owner: string, operator: string) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.IsApprovedForAll)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.isApprovedForAll(owner, operator)
  }

  public async isWhiteUser (provider: JsonRpcProvider | Web3Provider, accountAddress: string) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.MusiciansWhiteList)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.musiciansWhiteList && contract.musiciansWhiteList(accountAddress)
  }

  public async setApprovalForAll (web3Provider: Web3Provider, operator: string, approved: boolean): Promise<ContractTransaction> {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.SetApprovalForAll)
    const contract = getContract<ERC1155Contract>(web3Provider, this.config.contractAddress, [abi])
    const signer = await web3Provider.getSigner()

    const estimateGas = await contract.connect(signer).estimateGas.setApprovalForAll(operator, approved)
    const txData: TxData = {
      gasLimit: Math.ceil(estimateGas.toNumber() * this.config.gasIncreaseFactor)
    }

    return await contract.connect(signer).setApprovalForAll(operator, approved, txData)
  }
}
