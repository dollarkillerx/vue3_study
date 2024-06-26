<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import ItemList from './components/Items/Item.components.vue'
import type {ItemInterface} from "@/models";
import {ref, reactive, computed} from 'vue'

let count = ref(0);

const Items: (ItemInterface)[] = reactive([
  {
    id: 1,
    name: 'Coffee',
    completed: false
  },
  {
    id: 2,
    name: 'Books',
    completed: false
  }
]);

const CompletedItem = (id: number) => {
  console.log("aaaa",id);
};

const completedAll = computed(()=>{
  let all = Items.length;
  let countCompleted = 0;
  Items.forEach(element => {
    if (element.completed) {
      countCompleted++;
    }
  });

  return countCompleted == all ? 'All todo is completed' : 'No';
});
</script>

<template>
  <div>
    <h1>My Todo List</h1>
    <h3>{{completedAll}}</h3>

    <ItemList :Items="Items" @changeItem="CompletedItem"></ItemList>

    {{Items}}
  </div>
</template>

<style scoped>

</style>
