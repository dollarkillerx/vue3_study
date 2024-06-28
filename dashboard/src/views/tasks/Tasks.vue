<script setup lang="ts">
import {ref,h} from 'vue';
import { NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
const message = useMessage()
type Song = {
  no: number
  title: string
  length: string
}

const createColumns = ({
                         play
                       }: {
  play: (row: Song) => void
}): DataTableColumns<Song> => {
  return [
    {
      title: 'No',
      key: 'no'
    },
    {
      title: 'Title',
      key: 'title'
    },
    {
      title: 'Length',
      key: 'length'
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'small',
              onClick: () => play(row)
            },
            { default: () => 'Play' }
        )
      }
    }
  ]
}

const columns= createColumns({
  play (row: Song) {
    message.info(`Play ${row.title}`)
  }
})

const data: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]
</script>

<template>
  <div class="p-4">
<!--    header-->
    <div class="bg-white h-30 rounded overflow-hidden shadow-lg p-2">
      <h1 class="font-bold text-xl mt-2">Tasks</h1>
      <n-button type="primary" dashed>
        添加任务
      </n-button>
    </div>
<!--    body-->
    <n-data-table
        :columns="columns"
        :data="data"
        :pagination="false"
        :bordered="false"
    />
  </div>
</template>

<style scoped>

</style>