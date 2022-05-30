import { BaseContract, BigNumber, BigNumberish, ContractTransaction } from 'ethers'
import { JsonFragment } from '@ethersProject/abi'

export const NFTFarmsABI: Array<JsonFragment> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      }
    ],
    'name': 'FirstRewardPeriodChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_hrSigner',
        'type': 'address'
      }
    ],
    'name': 'HrSignerChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      }
    ],
    'name': 'MaxHalvingYearsChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      }
    ],
    'name': 'OneYearBlockNumChanged',
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
        'name': '_periodFinishHeight',
        'type': 'uint256'
      }
    ],
    'name': 'PeriodFinishHeightChanged',
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
    'name': 'RewardPerTokenChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_rewardStartHeight',
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
        'name': '_manager',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetManager',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_manager',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetNftWhite',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
        'type': 'uint256'
      }
    ],
    'name': 'SingleNFTMaxHashRateChanged',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': '_vmyt',
        'type': 'address'
      }
    ],
    'name': 'VMYTChanged',
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
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'stake1155NFT',
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
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'stake721NFT',
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
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashRate',
        'type': 'uint256'
      }
    ],
    'name': 'updateHashRate',
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
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw1155NFT',
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
        'indexed': true,
        'internalType': 'address',
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': '_hashrate',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw721NFT',
    'type': 'event'
  },
  {
    'inputs': [],
    'name': 'ERC1155InterfaceId',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'ERC721InterfaceId',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'HashRate_CALL_HASH_TYPE',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'UpdateHashRate_CALL_HASH_TYPE',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'boost',
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
    'name': 'boostByVMYT',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'firstRewardPeriod',
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
    'name': 'getDomainSeparatorV4',
    'outputs': [
      {
        'internalType': 'bytes32',
        'name': '',
        'type': 'bytes32'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getNFTFarmsInfo',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'nftRewardStartHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftPeriodFinishHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftInitRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftFirstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftOneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftActualRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftTotalHashRate',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftSingleNFTMaxHashRate',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'nftSendRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'address',
        'name': 'nftRewardToken',
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
        'name': '_tokenContract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_vNonceValue',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes32',
        'name': '_r',
        'type': 'bytes32'
      },
      {
        'internalType': 'bytes32',
        'name': '_s',
        'type': 'bytes32'
      }
    ],
    'name': 'getNFTHashRate',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_signTime',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_totalRewardRatio',
        'type': 'uint256'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'tokenContract',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': 'hashRate',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
        'name': '_nftsHashRates',
        'type': 'tuple[]'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'creator',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'rewardRatio',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftCreatorReward[]',
        'name': '_nftCreatorRewards',
        'type': 'tuple[]'
      },
      {
        'internalType': 'bytes',
        'name': '_signatures',
        'type': 'bytes'
      }
    ],
    'name': 'getReward',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'getRewardPerBlock',
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
        'name': '_user',
        'type': 'address'
      }
    ],
    'name': 'getUserNftFarmsInfo',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'tokenContract',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256',
            'name': 'hashRate',
            'type': 'uint256'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
        'name': 'userStakedNfts',
        'type': 'tuple[]'
      },
      {
        'internalType': 'uint256',
        'name': 'vMYTBalance',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'claimableRewards',
        'type': 'uint256'
      },
      {
        'internalType': 'uint128',
        'name': 'currentPercent',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'soltNum',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_account',
        'type': 'address'
      }
    ],
    'name': 'getWeightByVMYT',
    'outputs': [
      {
        'internalType': 'uint128',
        'name': '',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': '',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'hrSigner',
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
    'name': 'initRewardPerBlock',
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
        'name': '_myt',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_vmyt',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_hrSigner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_startHeight',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_initRewardPerBlock',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
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
    'name': 'lastUpdateHeight',
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
    'name': 'latestHeightReward',
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
    'name': 'maxHalvingYears',
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
    'name': 'nftNonceMap',
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
    'name': 'nftWhiteMap',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
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
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC1155BatchReceived',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
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
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC1155Received',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
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
        'internalType': 'address',
        'name': '',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '',
        'type': 'bytes'
      }
    ],
    'name': 'onERC721Received',
    'outputs': [
      {
        'internalType': 'bytes4',
        'name': '',
        'type': 'bytes4'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'oneYearBlockNum',
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
    'name': 'periodFinishHeight',
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
    'inputs': [],
    'name': 'rewardToken',
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
        'name': '_hrSigner',
        'type': 'address'
      }
    ],
    'name': 'setHashRateSigner',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_nfts',
        'type': 'address[]'
      },
      {
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'setNFTWhiteMap',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_firstRewardPeriod',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_maxHalvingYears',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_oneYearBlockNum',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_periodFinishHeight',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardConfig',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_rewardPerBlock',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardPerBlock',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_rewardStartHeight',
        'type': 'uint256'
      }
    ],
    'name': 'setRewardStartHeight',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_rewardToken',
        'type': 'address'
      }
    ],
    'name': 'setRewardToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_singleNFTMaxHashRate',
        'type': 'uint256'
      }
    ],
    'name': 'setSingleNFTMaxHashRate',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_vMYT',
        'type': 'address'
      }
    ],
    'name': 'setVMYTToken',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'singleNFTMaxHashRate',
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
        'name': '_contract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_vNonceValue',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes32',
        'name': '_r',
        'type': 'bytes32'
      },
      {
        'internalType': 'bytes32',
        'name': '_s',
        'type': 'bytes32'
      }
    ],
    'name': 'stake',
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
      },
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'stakedNFTInfoMap',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'hashrate',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'bytes4',
        'name': 'interfaceId',
        'type': 'bytes4'
      }
    ],
    'name': 'supportsInterface',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'totalHashRate',
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
        'components': [
          {
            'internalType': 'address',
            'name': 'owner',
            'type': 'address'
          },
          {
            'components': [
              {
                'internalType': 'address',
                'name': 'tokenContract',
                'type': 'address'
              },
              {
                'internalType': 'uint256',
                'name': 'tokenId',
                'type': 'uint256'
              },
              {
                'internalType': 'uint256',
                'name': 'hashRate',
                'type': 'uint256'
              }
            ],
            'internalType': 'struct HashRateUpgradeable.NftNewHashRate[]',
            'name': 'nftsHashRates',
            'type': 'tuple[]'
          }
        ],
        'internalType': 'struct HashRateUpgradeable.UserHashRateParams[]',
        'name': '_userNewHashRates',
        'type': 'tuple[]'
      }
    ],
    'name': 'updateAllHashRate',
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
    'name': 'userLatestClaimSignTime',
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
    'name': 'userNFTs',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'tokenContract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
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
    'name': 'userRewardInfoMap',
    'outputs': [
      {
        'internalType': 'uint128',
        'name': 'userHashrateFixed',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userTotalHashRate',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userRewardPerTokenPaid',
        'type': 'uint128'
      },
      {
        'internalType': 'uint128',
        'name': 'userReward',
        'type': 'uint128'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [],
    'name': 'vMYT',
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
        'name': '_contract',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
]

export const enum NFTFarmFunction {
  // ERC1155InterfaceId, ERC721InterfaceId, HashRate_CALL_HASH_TYPE, UpdateHashRate_CALL_HASH_TYPE
  Owner = 'owner',
  FirstRewardPeriod = 'firstRewardPeriod',
  LastUpdateHeight = 'lastUpdateHeight',
  LatestHeightReward = 'latestHeightReward',
  MaxHalvingYears = 'maxHalvingYears',
  OneYearBlockNum = 'oneYearBlockNum',
  GetDomainSeparatorV4 = 'getDomainSeparatorV4',
  GetNFTFarmsInfo = 'getNFTFarmsInfo',
  GetNFTHashRate = 'getNFTHashRate',
  GetRewardPerBlock = 'getRewardPerBlock',
  GetUserNftFarmsInfo = 'getUserNftFarmsInfo',
  GetWeightByVMYT = 'getWeightByVMYT',
  HrSigner = 'hrSigner',
  NftNonceMap = 'nftNonceMap',
  NftWhiteMap = 'nftWhiteMap',
  PeriodFinishHeight = 'periodFinishHeight',
  RewardPerBlock = 'rewardPerBlock',
  RewardPerTokenStored = 'rewardPerTokenStored',
  RewardStartHeight = 'rewardStartHeight',
  RewardToken = 'rewardToken',
  SingleNFTMaxHashRate = 'singleNFTMaxHashRate',
  TotalHashRate = 'totalHashRate',
  PendingReward = 'pendingReward',
  StakedNFTInfoMap = 'stakedNFTInfoMap',
  UserLatestClaimSignTime = 'userLatestClaimSignTime',
  UserNFTs = 'userNFTs',
  VMYT = 'vMYT',
  UserRewardInfoMap = 'userRewardInfoMap',

  Boost = 'boost',
  BoostByVMYT = 'boostByVMYT',
  GetReward = 'getReward',
  Stake = 'stake',
  Withdraw = 'withdraw'
}

export enum NFTFarmsEvent {
  FirstRewardPeriodChanged = 'FirstRewardPeriodChanged',
  HrSignerChanged = 'HrSignerChanged',
  MaxHalvingYearsChanged = 'MaxHalvingYearsChanged',
  OneYearBlockNumChanged = 'OneYearBlockNumChanged',
  OwnershipTransferred = 'OwnershipTransferred',
  PeriodFinishHeightChanged = 'PeriodFinishHeightChanged',
  RewardPerTokenChanged = 'RewardPerTokenChanged',
  RewardStartHeightChanged = 'RewardStartHeightChanged',
  RewardTokenChanged = 'RewardTokenChanged',
  SetNftWhite = 'SetNftWhite',
  SetManager = 'SetManager',
  SingleNFTMaxHashRateChanged = 'SingleNFTMaxHashRateChanged',
  VMYTChanged = 'VMYTChanged',
  RewardUser = 'rewardUser',
  Stake1155NFT = 'stake1155NFT',
  Stake721NFT = 'stake721NFT',
  UpdateHashRate = 'updateHashRate',
  Withdraw1155NFT = 'withdraw1155NFT',
  Withdraw721NFT = 'withdraw721NFT'
}
interface NFTFarmInfo {
  nftRewardStartHeight: BigNumber;
  nftPeriodFinishHeight: BigNumber;
  nftInitRewardPerBlock: BigNumber;
  nftFirstRewardPeriod: BigNumber;
  nftOneYearBlockNum: BigNumber;
  nftRewardPerBlock: BigNumber;
  nftActualRewardPerBlock: BigNumber;
  nftTotalHashRate: BigNumber;
  nftSingleNFTMaxHashRate: BigNumber;
  nftSendRewards: BigNumber;
  nftRewardToken: BigNumber;
}

interface UserStakedNFT {
  tokenContract: string;
  tokenId: BigNumberish;
  hashRate: BigNumberish;
}

interface UserFarmInfo {
  userStakedNfts: UserStakedNFT[];
  vMYTBalance: BigNumber;
  claimableRewards: BigNumber;
  currentPercent: BigNumber;
  soltNum: BigNumber;
}

interface NFTHashRates {
  tokenContract: string;
  tokenId: BigNumberish;
  hashRate: BigNumberish;
}

interface NFTCreatorRewards {
  creator: string;
  rewardRatio: BigNumberish;
}

interface UserRewardInfo {
  userHashrateFixed: BigNumber;
  userTotalHashRate: BigNumber;
  userRewardPerTokenPaid: BigNumber;
  userReward: BigNumber;
}

export declare class NFTFarm extends BaseContract {
  // initRewardPerBlock, initialize, onERC1155BatchReceived, onERC1155Received, onERC721Received
  // renounceOwnership, setHashRateSigner, setNFTWhiteMap, setRewardConfig,
  // setRewardPerBlock, setRewardStartHeight, setRewardToken, setSingleNFTMaxHashRate
  // setVMYTToken, supportsInterface, transferOwnership, transferToken, updateAllHashRate
  owner: () => Promise<string>;
  firstRewardPeriod: () => Promise<BigNumber>;
  lastUpdateHeight: () => Promise<BigNumber>;
  latestHeightReward: () => Promise<BigNumber>;
  maxHalvingYears: () => Promise<BigNumber>;
  oneYearBlockNum: () => Promise<BigNumber>;
  getDomainSeparatorV4: () => Promise<string>;
  getNFTFarmsInfo: () => Promise<NFTFarmInfo>;
  getNFTHashRate: (tokenContact: string, tokenId: BigNumberish, vNonceValue: BigNumberish, r: string, s: string) => Promise<BigNumber>;
  getRewardPerBlock: () => Promise<BigNumber>;
  getUserNftFarmsInfo: (account: string) => Promise<UserFarmInfo>;
  getWeightByVMYT: (account: string) => Promise<any>;
  hrSigner: () => Promise<string>;
  nftNonceMap: (addr: string, uint: BigNumberish) => Promise<BigNumber>;
  nftWhiteMap: (contractAddress: string) => Promise<boolean>;
  periodFinishHeight: () => Promise<BigNumber>;
  rewardPerBlock: () => Promise<BigNumber>;
  rewardPerTokenStored: () => Promise<BigNumber>;
  rewardStartHeight: () => Promise<BigNumber>;
  rewardToken: () => Promise<string>;
  singleNFTMaxHashRate: () => Promise<BigNumber>;
  totalHashRate: (account: string) => Promise<BigNumber>;
  pendingReward: (account: string) => Promise<BigNumber>;
  stakedNFTInfoMap: (tokenContact: string, tokenId: BigNumberish) => Promise<{owner: string; hashrate: BigNumber}>;
  userLatestClaimSignTime: (account: string) => Promise<BigNumber>;
  userNFTs: (account: string, uint: BigNumberish) => Promise<{tokenContract: string; tokenId: BigNumber}>;
  vMYT: () => Promise<string>;
  userRewardInfoMap: (account: string) => Promise<UserRewardInfo>;

  boost: () => Promise<ContractTransaction>;
  boostByVMYT: (account: string) => Promise<ContractTransaction>;
  getReward: (signTime: BigNumberish, totalRewardRatio: BigNumberish, nftsHashRates: NFTHashRates[], nftCreatorRewards: NFTCreatorRewards[], signatures: string) => Promise<ContractTransaction>;
  stake: (contractAddress: string, tokenId: BigNumberish, vNonceValue: BigNumberish, r: string, s: string) => Promise<ContractTransaction>;
  withdraw: (tokenContact: string, tokenId: BigNumberish) => Promise<ContractTransaction>;
}
