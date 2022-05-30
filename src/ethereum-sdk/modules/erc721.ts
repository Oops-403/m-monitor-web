import { BigNumberish, ContractTransaction, ethers } from 'ethers'
import { Web3Provider, JsonRpcProvider } from '@ethersProject/providers'
import { ERC721Contract, ERC721Function, ERC721V3ABI } from '../abi/erc721'
import { getContract, getFunctionFragment } from '../utils/contract'
import { TxData } from '../types'

export interface ERC721ContractConfig {
  contractAddress: string;
  gasIncreaseFactor: number;
}

export class ERC721 {
  private config: ERC721ContractConfig;

  constructor (config: ERC721ContractConfig) {
    this.config = config
  }

  public async name (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.Name)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.name()
  }

  public async version (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.Version)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.version()
  }

  public async symbol (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.Symbol)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.symbol()
  }

  public async totalSupply (provider: JsonRpcProvider | Web3Provider) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.TotalSupply)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.totalSupply()
  }

  public async balanceOf (provider: JsonRpcProvider | Web3Provider, owner: string) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.BalanceOf)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    const balance = await contract.balanceOf(owner)
    return ethers.utils.formatUnits(balance, 0)
  }

  public async ownerOf (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.OwnerOf)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.ownerOf(tokenId)
  }

  public async exists (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.Exists)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.exists(tokenId)
  }

  public async tokenURI (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.TokenURI)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.tokenURI(tokenId)
  }

  public async isApprovedForAll (provider: JsonRpcProvider | Web3Provider, owner: string, operator: string) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.IsApprovedForAll)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.isApprovedForAll(owner, operator)
  }

  public async tokenByIndex (provider: JsonRpcProvider | Web3Provider, index: BigNumberish) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.TokenByIndex)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.tokenByIndex && contract.tokenByIndex(index)
  }

  public async getApproved (provider: JsonRpcProvider | Web3Provider, tokenId: BigNumberish) {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.GetApproved)
    const contract = getContract<ERC721Contract>(provider, this.config.contractAddress, [abi])
    return contract.getApproved && contract.getApproved(tokenId)
  }

  // safeTransferFrom: (from: string, to: string, tokenId: BigNumberish, data?: string) => Promise<ContractTransaction>;
  // transferFrom: (from: string, to: string, tokenId: BigNumberish) => Promise<ContractTransaction>;
  // transfer: (to: string, tokenId: BigNumberish) => Promise<ContractTransaction>;

  public async approve (web3Provider: Web3Provider, spender: string, tokenId: BigNumberish): Promise<ContractTransaction> {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.Approve)
    const contract = getContract<ERC721Contract>(web3Provider, this.config.contractAddress, [abi])
    const signer = await web3Provider.getSigner()

    const estimateGas = await contract.connect(signer).estimateGas.approve(spender, tokenId)
    const txData: TxData = {
      gasLimit: Math.ceil(estimateGas.toNumber() * this.config.gasIncreaseFactor)
    }

    return await contract.connect(signer).approve(spender, tokenId, txData)
  }

  public async setApprovalForAll (web3Provider: Web3Provider, operator: string, approved: boolean): Promise<ContractTransaction> {
    const abi = getFunctionFragment(ERC721V3ABI, ERC721Function.SetApprovalForAll)
    const contract = getContract<ERC721Contract>(web3Provider, this.config.contractAddress, [abi])
    const signer = await web3Provider.getSigner()

    const estimateGas = await contract.connect(signer).estimateGas.setApprovalForAll(operator, approved)
    const txData: TxData = {
      gasLimit: Math.ceil(estimateGas.toNumber() * this.config.gasIncreaseFactor)
    }

    return await contract.connect(signer).setApprovalForAll(operator, approved, txData)
  }
}
