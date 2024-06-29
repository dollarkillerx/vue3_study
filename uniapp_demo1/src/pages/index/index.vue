<script setup lang="ts">
const toLogin = () => {
  uni.navigateTo({
    url: '/pages/demo1/demo1',
  });
}
</script>

<template>
<div>
  <button class="bg-yellow-500" @click="toLogin">demo1</button>
</div>
</template>

<style scoped>

</style>