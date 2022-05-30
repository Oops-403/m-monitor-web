declare interface FarmLog {
  wallet: string;
  contracAddress: string;
  blockNumber: number;
  transactionHash: string;
  eventName: string;
  logIndex: number;
  claimedReward?: number;
  depositAmount?: number;
  years?: number;
  withdrawAmount?: number;
  burnedAmount?: number;
  tokenContract?: string;
  tokenId?: string;
  hashrate?: number;
  poolId?: number;
}

declare interface FarmUser {
  wallet: string;
  latestLoginIp?: string;
  xlang?: string;
  xversion?: string;
  xua?: string;
  isRisk?: boolean;
  isBlack?: boolean;
  balance?: number;
  tokenPending?: number;
  nftPending?: number;
  lpPending?: number;
  totalPending?: number;
  totalClaimed?: number;
  chainHashrate?: number;
  serverHashrate?: number;
  totalReward?: number;
}
