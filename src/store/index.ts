import { createPinia, PiniaVuePlugin } from 'pinia'
import router from '@/router'

const store = createPinia()
const globalStorePlugin = () => {
  return {
    router
  }
}

store.use(globalStorePlugin)

export {
  store,
  PiniaVuePlugin
}
