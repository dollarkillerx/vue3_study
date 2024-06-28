<script setup lang="ts">
import { defineProps } from 'vue';
import type {CardInterface} from './index';
const props = defineProps<{
  card: CardInterface,
}>();
</script>

<template>
<div :class="['rounded overflow-hidden shadow m-0.5 p-7', card.color]">
  <div class="text-3xl font-bold">
    {{ props.card.title }}
  </div>
  <div class="text-2xl font-bold">
    {{ props.card.value }}
  </div>
</div>
</template>

<style scoped>

</style>