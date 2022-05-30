<script
  lang="ts"
  setup
>
import { useRouter } from 'vue-router'
import { ArrowBackOutline } from '@vicons/ionicons5'

const router = useRouter()

function handleClick () {
  router.go(-1)
}
</script>

<template>
  <div class="btn-wrapper">
    <n-button
      plain
      @click="handleClick"
    >
      <template #icon>
        <ArrowBackOutline />
      </template>
      Return
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
