import { utils, BigNumber, providers } from 'ethers'
import { getFunctionFragment, getContract } from '../utils/contract'
import { MYClaimABI, AirdropFunction, AirdropContract } from '../abi/airdrop'
import { TxData } from '../types'

export interface AirdropConfig {
  gasIncreaseFactor: number;
  airdropContractAddress: string;
}

export class Airdrop {
  private config: AirdropConfig;

  constructor (config: AirdropConfig) {
    this.config = config
  }

  public async toClaimToken (web3Provider: providers.Web3Provider, amount: string, signature: string) {
    const claimAmount = BigNumber.from(amount)

    const abi = getFunctionFragment(MYClaimABI, AirdropFunction.Claim)

    const contract = getContract<AirdropContract>(web3Provider, this.config.airdropContractAddress, [abi])

    const signer = await web3Provider.getSigner()
    const estimateGas = await contract.connect(signer).estimateGas.Claim(claimAmount, signature)

    const txData: TxData = {
      gasLimit: Math.ceil(estimateGas.toNumber() * this.config.gasIncreaseFactor)
    }

    return await contract.connect(signer).Claim(claimAmount, signature, txData)
  }

  public async userClaimedAmount (provider: providers.JsonRpcProvider | providers.Web3Provider, amount: string, userAddress: string) {
    const claimAmount = utils.formatUnits(amount, 18)
    const abi = getFunctionFragment(MYClaimABI, AirdropFunction.UserClaimedAmount)
    const contract = getContract<AirdropContract>(provider, this.config.airdropContractAddress, [abi])
    return await contract.userClaimedAmount(claimAmount, userAddress)
  }
}
