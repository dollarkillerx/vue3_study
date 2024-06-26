<script setup lang="ts">
interface navItem {
  id: number,
  name: string,
  path: string,
}

const navList:(navItem)[] = [
  {
    id: 1,
    name: "Home",
    path: "/"
  }
];


</script>

<template>
  <v-list>
    <RouterLink v-for="item in navList" :key="item.id" :to="item.path">
      <v-list-item  :title="item.name" style="background-color: #f5f5f5; color: #333; margin-top: 10px">
      </v-list-item>
    </RouterLink>
  </v-list>
</template>

<style scoped>
</style>