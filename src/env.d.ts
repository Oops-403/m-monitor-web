declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production';
    readonly VUE_APP_BUILD_ID: 'development' | 'production' | 'test' | 'staging'

    readonly VUE_APP_ETH_NETWORK: 'main' | 'rinkeby';
    readonly VUE_APP_URL_INFURA: string;
    readonly VUE_APP_URL_ETHERSCAN: string;

    readonly VUE_APP_DEFAULT_GAS_INCREASE_FACTOR: number;
  }
}
