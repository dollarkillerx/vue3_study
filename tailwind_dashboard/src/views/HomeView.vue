<script setup lang="ts">
import {ref} from "vue";
const open = ref(true);
const search = ref('');

interface MenusInterface {
  title: string,
  spacing?: boolean,
  submenu?: boolean,
  submenuItems?: MenusInterface[],
}

const Menus: MenusInterface[] = [
  {title: "Dashboard"},
  {title: "Pages"},
  {title: "Media", spacing: true},
  {title: "Projects", submenu: true, submenuItems: [
      {title: "Submenu 1"},
      {title: "Submenu 2"},
      {title: "Submenu 3"},
    ]},
  {title: "Analytics"},
  {title: "Inbox"},
  {title: "Profile", spacing: true},
  {title: "Setting"},
  {title: "Login"},
];

</script>

<template>
  <main>
    <div class="flex flex-row">
      <div :class="['bg-dark-purple h-screen p-5 pt-8 relative',open?'w-72':'w-20','transition-width duration-300']">
        <svg  @click="open = !open" :class="[!open&&'rotate-180','duration-300','w-10 bg-white rounded-full p-2 absolute -right-5 border border-dark-purple cursor-pointer']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
        </svg>
        <div class="inline-flex">
          <svg :class="[open&&'rotate-[360deg]','w-9 bg-yellow-500 rounded cursor-pointer block float-left duration-1000']" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <h1 :class="[!open&&'scale-0','text-white origin-left font-medium text-2xl ml-2 duration-300']">TailWind</h1>
        </div>

        <div :class="[!open&&'hidden','duration-300 flex items-center rounded-md bg-light-white mt-6 px-4 py-2']">
          <svg class="w-10 text-white mr-2 block text-lg float-left cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <input class="text-base focus:outline-none bg-transparent w-full text-white" type="text" v-model="search" placeholder="Search">
        </div>

        <ul class="pt-2">
          <li v-for="item in Menus" :key="item.title" class="text-gray-300
text-sm flex items-center cursor-pointer gap-x-4 p-2 hover:bg-light-white rounded mt-2
">

            <span class="w-5 block float-left mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
            </span>
            <span :class="[!open&&'scale-0','text-base font-medium flex-1 duration-300']">{{item.title}}</span>
          </li>
        </ul>

      </div>

      <div class="h-screen p-7">
        <h1 class="text-2xl font-semibold">Home Page</h1>
      </div>

    </div>
  </main>
</template>
