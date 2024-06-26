<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import ItemList from './components/Items/Item.components.vue'
import type {ItemInterface} from "@/models";
import {ref, reactive, computed} from 'vue'
import request from "@/request/request";

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

interface Root {
  userId: number
  id: number
  title: string
  completed: boolean
}

const clickPs = async () => {
  const data: Root = await request.get<Root>("/todos/1");
  console.log(data.userId);
  console.log(data.title);
  console.log(data.completed);
};
</script>

<template>
  <div>
    <h1>My Todo List</h1>
    <h3>{{completedAll}}</h3>


    <button @click="clickPs">Click</button>
    <ItemList :Items="Items" @changeItem="CompletedItem"></ItemList>

    {{Items}}
  </div>
</template>

<style scoped>

</style>
