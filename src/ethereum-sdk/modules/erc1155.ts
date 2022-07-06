import { BigNumberish, ContractTransaction, ethers } from 'ethers'
// import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { ERC1155Contract, ERC1155Function, ERC1155ABI } from '../abi/erc1155'
import { getContract, getFunctionFragment } from '../utils/contract'
import { TxData, ReadProvider, WriteProvider } from '../types'

export interface ERC1155ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
}

export class ERC1155 {
  private config: ERC1155ContractConfig;

  constructor (config: ERC1155ContractConfig) {
    this.config = config
  }

  public async name (provider: ReadProvider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Name)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.name()
  }

  public async symbol (provider: ReadProvider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Symbol)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.symbol()
  }

  public async templateURI (provider: ReadProvider) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.TemplateURI)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.templateURI()
  }

  public async currentSupply (provider: ReadProvider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.CurrentSupply)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.currentSupply(tokenId)
  }

  public async getIdCreator (provider: ReadProvider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.GetIdCreator)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.getIdCreator && contract.getIdCreator(tokenId)
  }

  public async getUri (provider: ReadProvider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.Uri)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.uri && contract.uri(tokenId)
  }

  public async balanceOf (provider: ReadProvider, owner: string, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.BalanceOf)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    const balance = await contract.balanceOf(owner, tokenId)
    return ethers.utils.formatUnits(balance, 0)
  }

  public async getBalance (provider: ReadProvider, owner: string, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.GetBalance)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    const balance = await contract.getBalance(owner, tokenId)
    return ethers.utils.formatUnits(balance, 0)
  }

  public async isApprovedForAll (provider: ReadProvider, owner: string, operator: string) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.IsApprovedForAll)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.isApprovedForAll(owner, operator)
  }

  public async isWhiteUser (provider: ReadProvider, accountAddress: string) {
    const abi = getFunctionFragment(ERC1155ABI, ERC1155Function.MusiciansWhiteList)
    const contract = getContract<ERC1155Contract>(provider, this.config.contractAddress, [abi])
    return contract.musiciansWhiteList && contract.musiciansWhiteList(accountAddress)
  }

  public async setApprovalForAll (web3Provider: WriteProvider, operator: string, approved: boolean): Promise<ContractTransaction> {
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
