<script setup lang="ts">
import {ref} from 'vue'
import Menu from '@/components/Menu/Menu.vue'

const open = ref(false)
</script>

<template>
  <main>
    <div class="flex h-screen">
      <!--      left-->
      <div :class="[!open&&'w-0','w-72 duration-500']">
        <Menu></Menu>
      </div>
      <!--      right-->
      <div class="bg-amber-50 flex-1 relative">
        <svg @click="open = !open"
             :class="[!open&&'rotate-180 ','duration-500 w-9 bg-amber-50 border rounded-full p-1 m-2 cursor-pointer absolute left-0']"
             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
             className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
        </svg>
      </div>
    </div>
  </main>
</template>
