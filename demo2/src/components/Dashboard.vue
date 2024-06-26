<script setup lang="ts">
import {GetTasks} from '@/api/task'
import type {TaskResp} from '@/api/task'
import { ref, onMounted } from 'vue';

var loading = ref(true);

let taskResp: TaskResp;

// 在组件挂载后执行数据请求
onMounted(async () => {
  const resp = await GetTasks();
  if (!resp.success) {
    alert("数据请求失败");
    return;
  }

  if (!resp.success) {
    alert(resp.message);
    return;
  }

  taskResp = resp;

  loading.value = false;
});
</script>

<template>
<v-container>

  <v-container>
    <v-col cols="12" md="4" sm="6">
      <v-btn rounded="xl" size="x-large" block>添加Task</v-btn>
    </v-col>

  </v-container>


  <p v-if="loading.valueOf()">加载中...</p>
  <div v-else>
    <v-table>
      <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in taskResp.data"
          :key="item.ID"
      >
        <td>{{ item.ID }}</td>
        <td>{{ item.task_name }}</td>
      </tr>
      </tbody>
    </v-table>
  </div>

</v-container>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}
</style>