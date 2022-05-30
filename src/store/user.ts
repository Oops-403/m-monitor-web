import { defineStore } from 'pinia'

interface UserState {
  userInfo: UserInfo;
}

const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    userInfo: {
      id: 0,
      name: '',
      role: '',
      email: '',
      expires: 0,
      accessToken: '',
      farmLogId: 0,
      filteredBlockNumber: 0,
      createdAt: '',
      updatedAt: ''
    }
  }),
  actions: {
    setUserInfo (userInfo: Partial<UserInfo>) {
      Object.assign(this.$state.userInfo, userInfo)
    }
  }
})

export default useUserStore
