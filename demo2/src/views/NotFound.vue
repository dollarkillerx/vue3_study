<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" class="text-center">
        <v-img
            max-width="200"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
        <h1 class="text-h2 mb-6">哎呀！页面未找到。</h1>
        <p class="subtitle-1 mb-6">
          我们找不到你请求的页面。可能是 URL 错误或页面已被移除。
        </p>
        <v-btn
            color="primary"
            dark
            large
            @click="goHome"
        >
          返回首页
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<style scoped>
/* 添加自定义样式以美化页面 */
</style>
