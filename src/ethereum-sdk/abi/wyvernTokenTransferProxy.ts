import { BaseContract, BigNumberish, ContractInterface, utils } from 'ethers'

export const wyvernTokenTransferProxyABI: Exclude<ContractInterface, utils.Interface>= [
  {
    'constant': false,
    'inputs': [
      {
        'name': 'token',
        'type': 'address'
      },
      {
        'name': 'from',
        'type': 'address'
      },
      {
        'name': 'to',
        'type': 'address'
      },
      {
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'registry',
    'outputs': [
      {
        'name': '',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'name': 'registryAddr',
        'type': 'address'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  }
]

export const enum WyvernTokenTransferProxyFunction {
  TransferFrom = 'transferFrom',
  Registry = 'registry',
}

export declare class WyvernTokenTransferProxyContract extends BaseContract {
  transferFrom: (tokenAddress: string, from: string, to: string, amount: BigNumberish) => Promise<boolean>;
  registry: () => Promise<string>;
}
