import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '/',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: 'login'
    }
  }
]

export default routes
