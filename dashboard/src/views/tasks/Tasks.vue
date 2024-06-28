<script setup lang="ts">
import { reactive,ref, h, onMounted } from 'vue';
import { NButton, useMessage } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { GetTasks } from '@/api/task';
import type {Task} from "@/api/task";

const message = useMessage();

const editModal = ref(false);

const createColumns = (): DataTableColumns<Task> => {
  return [
    {
      title: 'ID',
      key: 'ID'
    },
    {
      title: 'Harbor Key',
      key: 'harbor_key'
    },
    {
      title: '任務名稱',
      key: 'task_name'
    },
    {
      title: '執行路徑',
      key: 'path'
    },{
      title: 'cmd',
      key: 'cmd'
    },{
      title: 'heartbeat',
      key: 'heartbeat'
    },
    {
      title: '服務是否運行',
      key: 'run',
      render(row) {
        if (row.run) {
          return h(
              NButton,
              {
                strong: true,
                tertiary: true,
                size: 'small',
                class: 'text-green-500',
              },
              { default: () => 'Running' }
          );
        }
        return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              class: 'text-red-500',
            },
            { default: () => 'Stopped' }
        );
      }
    },{
      title: '最後運行時間',
      key: 'last_run_time',
      render(row) {
        if (row.last_run_time != 0) {
          const date = new Date(row.last_run_time!);
          const dateString = date.toLocaleDateString();
          return h(
              'span',
              dateString
          );
        }
      }
    },
    {
      title: '修改',
      key: 'actions',
      render(row) {
        return h(
            'div',
            {
              class: 'flex flex-row'
            },
            [
              h(
                  NButton,
                  {
                    strong: true,
                    tertiary: true,
                    size: 'small',
                    class: 'flex mr-1',
                    onClick: () => edit(row)
                  },
                  { default: () => 'Edit' }
              ),
              row.run?h(
                  NButton,
                  {
                    strong: true,
                    tertiary: true,
                    size: 'small',
                    class: 'text-red-500',
                    onClick: () => reset(row)
                  },
                  { default: () => 'Stop' }
              ):h(
                  NButton,
                  {
                    strong: true,
                    tertiary: true,
                    size: 'small',
                    class: 'text-green-500',
                    onClick: () => reset(row)
                  },
                  { default: () => 'Start' }
              ),
            ]
        );
      }
    }
  ];
};

const edit = (row: Task) => {
  // alert(row.last_run_time)
  editModal.value = true
}

const reset = (row: Task) => {
  alert(row.last_run_time)
}

const state = reactive({
  columns: createColumns(),
  data: <Task[]>[]
});

onMounted(async () => {
  const tasks = await GetTasks();
  console.log(tasks);
  if (tasks.success) {
    state.data.length = 0;
    tasks.data.forEach((task) => {
      state.data.push(task);
    });
    state.columns = createColumns();
  }
});
</script>

<template>
  <div class="p-4">
    <!-- header -->
    <div class="bg-white h-30 rounded overflow-hidden shadow-lg p-2">
      <h1 class="font-bold text-xl mt-2">Tasks</h1>
      <n-button type="primary" dashed>
        添加任务
      </n-button>
    </div>
    <!-- body -->
    <n-data-table
        :columns="state.columns"
        :data="state.data"
        :pagination="false"
        :bordered="false"
    />
  </div>

  <n-modal v-model:show="editModal" >
    <n-card
        style="width: 600px"
        title="模态框"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>
        噢！
      </template>
      内容
      <template #footer>
        尾部
      </template>
    </n-card>
  </n-modal>
</template>

<style scoped>
</style>
