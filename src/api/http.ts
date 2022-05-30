import Axios, { Method } from 'axios'
import './interceptors'
import { accessTokenStored } from '@/utils/storage'

const baseURL = ''

const getHeaders = (headers: Record<string, string> = {}) => {
  const newHeaders = headers || {}
  if (accessTokenStored.value) {
    Object.assign(
      newHeaders,
      {
        'Authorization': `Bearer ${accessTokenStored.value}`
      }
    )
  }
  return newHeaders
}

export const request = (
  method: Method,
  url: string,
  data: Record<any, any> | FormData | string | null = null,
  otherOptions: Record<string, any> = {}
) => {
  return new Promise((resolve, reject) => {
    Axios({
      baseURL,
      method,
      url,
      timeout: 120000,
      [method.toUpperCase() === 'GET' ? 'params' : 'data']: data,
      headers: getHeaders(otherOptions.headers),
      ...otherOptions
    }).then(response => {
      if (response && response.data) {
        resolve(response.data)
      } else {
        reject(response.statusText)
      }
    })
  })
}

export const get = (
  url: string,
  params?: Record<string, any> | null,
  otherOptions?: Record<string, any>
) => {
  return request(
    'GET',
    url,
    params,
    otherOptions
  )
}

export const post = (
  url: string,
  data?: Record<string, any> | FormData | string | null,
  otherOptions?: Record<string, any>
) => {
  return request(
    'POST',
    url,
    data,
    otherOptions
  )
}

export const put = (
  url: string,
  data?: Record<string, any> | FormData | string | null,
  otherOptions?: Record<string, any>
) => {
  return request(
    'PUT',
    url,
    data,
    otherOptions
  )
}

export const del = (
  url: string,
  data?: Record<string, any> | FormData | string | null,
  otherOptions?: Record<string, any>
) => {
  return request(
    'DELETE',
    url,
    data,
    otherOptions
  )
}
