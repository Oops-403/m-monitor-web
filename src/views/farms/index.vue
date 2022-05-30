<script
  lang="ts"
  setup
>
import { onMounted, ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { NTooltip, NGradientText } from 'naive-ui'
import { ExcelService } from '@/utils/export2Excel'
import { getFarmAllWallet, getFarmAllIP } from '@/api/modules/farm'
import useFarmStore from '@/store/farm'

interface FarmUser {
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

interface TableRow {
  wallet: string;
  ip: string;
  proportion?: string;
  balance?: number;
  hashrate: number;
  totalRewards: number;
  isRisk: string;
  isBlack: string;
}

const farmStore = useFarmStore()
const router = useRouter()

const tableData = ref<TableRow[]>([])
const tableLoading = ref(false)

const tabList = ref([
  {
    name: 'wallet',
    list: [],
    pagination: {
      pageSize: 10
    },
    columns: [
      {
        key: 'wallet',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                size: 18,
                type: 'info'
              },
              {
                default: () => 'Wallet'
              }
            ),
            'Wallet Address'
          )
        },
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              router.push('/wallet-detail/' + rowData.wallet)
            }
          }
        }
      },
      {
        key: 'ip',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                style: {
                  cursor: 'pointer'
                },
                size: 18,
                type: 'info'
              },
              {
                default: () => 'IP'
              }
            ),
            'Machine IP'
          )
        },
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              router.push('/ip-detail/' + rowData.ip)
            }
          }
        }
      },
      {
        key: 'rate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '18px'
                },
                type: 'info'
              },
              {
                default: () => 'Rate'
              }
            ),
            'Total reward percentage'
          )
        }
      },
      {
        key: 'balance',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'MY Balance'
              }
            ),
            'Balance of MY'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.balance || 0) - (row2.balance || 0))
      },
      {
        key: 'chainHashrate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'Hashpower(chain)'
              }
            ),
            'Total Chain Hashpower'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.chainHashrate || 0) - (row2.chainHashrate || 0))
      },
      {
        key: 'serverHashrate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'Hashpower(server)'
              }
            ),
            'Total Server Hashpower'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.serverHashrate || 0) - (row2.serverHashrate || 0))
      },
      {
        key: 'totalRewards',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                size: 16,
                type: 'error'
              },
              {
                default: () => 'Rewards'
              }
            ),
            'Total Rewards'
          )
        },
        cellProps: () => {
          return {
            style: 'color: red;'
          }
        }
      },
      {
        key: 'isRisk',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                size: 16,
                type: 'danger'
              },
              {
                default: () => 'Risk'
              }
            ),
            'Status Of The Risk'
          )
        },
        cellProps: () => {
          return {
            style: 'color: red;'
          }
        }
      },
      {
        key: 'isBlack',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                size: 16,
                type: 'danger'
              },
              {
                default: () => 'Black'
              }
            ),
            'Status Of The Black Name'
          )
        },
        cellProps: () => {
          return {
            style: 'color: red;'
          }
        }
      }
    ]
  },
  {
    name: 'ip',
    list: [],
    pagination: {
      pageSize: 10
    },
    columns: [
      {
        key: 'ip',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                style: {
                  cursor: 'pointer'
                },
                size: 18,
                type: 'info'
              },
              {
                default: () => 'IP'
              }
            ),
            'Machine IP'
          )
        },
        cellProps: (rowData: any) => {
          return {
            style: 'cursor: pointer;text-decoration: underline',
            onClick: () => {
              router.push('/ip-detail/' + rowData.ip)
            }
          }
        }
      },
      {
        key: 'rate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '18px'
                },
                type: 'info'
              },
              {
                default: () => 'Rate'
              }
            ),
            'Total reward percentage'
          )
        }
      },
      {
        key: 'balance',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'MY Balance'
              }
            ),
            'Balance of MY'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.balance || 0) - (row2.balance || 0))
      },
      {
        key: 'chainHashrate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'Hashpower(chain)'
              }
            ),
            'Total Chain Hashpower'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.chainHashrate || 0) - (row2.chainHashrate || 0))
      },
      {
        key: 'serverHashrate',
        title () {
          return renderTooltip(
            h(
              'span',
              {
                style: {
                  'font-size': '16px'
                },
                type: 'info'
              },
              {
                default: () => 'Hashpower(server)'
              }
            ),
            'Total Server Hashpower'
          )
        },
        sorter: (row1: any, row2: any) => ((row1.serverHashrate || 0) - (row2.serverHashrate || 0))
      },
      {
        key: 'totalRewards',
        title () {
          return renderTooltip(
            h(
              NGradientText,
              {
                size: 16,
                type: 'error'
              },
              {
                default: () => 'Rewards'
              }
            ),
            'Total Rewards'
          )
        },
        defaultSortOrder: true,
        cellProps: () => {
          return {
            style: 'color: red;'
          }
        },
        sorter: (row1: any, row2: any) => ((row1.totalRewards || 0) - (row2.totalRewards || 0))
      }
    ]
  }
])


