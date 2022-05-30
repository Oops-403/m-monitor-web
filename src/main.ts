import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, PiniaVuePlugin } from '@/store'
import naive from '@/config/naive'
import '@/styles/common.scss'

const app = createApp(App)

// pinia store
app.use(store)
app.use(PiniaVuePlugin)

// router
app.use(router)

// UI Components
app.use(naive)

app.mount('#app')
