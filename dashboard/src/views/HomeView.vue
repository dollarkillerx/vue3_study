<script setup lang="ts">
import {ref} from 'vue'
import Menu from '@/components/Menu/Menu.vue'
import { RouterView } from 'vue-router'
import {MenuConfig} from '@/config'
import {JWT} from "@/utils/jwt";
import router from "@/router";

const open = ref(true)

const logout = () => {
  JWT.removeToken()
  router.push('/login')
}
</script>

<template>
  <main>
    <div class="flex h-screen bg-gray-100" >
      <div :class="[!open&&'hidden','w-72 duration-500']">
        <Menu :menus="MenuConfig"></Menu>
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

<!--        header-->
        <div class="flex flex-col">
          <div class="flex justify-end bg-white items-center" style="height: 50px">
            <div @click="logout" class="bg-white border-cyan-300 border px-3 py-1.5 rounded-full hover:cursor-pointer hover:bg-cyan-300 hover:text-white m-5">Logout</div>
          </div>
          <router-view class="flex-1"></router-view>
        </div>
      </div>
    </div>
  </main>
</template>