onMounted(async () => {
  await getAllWallet()
})

async function getAllWallet () {
  const users = await getFarmAllWallet()
  const list = users.list.map((item: FarmUser) => ({
    wallet: item.wallet,
    ip: item.latestLoginIp,
    chainHashrate: item.chainHashrate,
    serverHashrate: item.serverHashrate,
    balance: item.balance,
    totalRewards: Number(item.totalReward).toFixed(2),
    rate: ((item.totalReward || 0) * 100 / users.totalReward).toPrecision(2) + '%',
    isRisk: item.isRisk ? 'Yes' : 'No',
    isBlack: item.isBlack ? 'Yes' : 'No'
  }))
  tabList.value[0].list = list
  farmStore.setAllUsersTotalRewards(users.totalReward)
}

async function getAllIP () {
  const res = await getFarmAllIP()
  const list = res.list.map((item: any) => ({
    ip: item.ip,
    chainHashrate: item.chainHashrate,
    serverHashrate: item.serverHashrate,
    balance: item.balance,
    totalRewards: Number(item.totalReward).toFixed(2),
    rate: ((item.totalReward || 0) * 100 / res.totalReward).toPrecision(2) + '%',
    isRisk: item.isRisk ? 'Yes' : 'No',
    isBlack: item.isBlack ? 'Yes' : 'No'
  }))
  tabList.value[1].list = list.sort((a: any, b: any) => b.totalRewards - a.totalRewards)
}

function exportExcel () {
  const s = new ExcelService()
  s.exportAsExcelFile(tableData.value, 'Rewards Stats')
}

function renderTooltip (trigger: any, content: string) {
  return h(NTooltip, null, {
    trigger: () => trigger,
    default: () => content
  })
}

async function onTabChange (idx: number) {
  if (idx === 0) {
    await getAllWallet()
  }
  if (idx === 1) {
    await getAllIP()
  }
}
</script>

<template>
  <div class="stats-wrapper">
    <div class="stats-table-context">
        <div class="table-title">
          Rewards Data Stats
        </div>
        <div class="export-btn">
          <NButton
            type="primary"
            @click="exportExcel"
          >
            Export Excel
          </NButton>
        </div>
        <NTabs
          type="line"
          animated
          @update:value="onTabChange"
        >
          <NTabPane
            v-for="(item,index) in tabList"
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
  </div>
</template>

<style
  lang="scss"
  scoped
>
.stats-wrapper {
  text-align: center;

  .stats-table-context {
    max-width: 1280px;
    margin: 40px auto;
    .table-title {
      font-size: 32px;
      font-weight: 600;
    }
    .export-btn {
      text-align: right;
      margin: 20px 0;
      margin-bottom: 20px;
    }
    .analyticsTable {
      margin-bottom: 30px;
      :deep(th) {
        color: #111;
      }
    }
  }
}
</style>
