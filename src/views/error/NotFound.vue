<script
  lang="ts"
  setup
>
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack () {
  router.push('/farms')
}
</script>

<template>
  <div class="not-found">
    <NResult
      size="huge"
      status="404"
      title="404 Not Found"
      description="This page is lost."
    >
      <p>
        We've explored deep and wide, but we can't find the page you were looking for.
      </p>
      <template #footer>
        <NButton
          size="large"
          @click="goBack"
        >
          Navigate back home
        </NButton>
      </template>
    </NResult>
  </div>
</template>

<style
  lang="scss"
  scoped
>
.not-found {
  margin-top: 30vh;
}
</style>
