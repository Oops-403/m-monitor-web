import { JsonFragment } from '@ethersProject/abi'
import { BaseContract, BigNumber, BigNumberish, ContractTransaction } from 'ethers'

export const TokenFarmsABI: Array<JsonFragment> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint248',
        'name': 'depositAmount',
        'type': 'uint248'
      },
      {
        'indexed': false,
        'internalType': 'uint8',
        'name': 'level',
        'type': 'uint8'
      }
    ],
    'name': 'Deposit',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_myINFTFarms',
        'type': 'address'
      }
    ],
    'name': 'MyINFTFarmsChanged',
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
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_rewardPerToken',
        'type': 'uint256'
      }
    ],
    'name': 'RewardStartHeightChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      }
    ],
    'name': 'RewardTokenChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetTransfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'withdrawAmount',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'burnAmount',
        'type': 'uint256'
      }
    ],
    'name': 'Withdraw',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'rewardUser',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      }
    ],
    'name': 'allowance',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'decimals',
    'outputs': [
      {
        'internalType': 'uint8',
        'name': '',
        'type': 'uint8'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'subtractedValue',
        'type': 'uint256'
      }
    ],
    'name': 'decreaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint248',
        'name': '_amount',
        'type': 'uint248'
      },
      {
        'internalType': 'uint8',
        'name': '_level',
        'type': 'uint8'
      }
    ],
    'name': 'deposit',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'getDepositUserInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'waitWithdrawAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'needBurnAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'pendingRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'userDepositAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'allUserDepositAmount',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'APR',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getReward',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'spender',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'addedValue',
        'type': 'uint256'
      }
    ],
    'name': 'increaseAllowance',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_mytToken',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_rewardStartBlock',
        'type': 'uint256'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'lastRewardHeight',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'latestRewardHeight',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'name',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
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
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'pendingReward',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'periodFinish',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
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
    'inputs': [],
    'name': 'rewardPerBlock',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'rewardPerToken',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'rewardPerTokenStored',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'rewardStartHeight',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_myINFTFarms',
        'type': 'address'
      }
    ],
    'name': 'setINFTFarms',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_mytToken',
        'type': 'address'
      }
    ],
    'name': 'setMYTToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_startHeight',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardStartHeight',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'symbol',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalDepositAmounts',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transfer',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'sender',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'recipient',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'amount',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
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
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userDepositAmounts',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userRewardPerTokenPaid',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      }
    ],
    'name': 'userWaitClaimRewards',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'waitWithdrawInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'withdrawTime',
        'type': 'uint256'
      },
      {
        'internalType': 'uint248',
        'name': 'amount',
        'type': 'uint248'
      },
      {
        'internalType': 'uint8',
        'name': 'level',
        'type': 'uint8'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

export const enum TokenFarmFunction {
  // 'initialize',
  Name = 'name',
  Symbol = 'symbol',
  Owner = 'owner',
  TotalSupply = 'totalSupply',
  Allowance = 'allowance',
  BalanceOf = 'balanceOf',
  Decimals = 'decimals',
  DecreaseAllowance = 'decreaseAllowance',
  IncreaseAllowance = 'increaseAllowance',
  LastRewardHeight = 'lastRewardHeight',
  LatestRewardHeight = 'latestRewardHeight',
  PendingReward = 'pendingReward',
  RewardPerBlock = 'rewardPerBlock',
  RewardPerToken = 'rewardPerToken',
  RewardPerTokenStored = 'rewardPerTokenStored',
  RewardStartHeight = 'rewardStartHeight',
  SetINFTFarms= 'setINFTFarms',
  SetRewardStartHeight = 'setRewardStartHeight',
  TotalDepositAmounts = 'totalDepositAmounts',
  UserDepositAmounts = 'userDepositAmounts',
  UserRewardPerTokenPaid = 'userRewardPerTokenPaid',
  UserWaitClaimRewards = 'userWaitClaimRewards',
  WaitWithdrawInfo = 'waitWithdrawInfo',
  GetDepositUserInfo = 'getDepositUserInfo',

  Approve = 'approve',
  Deposit = 'deposit',
  GetReward = 'getReward',
  Withdraw = 'withdraw'
}

export enum TokenFarmEvent {
  RewardUser = 'rewardUser',
  Deposit = 'Deposit',
  Withdraw = 'Withdraw'
}

interface UserInfo {
  waitWithdrawAmount: BigNumber;
  needBurnAmount: BigNumber;
  pendingRewards: BigNumber;
  userDepositAmount: BigNumber;
  allUserDepositAmount: BigNumber;
  APR: BigNumber;
}

export declare class TokenFarm extends BaseContract {
  // decimals number; initialize, periodFinish, renounceOwnership
  // decreaseAllowance, increaseAllowance
  // setINFTFarms, setMYTToken, setRewardStartHeight
  // transfer, transferFrom, transferOwnership, transferToken
  // userRewardPerTokenPaid, waitWithdrawInfo
  name: () => Promise<string>;
  symbol: () => Promise<string>;
  owner: () => Promise<string>;
  totalSupply: () => Promise<BigNumber>;
  allowance: (owner: string, spender: string) => Promise<BigNumber>;
  balanceOf: (account: string) => Promise<BigNumber>;
  lastRewardHeight: () => Promise<BigNumber>;
  latestRewardHeight: () => Promise<BigNumber>;
  rewardPerBlock: () => Promise<BigNumber>;
  rewardPerToken: () => Promise<BigNumber>;
  rewardPerTokenStored: () => Promise<BigNumber>;
  rewardStartHeight: () => Promise<BigNumber>;
  totalDepositAmounts: () => Promise<BigNumber>;
  userDepositAmounts: (account: string) => Promise<BigNumber>;
  pendingReward: (account: string) => Promise<BigNumber>;
  userWaitClaimRewards: (account: string) => Promise<BigNumber>;
  getDepositUserInfo: (account: string) => Promise<UserInfo>;

  approve: (sender: string, amount: BigNumberish) => Promise<boolean>;
  deposit: (amount: BigNumberish, level: number) => Promise<ContractTransaction>;
  getReward: () => Promise<ContractTransaction>;
  withdraw: (amount: BigNumberish) => Promise<ContractTransaction>;
}
