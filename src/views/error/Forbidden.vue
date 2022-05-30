<script
  lang="ts"
  setup
>
// import { useRouter } from 'vue-router'

// const router = useRouter()
</script>

<template>
  <div class="forbidden-wrapper">
    <NResult
      size="huge"
      status="403"
      title="404 No Access"
      description="You don't have this permission."
    >
    </NResult>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.forbidden-wrapper {
  margin-top: 30vh;
}
</style>
