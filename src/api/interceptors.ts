import Axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import router from '@/router'

const pendingRequest = new Map()

const requestDataKeyHandler = (data: any) => {
  const dataType = Object.prototype.toString.call(data)
  if (data && dataType === '[object FormData]') {
    const obj: Record<string, any> = {}

    function objStringify (obj: any) {
      const replacer = []
      for (const key in obj) {
        replacer.push(key)
      }
      return JSON.stringify(obj, replacer)
    }

    for (const [key, value] of data.entries()) {
      obj[key] = typeof value === 'object' ? objStringify(value) : value
    }
    return qs.stringify(obj)
  }
  return qs.stringify(data)
}

const generateRequestKey = (config: AxiosRequestConfig) => {
  const { url, method, params, data } = config
  return [url, method, qs.stringify(params), requestDataKeyHandler(data)].join('&')
}

const addPendingRequest = (config: AxiosRequestConfig) => {
  const key = generateRequestKey(config)
  if (!pendingRequest.has(key)) {
    config.cancelToken = new Axios.CancelToken(cancel => {
      pendingRequest.set(key, cancel)
    })
  }
}

const removePendingRequest = (config: AxiosRequestConfig) => {
  const key = generateRequestKey(config)
  if (pendingRequest.has(key)) {
    const cancelToken = pendingRequest.get(key)
    cancelToken(key)
    pendingRequest.delete(key)
  }
}

// request
Axios.interceptors.request.use(config => {
  removePendingRequest(config)
  addPendingRequest(config)
  if (!config.headers || !config.headers['Authorization']) {
    router.push('/')
  }
  return config
})

// response
Axios.interceptors.response.use(fulfilled => {
  removePendingRequest(fulfilled.config)
  return fulfilled
}, err => {
  const { status }  = err.response
  if (status === 401) {
    router.push('/')
  }
})
