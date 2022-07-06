<script
  lang="ts"
  setup
>
import { SyncCircleOutline } from '@vicons/ionicons5'

const emit = defineEmits(['sync-click'])

function handleClick () {
  emit('sync-click')
}
</script>

<template>
  <div class="btn-wrapper">
    <n-button
      ghost
      @click="handleClick"
    >
      <template #icon>
        <SyncCircleOutline />
      </template>
      Risk
    </n-button>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.btn-wrapper {
  display: inline-block;
  margin-left: 8px;
}
</style>
