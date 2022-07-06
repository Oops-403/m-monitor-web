import { utils, BaseContract, BigNumberish, BigNumber, ContractTransaction, ContractInterface } from 'ethers'

export const MYClaimABI: Exclude<ContractInterface, utils.Interface> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_claimer',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_claimType',
        'type': 'uint256'
      }
    ],
    'name': 'Claimed',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'previousOwner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'OwnershipTransferred',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_claimType',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '_signature',
        'type': 'bytes'
      }
    ],
    'name': 'Claim',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claimSigner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'claimToken',
    'outputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_claimToken',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_signer',
        'type': 'address'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'owner',
    'outputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'renounceOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_signer',
        'type': 'address'
      }
    ],
    'name': 'setClaimSigner',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'newOwner',
        'type': 'address'
      }
    ],
    'name': 'transferOwnership',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'contract IERC20Upgradeable',
        'name': 'tokenAddress',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userClaimedAmount',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
]

export const enum AirdropFunction {
  Claim = 'Claim',
  UserClaimedAmount = 'userClaimedAmount'
}

export const enum AirdropEvent {
  Claimed = 'Claimed',
  OwnershipTransferred = 'OwnershipTransferred'
}

export declare class AirdropContract extends BaseContract {
  Claim: (amount: BigNumberish, claimType: BigNumberish, signature: string) => Promise<ContractTransaction>;
  userClaimedAmount: (amount: string, address: string) => Promise<BigNumber>;
}
