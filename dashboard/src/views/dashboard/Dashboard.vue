<script setup lang="ts">
import {ref} from 'vue';
import type {CardInterface } from "@/components/Card";
import Card from "@/components/Card/Card.vue";

const cards = ref<CardInterface[]>([
  {
    title: "Card 1",
    value: "Content 1",
    color:'bg-yellow-300',
  },
  {
    title: "Card 2",
    value: "Content 2",
    color:'bg-red-300',
  },
  {
    title: "Card 3",
    value: "Content 3",
    color:'bg-gray-300',
  },
]);
</script>

<template>
<div class="grid grid-cols-2 gap-3">
  <Card v-for="card in cards" :is="card.title" :card="card"/>
</div>
</template>

<style scoped>

</style>