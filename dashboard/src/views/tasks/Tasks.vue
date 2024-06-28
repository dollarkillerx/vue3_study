<script setup lang="ts">
import { reactive,ref, h, onMounted } from 'vue';
import { NButton, useMessage,useDialog } from 'naive-ui';
import type { DataTableColumns } from 'naive-ui';
import { GetTasks,RestartTask,DelTask,EditTask,AddTask } from '@/api/task';
import type {Task} from "@/api/task";

const message = useMessage();
const dialog = useDialog()

let activeRow = reactive<Task>({
  ID: 0,
  cmd: "",
  created_at: "",
  harbor_key: "",
  heartbeat: "",
  path: "",
  run: false,
  task_name: "",
  updated_at: ""
});

let addRow = reactive<Task>({
  ID: 0,
  cmd: "",
  created_at: "",
  harbor_key: "",
  heartbeat: "",
  path: "",
  run: false,
  task_name: "",
  updated_at: ""
});

const editModal = ref(false);
const addModal = ref(false);

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
              h(
                  NButton,
                  {
                    strong: true,
                    tertiary: true,
                    size: 'small',
                    class: 'flex ml-1 bg-red-500',
                    onClick: () => delTask(row)
                  },
                  { default: () => 'Del' }
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
  activeRow = row
}

const delTask = async(row: Task) => {
  dialog.warning({
    title: '警告',
    content: "是否刪除",
    positiveText: 'Yes',
    negativeText: 'Not',
    onPositiveClick: async () => {
      await DelTask(row);
      await loadData();
    },
    onNegativeClick: () => {
    }
  })
}

const reset = (row: Task) => {
  let msg = "是否停止"
  if (row.run) {
    msg = "是否开启"
  }

  dialog.warning({
    title: '警告',
    content: msg,
    positiveText: 'Yes',
    negativeText: 'Not',
    onPositiveClick: async () => {
      await restartTask(row);

      // message.success('Sure')
    },
    onNegativeClick: () => {
      // message.error('Not Sure')
    }
  })
}

const state = reactive({
  columns: createColumns(),
  data: <Task[]>[]
});

const newTask = () => {
  addModal.value = true;
}

onMounted(async () => {
 await  loadData();
});

const onPositiveClick = () => {
  editModal.value = false
}

const addTask = async()=> {
  const resp = await AddTask(addRow);
  if (resp.success) {
    message.success('Success')
  }else {
    message.error(resp.message)
  }
  await loadData();

  addRow = reactive<Task>({
    ID: 0,
    cmd: "",
    created_at: "",
    harbor_key: "",
    heartbeat: "",
    path: "",
    run: false,
    task_name: "",
    updated_at: ""
  })

  addModal.value = false
}

const loadData = async () => {
  const tasks = await GetTasks();
  state.columns = [];
  if (tasks.success) {
    state.data.length = 0;
    tasks.data.forEach((task) => {
      state.data.push(task);
    });
    state.columns = createColumns();
  }
}

const editTask = async() => {
  await EditTask(activeRow);
  await loadData();
  activeRow = reactive<Task>({
    ID: 0,
    cmd: "",
    created_at: "",
    harbor_key: "",
    heartbeat: "",
    path: "",
    run: false,
    task_name: "",
    updated_at: ""
  })

  editModal.value = false
}

const restartTask = async(row: Task) => {
    await RestartTask(row);
    await loadData();
}

</script>

<template>
  <div class="p-4">
    <!-- header -->
    <div class="bg-white h-30 rounded overflow-hidden shadow-lg p-2">
      <h1 class="font-bold text-xl mt-2">Tasks</h1>
      <n-button type="primary" dashed @click="newTask">
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
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <div class="flex justify-between pb-2">
        <div class="text-lg">修改</div>
        <div class="text-red-500 cursor-pointer" @click="onPositiveClick">X</div>
      </div>
      <n-space vertical>
        Harbor Key:
        <n-input v-model:value="activeRow.harbor_key" type="text" placeholder="Harbor Key" />
        任務名稱:
        <n-input v-model:value="activeRow.task_name" type="text" placeholder="任務名稱" />
        執行路徑:
        <n-input v-model:value="activeRow.path" type="text" placeholder="執行路徑" />
        cmd:
        <n-input v-model:value="activeRow.cmd" type="text" placeholder="cmd" />
        heartbeat:
        <n-input v-model:value="activeRow.heartbeat" type="text" placeholder="heartbeat" />
      </n-space>

      <template #footer>
        <div class="flex justify-end">
          <n-button
              type="primary"
              @click="editTask"
          >
            修改
          </n-button>
        </div>
      </template>

    </n-card>
  </n-modal>

  <n-modal v-model:show="addModal" >
    <n-card
        style="width: 600px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <div class="flex justify-between pb-2">
        <div class="text-lg">添加</div>
        <div class="text-red-500 cursor-pointer" @click="addModal = false">X</div>
      </div>
      <n-space vertical>
        Harbor Key:
        <n-input v-model:value="addRow.harbor_key" type="text" placeholder="Harbor Key" />
        任務名稱:
        <n-input v-model:value="addRow.task_name" type="text" placeholder="任務名稱" />
        執行路徑:
        <n-input v-model:value="addRow.path" type="text" placeholder="執行路徑" />
        cmd:
        <n-input v-model:value="addRow.cmd" type="text" placeholder="cmd" />
        heartbeat:
        <n-input v-model:value="addRow.heartbeat" type="text" placeholder="heartbeat" />
      </n-space>

      <template #footer>
        <div class="flex justify-end">
          <n-button
              type="primary"
              @click="addTask"
          >
            添加
          </n-button>
        </div>
      </template>

    </n-card>
  </n-modal>

</template>

<style scoped>
</style>
