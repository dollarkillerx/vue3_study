<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import type { DataTableColumns } from 'naive-ui';
import { GetLogs} from '@/api/task';
import type {Log} from "@/api/task";

const createColumns = (): DataTableColumns<Log> => {
  return [
    {
      title: 'ID',
      key: 'ID'
    },
    {
      title: 'created_at',
      key: 'created_at'
    },
    {
      title: '任務名稱',
      key: 'task_name'
    },
    {
      title: '執行狀態',
      key: 'success',
      render(row) {
        if (row.success) {
          return "success"
        }
        return "error"
      }
    },{
      title: '消息',
      key: 'message'
    }

  ];
};

const state = reactive({
  columns: createColumns(),
  data: <Log[]>[]
});


onMounted(async () => {
 await  loadData();
});


const loadData = async () => {
  const tasks = await GetLogs();
  state.columns = [];
  if (tasks.success) {
    state.data.length = 0;
    tasks.data.forEach((task) => {
      state.data.push(task);
    });
    state.columns = createColumns();
  }
}


</script>

<template>
  <!-- body -->
  <div class="p-2 m-2">
    <n-data-table
        :columns="state.columns"
        :data="state.data"
        :pagination="false"
        :bordered="false"
    />
  </div>
</template>

<style scoped>
</style>
