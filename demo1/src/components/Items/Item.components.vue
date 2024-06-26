<script setup lang="ts">
import type {ItemInterface} from "@/models";
defineProps<{ Items: ItemInterface[] }>();


// 注册方法  可以让子级 调用父级 func
const emit = defineEmits<{
  (e: "changeItem", id: number): any // 注册一个 func
}>();

const completedItems = (id: number) => {
  emit("changeItem",id);
};

</script>

<template>
  <div>Item List 🧑‍🎓</div>
  <ul v-for="data in Items" :key="data.id">
    <li>{{data.name}} - <input type="checkbox" v-model="data.completed" @click="completedItems(data.id)"></li>
  </ul>
</template>

<style scoped>

</style>