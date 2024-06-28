<script setup lang="ts">
import { defineProps } from 'vue';
import type {MenusInterface} from './index.ts';
const props = defineProps<{
  menus: MenusInterface[],
}>();

</script>

<template>
  <div class="flex flex-col">
    <div class="font-medium text-2xl p-2 bg-black text-blue-50">
      <h1>Easy CICD</h1>
      <span class="w-full break-all m-0 p-0" style="font-size: 10px;line-height: normal;">https://github.com/dollarkillerx/harbor_easy_cicd</span>
    </div>
    <ul>
      <li v-for="menu in props.menus" :key="menu.title">
        <RouterLink :to="menu.path">
          <div class="bg-amber-200 p-2 m-0.5 hover:bg-amber-300 text-center text-xl uppercase">{{menu.title}}</div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>