import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/403',
    component: () => import('@/views/error/Forbidden.vue'),
    meta: {
      name: 'Forbidden'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error/NotFound.vue'),
    meta: {
      name: 'Not Found'
    }
  }
]

export default routes
