<script
  lang="ts"
  setup
>
import { onMounted, ref, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
import SyncButton from '@/components/SyncButton.vue'
import ReturnButton from '@/components/ReturnButton.vue'
import { getFarmUserByWallet, getFarmsLogList, setRiskWallet } from '@/api/modules/farm'

interface TotalStats {
  balance: number;
  totalClaimed: number;
  serverHashrate: number;
  chainHashrate: number;
  isBlack: boolean;
  isRisk: boolean;
  latestLoginIp: string;
  tokenClaimed: number;
  nftClaimed: number;
  lpClaimed: number;
  tokenPending: number;
  nftPending: number;
  lpPending: number;
  totalPending: number;
  wallet: string;
  xlang: string;
  xua: string;
  xversion: string;
  totalReward: number;
  createdAt: string;
  updatedAt: string;
}

const route = useRoute()
const message = useMessage()

const address = ref('')

let totalStats = reactive<TotalStats>({
  tokenClaimed: 0,
  nftClaimed: 0,
  lpClaimed: 0,
  tokenPending: 0,
  nftPending: 0,
  lpPending: 0,
  balance: 0,
  totalClaimed: 0,
  serverHashrate: 0,
  chainHashrate: 0,
  totalPending: 0,
  totalReward: 0,
  isBlack: false,
  isRisk: false,
  latestLoginIp: '',
  wallet: '',
  xlang: '',
  xua: '',
  xversion: '',
  createdAt: '',
  updatedAt: ''
})

const tableLoading = ref(false)

const poolList = ref([
  {
    name: 'token',
    list: [],
    pagination: {
      pageSize: 15
    },
    columns: [
      {
        title: 'Block',
        key: 'blockNumber'
      },
      {
        title: 'Txn Hash',
        key: 'transactionHash',
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              window.open('https://rinkeby.etherscan.io/tx/' + rowData.transactionHash)
            }
          }
        }
      },
      {
        title: 'Event',
        key: 'eventName'
      },
      {
        title: 'Claimed',
        key: 'claimedReward'
      },
      {
        title: 'Deposit',
        key: 'depositAmount'
      },
      {
        title: 'Years',
        key: 'years'
      },
      {
        title: 'Withdraw',
        key: 'withdrawAmount'
      }
    ]
  },
  {
    name: 'nft',
    list: [],
    pagination: {
      pageSize: 15
    },
    columns: [
      {
        title: 'Block',
        key: 'blockNumber'
      },
      {
        title: 'Txn Hash',
        key: 'transactionHash',
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              window.open('https://rinkeby.etherscan.io/tx/' + rowData.transactionHash)
            }
          }
        }
      },
      {
        title: 'Event',
        key: 'eventName'
      },
      {
        title: 'Claimed',
        key: 'claimedReward'
      },
      {
        title: 'Token Contract',
        key: 'tokenContract'
      },
      {
        title: 'Token Id',
        key: 'tokenId'
      },
      {
        title: 'Hashrate',
        key: 'hashrate'
      }
    ]
  },
  {
    name: 'lp',
    list: [],
    pagination: {
      pageSize: 15
    },
    columns: [
      {
        title: 'Block',
        key: 'blockNumber'
      },
      {
        title: 'Txn Hash',
        key: 'transactionHash',
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              window.open('https://rinkeby.etherscan.io/tx/' + rowData.transactionHash)
            }
          }
        }
      },
      {
        title: 'Event',
        key: 'eventName'
      },
      {
        title: 'Claimed',
        key: 'claimedReward'
      },
      {
        title: 'Deposit',
        key: 'depositAmount'
      },
      {
        title: 'Withdraw',
        key: 'withdrawAmount'
      }
    ]
  }
])

onMounted(async () => {
  await init()
})

async function init () {
  address.value = route.params.id as string
  await getWalletStatDetail(address.value)
  await getFarmsEventList(address.value)
}

async function getWalletStatDetail (wallet: string) {
  const res = await getFarmUserByWallet(wallet)
  totalStats = Object.assign(totalStats, res)
}

async function getFarmsEventList (wallet: string) {
  const res = await getFarmsLogList(wallet)
  poolList.value[0].list = res.tokenFarmList
  poolList.value[1].list = res.nftFarmList
  poolList.value[2].list = res.lpFarmList
}

async function handleAddRiskList (address: string, type: 'wallet' | 'ip' = 'wallet') {
  if (type === 'wallet') {
    await setRiskWallet(address)
    message.success('Add risk list')
  }
}

function goEtherscan () {
  window.open('https://rinkeby.etherscan.io/address/' + address.value)
}
</script>

