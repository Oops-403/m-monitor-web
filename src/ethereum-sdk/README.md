### contract address
- rinkeby
'WyvernExchange': '0x5206e78b21ce315ce284fb24cf05e0585a93b1d9',
'WyvernProxyRegistry': '0xf57b2c51ded3a29e6891aba85459d600256cf317',

### order type
```js
/**
  exchange: string;
  maker: string;
  taker: string;
  makerRelayerFee: BigNumber;
  takerRelayerFee: BigNumber;
  makerProtocolFee: BigNumber;
  takerProtocolFee: BigNumber;
  feeRecipient: string;
  feeMethod: number;
  side: number;
  saleKind: number;
  target: string;
  howToCall: number;
  calldata: string;
  replacementPattern: string;
  staticTarget: string;
  staticExtradata: string;
  paymentToken: string;
  basePrice: BigNumber;
  extra: BigNumber;
  listingTime: BigNumber;
  expirationTime: BigNumber;
  salt: BigNumber;
 */
const order = {
  exchange: WyvernSdk.getExchangeContractAddress(network),
  maker: accountAddress,
  taker: buyerAddress || NULL_ADDRESS,
  makerRelayerFee,
  takerRelayerFee,
  makerProtocolFee,
  takerProtocolFee,
  paymentToken,
  feeRecipient,
  target,
  staticTarget,
  basePrice,
  extra,
  feeMethod,
  side: OrderSide.Sell,
  saleKind: orderSaleKind,
  howToCall: HowToCall.Call,
  calldata,
  replacementPattern,
  staticExtradata,
  listingTime: times.listingTime,
  expirationTime: times.expirationTime,
  salt: WyvernSdk.generatePseudoRandomSalt(),
  quantity: quantityBN,
  makerReferrerFee,
  waitingForBestCounterOrder: waitForHighestBid,
  englishAuctionReservePrice: reservePrice ? param.makeBigNumber(reservePrice) : undefined,
  metadata: {
    asset: wyAsset,
    schema: schema.name
  }
}
```
