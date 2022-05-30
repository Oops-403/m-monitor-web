import { BigNumberish, BigNumber, BaseContract, ContractTransaction } from 'ethers'
import { JsonFragment } from '@ethersProject/abi'

export const ERC1155ABI: Array<JsonFragment> = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'account',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'ApprovalForAll',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': '_creator',
        'type': 'address'
      }
    ],
    'name': 'CreatorChanged',
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
        'name': '_musician',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'SetMusician',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'openTime',
        'type': 'uint256'
      }
    ],
    'name': 'SetOpenTime',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
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
        'internalType': 'uint256[]',
        'name': 'ids',
        'type': 'uint256[]'
      },
      {
        'indexed': false,
        'internalType': 'uint256[]',
        'name': 'values',
        'type': 'uint256[]'
      }
    ],
    'name': 'TransferBatch',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
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
        'name': 'id',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'value',
        'type': 'uint256'
      }
    ],
    'name': 'TransferSingle',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'string',
        'name': 'value',
        'type': 'string'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'id',
        'type': 'uint256'
      }
    ],
    'name': 'URI',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_user',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
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
    'inputs': [
      {
        'internalType': 'address[]',
        'name': 'accounts',
        'type': 'address[]'
      },
      {
        'internalType': 'uint256[]',
        'name': 'ids',
        'type': 'uint256[]'
      }
    ],
    'name': 'balanceOfBatch',
    'outputs': [
      {
        'internalType': 'uint256[]',
        'name': '',
        'type': 'uint256[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': '_ids',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '_amounts',
        'type': 'uint256[]'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'batchMint',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_initialOwner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_initialSupply',
        'type': 'uint256'
      },
      {
        'internalType': 'string',
        'name': '_tokenIdURI',
        'type': 'string'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'create',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'currentSupply',
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
        'name': '_owner',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      }
    ],
    'name': 'getBalance',
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
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      }
    ],
    'name': 'getIdCreator',
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
        'internalType': 'string',
        'name': '_name',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_symbol',
        'type': 'string'
      },
      {
        'internalType': 'string',
        'name': '_templateURI',
        'type': 'string'
      },
      {
        'internalType': 'address',
        'name': '_proxyRegistryAddress',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_openTime',
        'type': 'uint256'
      }
    ],
    'name': 'initialize',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_account',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'internalType': 'bool',
        'name': 'isOperator',
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
      }
    ],
    'name': 'managers',
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
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      }
    ],
    'name': 'maxSupply',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': '',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'pure',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_quantity',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'mint',
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
    'name': 'musiciansWhiteList',
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
    'name': 'openMintTime',
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
    'inputs': [],
    'name': 'proxyRegistryAddress',
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
        'name': '_from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': '_ids',
        'type': 'uint256[]'
      },
      {
        'internalType': 'uint256[]',
        'name': '_amounts',
        'type': 'uint256[]'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'safeBatchTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_amount',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': '_data',
        'type': 'bytes'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_to',
        'type': 'address'
      },
      {
        'internalType': 'uint256[]',
        'name': '_ids',
        'type': 'uint256[]'
      }
    ],
    'name': 'setCreatorForIds',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_managers',
        'type': 'address[]'
      },
      {
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'setManagers',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address[]',
        'name': '_musicians',
        'type': 'address[]'
      },
      {
        'internalType': 'bool',
        'name': 'flag',
        'type': 'bool'
      }
    ],
    'name': 'setMusicians',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_openTime',
        'type': 'uint256'
      }
    ],
    'name': 'setOpenTime',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': '_proxyRegister',
        'type': 'address'
      }
    ],
    'name': 'setProxyRegistryAddress',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'string',
        'name': '_templateURI',
        'type': 'string'
      }
    ],
    'name': 'setTemplateURI',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      },
      {
        'internalType': 'string',
        'name': '_tokenIdURI',
        'type': 'string'
      }
    ],
    'name': 'setURI',
    'outputs': [],
    'stateMutability': 'nonpayable',
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
    'name': 'templateURI',
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
        'internalType': 'uint256',
        'name': '_id',
        'type': 'uint256'
      }
    ],
    'name': 'uri',
    'outputs': [
      {
        'internalType': 'string',
        'name': '',
        'type': 'string'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
]

export const enum ERC1155Function {
  Name = 'name',
  Symbol = 'symbol',
  TemplateURI = 'templateURI',
  BalanceOf = 'balanceOf',
  CurrentSupply = 'currentSupply',
  GetBalance = 'getBalance',
  GetIdCreator = 'getIdCreator',
  Uri = 'uri',
  IsApprovedForAll = 'isApprovedForAll',
  MaxSupply = 'maxSupply',
  Mint = 'mint',
  MusiciansWhiteList = 'musiciansWhiteList',
  OpenMintTime = 'openMintTime',
  ProxyRegistryAddress = 'proxyRegistryAddress',
  SafeTransferFrom = 'safeTransferFrom',
  SetApprovalForAll = 'setApprovalForAll',
  SupportsInterface = 'supportsInterface',
}

export const enum ERC1155Event {
  ApprovalForAll = 'ApprovalForAll', /* account, operator, bool */
  CreatorChanged = 'CreatorChanged', /* tokenId, creatorAddress */
  OwnershipTransferred = 'OwnershipTransferred', /* previousOwner, newOwner */
  SetMusician = 'SetMusician', /* musician: address, flag: boolean */
  SetOpenTime = 'SetOpenTime', /* openTime */
  TransferBatch = 'TransferBatch', /* operator, from, to, tokenIds, values */
  TransferSingle = 'TransferSingle', /* operator, from, to, tokenId, value */
  URI = 'URI', /* value, tokenId */
}

export declare class ERC1155Contract extends BaseContract {
  // balanceOfBatch, batchMint, safeBatchTransferFrom, setCreatorForIds
  name: () => Promise<string>;
  symbol: () => Promise<string>;
  templateURI: () => Promise<string>;
  uri: (tokenId: BigNumberish) => Promise<string>;
  balanceOf: (owner: string, tokenId: BigNumberish) => Promise<BigNumber>;
  currentSupply: (tokenId: BigNumberish) => Promise<BigNumber>;
  getBalance: (owner: string, tokenId: BigNumberish) => Promise<BigNumber>;
  getIdCreator: (tokenId: BigNumberish) => Promise<string>;
  isApprovedForAll: (owner: string, operator: string) => Promise<boolean>;
  maxSupply: (id: BigNumberish) => Promise<BigNumber>;
  mint: (to: string, id: BigNumberish, quantity: BigNumberish, data: string) => Promise<ContractTransaction>;
  musiciansWhiteList?: (address: string) => Promise<boolean>;
  openMintTime?: () => Promise<BigNumber>;
  proxyRegistryAddress?: () => Promise<string>;
  safeTransferFrom: (from: string, to: string, tokenId: BigNumberish, amount: BigNumberish, data: string) => Promise<ContractTransaction>;
  setApprovalForAll: (operator: string, bool: boolean) => Promise<ContractTransaction>;
  supportsInterface: (interfaceId: string) => Promise<boolean>;
}
