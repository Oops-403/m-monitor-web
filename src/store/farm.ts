import { defineStore } from 'pinia'

interface FarmState {
  allUsersTotalRewards: number;
}

const useFarmStore = defineStore({
  id: 'farm',
  state: (): FarmState => ({
    allUsersTotalRewards: 0
  }),
  actions: {
    setAllUsersTotalRewards (total: number) {
      this.$state.allUsersTotalRewards = total
    }
  }
})

export default useFarmStore
