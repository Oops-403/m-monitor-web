<script
  lang="ts"
  setup
>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMessage } from 'naive-ui'
import useFarmStore from '@/store/farm'
import { getFarmUserByIP, setRiskWallet } from '@/api/modules/farm'
import SyncButton from '@/components/SyncButton.vue'
import ReturnButton from '@/components/ReturnButton.vue'

interface WalletItem {
  balance: number;
  chainHashrate: number;
  createdAt: string;
  isBlack: boolean;
  isRisk: boolean;
  latestLoginIp: string;
  lpClaimed: number;
  lpPending: number;
  nftClaimed: number;
  nftPending: number;
  serverHashrate: number;
  tokenClaimed: number;
  tokenPending: number;
  totalClaimed: number;
  totalPending: number;
  wallet: string;
  xlang: string;
  xua: string;
  xversion: string;
  totalReward: number;
}

const message = useMessage()
const farmStore = useFarmStore()
const route = useRoute()

const ipAddr = ref('')
const totalRewards = ref(0)
const walletStatsList = ref<WalletItem[]>([])

const rate = computed(() => {
  if (farmStore.allUsersTotalRewards > 0) {
    return (totalRewards.value * 100 / farmStore.allUsersTotalRewards).toPrecision(4)
  } else {
    return 0
  }
})

onMounted(async () => {
  await init()
})

async function init () {
  ipAddr.value = route.params.id as string
  await getWalletStatDetail(ipAddr.value)
}

async function getWalletStatDetail (ip: string) {
  const res = await getFarmUserByIP(ip)
  walletStatsList.value = res
  if (res && res.length > 0) {
    res.forEach((item: any) => {
      totalRewards.value += item.totalReward
    })
  }
}

async function handleAddRiskList (address: string, type: 'wallet' | 'ip' = 'wallet') {
  if (type === 'wallet') {
    await setRiskWallet(address)
  }
  message.success('Add risk list')
}

function goEtherscan (address: string) {
  window.open('https://rinkeby.etherscan.io/address/' + address)
}
</script>

<template>
  <div class="reward-detail-wrapper">
    <div class="back-btn-wrapper">
      <ReturnButton />
    </div>
    <div class="detail-info-box">
      <div class="address-wrapper">
        <n-descriptions style="--n-font-size: 24px;" label-placement="top" bordered :column="3">
          <n-descriptions-item label="IP">
            {{ ipAddr }}
            <SyncButton @sync-click="handleAddRiskList(ipAddr, 'ip')"/>
          </n-descriptions-item>
          <n-descriptions-item label="Total Rewards">
            {{ totalRewards.toFixed(4) }}
          </n-descriptions-item>
          <n-descriptions-item label="Rate">
            {{ rate + '%' }}
          </n-descriptions-item>
        </n-descriptions>
      </div>
      <!-- stats list -->
      <template v-for="item in walletStatsList" :key="item.address">
        <div class="block-wrapper">
          <h2 class="block-detail-title">
            <span @click="goEtherscan(item.wallet)">
              {{ item.wallet }}
            </span>
            <SyncButton @sync-click="handleAddRiskList(ipAddr, 'ip')"/>
          </h2>
          <div class="block-detail-wrapper">
            <n-descriptions label-placement="top" bordered :column="3">
              <n-descriptions-item label="Total Rewards">
                {{ item?.totalReward}}
              </n-descriptions-item>
              <n-descriptions-item label="Server Hashpower">
                {{ item?.serverHashrate}}
              </n-descriptions-item>
              <n-descriptions-item label="Chain Hashpower">
                {{ item?.chainHashrate}}
              </n-descriptions-item>
              <n-descriptions-item label="Pending MY">
                {{ item?.totalPending}}
              </n-descriptions-item>
              <n-descriptions-item label="Claimed MY">
                {{ item?.totalClaimed}}
              </n-descriptions-item>
              <n-descriptions-item label="BalanceOf MY">
                {{ item?.balance }}
              </n-descriptions-item>
              <n-descriptions-item label="Sync Time">
                {{ item?.createdAt }}
              </n-descriptions-item>
              <n-descriptions-item label="Latest Login IP">
                {{ item?.latestLoginIp }}
              </n-descriptions-item>
              <n-descriptions-item label="Lang">
                {{ item?.xlang }}
              </n-descriptions-item>
            </n-descriptions>
          </div>
        </div>
      </template>
    </div>
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
  .back-btn-wrapper {
    margin-left: -8px;
    margin-bottom: 2px;
  }
  .detail-info-box {
    .address-wrapper {
      font-size: 24px;
    }
    .block-wrapper {
      .block-detail-title {
        margin-top: 24px;
        font-size: 16px;
        color: #00c;
        padding-bottom: 2px;
        span {
          cursor: pointer;
        }
        &:hover {
          text-decoration: underline;
        }
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
