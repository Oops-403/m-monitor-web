import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/farms',
    name: 'farms',
    component: () => import('@/views/farms/index.vue'),
    meta: {
      title: 'mining'
    }
  },
  {
    path: '/wallet-detail/:id',
    name: 'walletDetail',
    component: () => import('@/views/farms/WalletDetail.vue'),
    meta: {
      title: 'WalletDetail'
    }
  },
  {
    path: '/ip-detail/:id',
    name: 'ipDetail',
    component: () => import('@/views/farms/IPDetail.vue'),
    meta: {
      title: 'IPDetail'
    }
  }
]

export default routes
