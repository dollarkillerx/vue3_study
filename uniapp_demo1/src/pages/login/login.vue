<script setup lang="ts">

</script>

<template>
<div class="flex flex-col w-screen h-screen bg-blue-400 ">
  <div class="flex justify-center" style="flex: 1">
    <img class="w-2/6" src="https://upload.wikimedia.org/wikipedia/en/b/b7/Bilibili_logo.svg" alt="bilibili">
  </div>

  <div class="flex flex-col items-center" style="flex:2;">
    <input type="text" placeholder="请输入用户名"
           class="text-center bg-white w-4/5 h-8 rounded-full my-6">
    <input type="text" placeholder="请输入密码"
           class="text-center bg-white w-4/5 h-8 rounded-full">

    <div class="mt-10 w-screen flex flex-col items-center">
      <button
          class="text-center bg-blue-200 w-4/5 h-8 rounded-full text-white font-500 text-xl">登录</button>
      <span class="text-white font-bold mt-4">找回密码</span>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>