<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <n-message-provider>
  <n-loading-bar-provider>
    <n-notification-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-notification-provider>
  </n-loading-bar-provider>
  </n-message-provider>
</template>

<style scoped>

</style>
