import Cookie from 'js-cookie'
import { encrypt, decrypt } from './crypto'

export const accessTokenStored = {
  key: 'MY_MONITOR_TOKEN_ZXN0MTAxNkBvdXRsb29',
  get value () {
    return Cookie.get(this.key) || ''
  },
  set value (val: string) {
    Cookie.set(this.key, val, { expires: new Date(new Date().getTime() + 86400000) })
  },
  destroy () {
    Cookie.remove(this.key)
  }
}

export const userInfoStored = {
  key: 'MY_MONITOR_USER_ZXN0MTAxNkBvjkfaewf12',
  get value () {
    const jsonStr = window.localStorage.getItem(this.key) || '{}'
    return JSON.parse(decrypt(jsonStr, this.key))
  },
  set value (val: Partial<UserInfo>) {
    const userInfoToJson = JSON.stringify(val || {})
    window.localStorage.setItem(this.key, encrypt(userInfoToJson, this.key))
  },
  destroy () {
    window.localStorage.removeItem(this.key)
  }
}
