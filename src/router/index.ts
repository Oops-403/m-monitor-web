import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  RouteLocationNormalizedLoaded,
  NavigationGuardNext
} from 'vue-router'
import NProgress from 'nprogress'
import error from '@/router/error'
import 'nprogress/nprogress.css'
import '@/styles/nprogress.scss'
// import { storedFromInfo } from '@/utils/storage'

const routes: RouteRecordRaw[] = []
NProgress.configure({ showSpinner: false })

// Load all submodule routes
const importAll = (r: __WebpackModuleApi.RequireContext) => {
  r.keys().forEach((key: string) => {
    r(key).default.forEach((route: RouteRecordRaw) => {
      routes.push(route)
    })
  })
}

importAll(require.context('./modules', false, /\.ts$/))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index.vue'),
      children: routes
    },
    ...error,
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

// Global Pre-Route Guard
router.beforeEach(async (to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext) => {
  NProgress.start()
  next()
})

router.afterEach(async () => {
  NProgress.done()
})

export default router