<template>
  <div class="reward-detail-wrapper">
    <div class="detail-info-box">
      <div class="address-wrapper">
        <n-descriptions style="--n-font-size: 24px;" label-placement="left">
          <n-descriptions-item label="Address">
            <span
              class="address"
              @click="goEtherscan"
            >
              {{ address }}
            </span>
            <SyncButton @sync-click="handleAddRiskList(address)"/>
            <ReturnButton />
          </n-descriptions-item>
        </n-descriptions>
      </div>
      <!-- total overview -->
      <div class="block-wrapper">
        <h2 class="block-detail-title">
          Overview
        </h2>
        <div class="block-detail-wrapper">
          <n-descriptions label-placement="top" bordered :column="3">
            <n-descriptions-item label="Total Rewards">
              {{ totalStats?.totalReward }}
            </n-descriptions-item>
            <n-descriptions-item label="Chain Hashpower">
              {{ totalStats?.chainHashrate }}
            </n-descriptions-item>
            <n-descriptions-item label="Server Hashpower">
              {{ totalStats?.serverHashrate }}
            </n-descriptions-item>
            <n-descriptions-item label="Pending MY">
              {{ totalStats?.totalPending }}
            </n-descriptions-item>
            <n-descriptions-item label="Claimed MY">
              {{ totalStats?.totalClaimed }}
            </n-descriptions-item>
            <n-descriptions-item label="BalanceOf MY">
              {{ totalStats?.balance }}
            </n-descriptions-item>
            <n-descriptions-item label="Sync Time">
              {{ totalStats?.createdAt }}
            </n-descriptions-item>
            <n-descriptions-item label="Latest Login IP">
              {{ totalStats?.latestLoginIp }}
            </n-descriptions-item>
            <n-descriptions-item label="Lang">
              {{ totalStats?.xlang }}
            </n-descriptions-item>
          </n-descriptions>
        </div>
      </div>
      <!-- token pool -->
      <div class="block-wrapper">
        <h2 class="block-detail-title">
          Token Pool
        </h2>
        <div class="block-detail-wrapper">
          <n-descriptions label-placement="top" bordered :column="3">
            <n-descriptions-item label="Total Rewards">
              {{ totalStats.tokenPending + totalStats.tokenClaimed }}
            </n-descriptions-item>
            <n-descriptions-item label="Pending MY">
              {{ totalStats.tokenPending }}
            </n-descriptions-item>
            <n-descriptions-item label="Claimed MY">
              {{ totalStats.tokenClaimed }}
            </n-descriptions-item>
          </n-descriptions>
        </div>
      </div>
      <!-- NFT Pool -->
      <div class="block-wrapper">
        <h2 class="block-detail-title">
          NFT Pool
        </h2>
        <div class="block-detail-wrapper">
          <n-descriptions label-placement="top" bordered :column="3">
            <n-descriptions-item label="Total Rewards">
              {{ totalStats.nftPending + totalStats.nftClaimed }}
            </n-descriptions-item>
            <n-descriptions-item label="Pending MY">
              {{ totalStats.nftPending }}
            </n-descriptions-item>
            <n-descriptions-item label="Claimed MY">
              {{ totalStats.nftClaimed }}
            </n-descriptions-item>
          </n-descriptions>
        </div>
      </div>
      <!-- LP Pool -->
      <div class="block-wrapper">
        <h2 class="block-detail-title">
          LP Pool
        </h2>
        <div class="block-detail-wrapper">
          <n-descriptions label-placement="top" bordered :column="3">
            <n-descriptions-item label="Total Rewards">
              {{ totalStats.lpPending + totalStats.lpClaimed }}
            </n-descriptions-item>
            <n-descriptions-item label="Pending MY">
              {{ totalStats.lpPending }}
            </n-descriptions-item>
            <n-descriptions-item label="Claimed MY">
              {{ totalStats.lpClaimed }}
            </n-descriptions-item>
          </n-descriptions>
        </div>
      </div>
    </div>
    <!-- tabs -->
    <NTabs
      type="line"
      animated
    >
      <NTabPane
        v-for="(item,index) in poolList"
        :name="index"
        :key="item.name"
        :tab="item.name"
      >
        <NDataTable
          class="analyticsTable"
          :loading="tableLoading"
          :columns="item.columns"
          :data="item.list"
          :pagination="item.pagination"
        />
      </NTabPane>
    </NTabs>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.reward-detail-wrapper {
  max-width: 1280px;
  text-align: left;
  margin: 40px auto;
  .detail-info-box {
    margin-bottom: 20px;
    .address-wrapper {
      font-size: 24px;
      .address {
        cursor: pointer;
        color: #00c;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .block-wrapper {
      .block-detail-title {
        margin-top: 24px;
        font-size: 16px;
      }
      .block-detail-wrapper {
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 20px;
      }
    }
  }
}
</style>
