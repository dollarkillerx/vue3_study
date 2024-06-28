<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="font-mono">
    <n-modal-provider>
      <n-message-provider>
        <n-loading-bar-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <router-view />
            </n-dialog-provider>
          </n-notification-provider>
        </n-loading-bar-provider>
      </n-message-provider>
    </n-modal-provider>
  </div>

</template>

<style scoped>

</style>
