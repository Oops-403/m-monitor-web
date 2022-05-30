import { BigNumber } from 'ethers'

export interface BaseAssetContract {
  address: string;
  ercType: 'ERC20' | 'ERC721' | 'ERC1155';
}

export interface BaseAsset {
  id: string;
  address: string;
  ERCType: 'ERC20'|'ERC721'|'ERC1155';
}

export interface TxData {
  from?: string;
  to?: string;
  gasLimit?: number;
  value?: BigNumber;
}

export type WyvernAtomicMatchParameters = [
  string[],
  BigNumber[],
  Array<(number | BigNumber)>,
  string,
  string,
  string,
  string,
  string,
  string,
  Array<(number | BigNumber)>,
  string[]
]

export enum LPToken {
  MYT_ETH,
  MYT_USDC
}

export enum Network {
  Main = 'main',
  Rinkeby = 'rinkeby'
}

// Wyvern order side: buy or sell.
export enum OrderSide {
  Buy = 0,
  Sell = 1
}

/**
 * Wyvern fee method
 * ProtocolFee: Charge maker fee to seller and charge taker fee to buyer.
 * SplitFee: Maker fees are deducted from the token amount that the maker receives.
 * Taker fees are extra tokens that must be paid by the taker.
 */
export enum FeeMethod {
  ProtocolFee = 0,
  SplitFee = 1
}

/**
 * Wyvern: type of sale. Fixed or Dutch auction
 * Note: not imported from wyvern.js because it uses
 * EnglishAuction as 1 and DutchAuction as 2
 */
export enum SaleKind {
  FixedPrice = 0,
  DutchAuction = 1
}

/**
 * Types of asset contracts
 * Given by the asset_contract_type in the OpenSea API
 */
export enum AssetContractType {
  Fungible = 'fungible',
  SemiFungible = 'semi-fungible',
  NonFungible = 'non-fungible',
  Unknown = 'unknown'
}

// Wyvern Schemas
export enum WyvernSchemaName {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC721v3 = 'ERC721v3',
  ERC1155 = 'ERC1155',
  ENSShortNameAuction = 'ENSShortNameAuction'
}

/**
 * The NFT version that this contract uses.
 * ERC721 versions are:
 * 1.0: CryptoKitties and early 721s, which lack approve-all and
 *      have problems calling `transferFrom` from the owner's account.
 * 2.0: CryptoSaga and others that lack `transferFrom` and have
 *      `takeOwnership` instead
 * 3.0: The current OpenZeppelin standard:
 *      https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721.sol
 * Special cases:
 * locked: When the transfer function has been locked by the dev
 */
export enum TokenStandardVersion {
  Unsupported = 'unsupported',
  Locked = 'locked',
  Enjin = '1155-1.0',
  ERC721v1 = '1.0',
  ERC721v2 = '2.0',
  ERC721v3 = '3.0'
}

export enum WyvernAssetLocation {
  Account = 'account',
  Proxy = 'proxy',
  Other = 'other'
}

export enum AuctionType {
  Dutch = 'dutch',
  English = 'english',
  MinPrice = 'min_price'
}
