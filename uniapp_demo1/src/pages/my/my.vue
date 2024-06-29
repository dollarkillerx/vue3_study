<script setup lang="ts">
const listData = [
  {
    "id": 1,
    "url":"https://i.imgur.com/I4ruedp.jpeg",
  },
  {
    "id": 2,
    "url":"https://i.imgur.com/0avAA2f.jpeg",
  },
  {
    "id": 3,
    "url":"https://i.imgur.com/eGaKkMN.jpeg",
  },
];

const previewImage = (url:string) => {
  uni.previewImage({
    urls: [url],
  });
}

const toLogin = () => {
  uni.navigateTo({
    url: '/pages/login/login',
  });
}

</script>

<template>
<div>
  <div class="w-screen bg-yellow-500 ">
    <swiper indicator-dots="true" autoplay="true" circular="true" >
      <swiper-item v-for="item in listData" :key="item.id">
        <image :src="item.url" class="w-screen" @tap="previewImage(item.url)"></image>
      </swiper-item>
    </swiper>
  </div>

  <uni-badge text="1"></uni-badge>
  <uni-badge text="2" type="success"></uni-badge>
  <uni-badge text="3" type="primary" :inverted="true"></uni-badge>

  <uni-calendar
      :insert="true"
      :lunar="true"
      :start-date="'2019-3-2'"
      :end-date="'2019-5-20'"
  />

  <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
    <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
  </uni-card>

  <button @click="toLogin">to login</button>

</div>
</template>

<style scoped>

</style>