<script setup lang="ts">
import { ref } from 'vue';

const activeNav = ref('home');

const setActiveNav = (nav: string) => {
  activeNav.value = nav;
};
</script>

<template>
  <div class="text-read-200 font-mono">

  <div class="grid md:grid-cols-3">
    <div class="md:col-span-1 md:flex md:justify-end">
      <nav>
        <div>
          <h1 class="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" class="hover:text-gray-700">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="#"
               @click.prevent="setActiveNav('home')"
               :class="['flex justify-end border-r-4 pr-2', activeNav === 'home' ? 'border-pink-500' : 'border-white']"
            >
              <span>Home</span>
              <svg class="w-5 ml-2 " data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
               @click.prevent="setActiveNav('about')"
               :class="['flex justify-end border-r-4 pr-2', activeNav === 'about' ? 'border-pink-500' : 'border-white']"
            >
              <span>About</span>
              <svg class="w-5 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#"
               @click.prevent="setActiveNav('contact')"
               :class="['flex justify-end border-r-4 pr-2', activeNav === 'contact' ? 'border-pink-500' : 'border-white']"
            >
              <span>Contact</span>
              <svg class="w-5 ml-2" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <main class="px-16 py-6 bg-amber-50 md:col-span-2">
      <div class="flex justify-end text-yellow-400">
        <a href="#" class="btn border-2 border-cyan-300 hover:text-amber-50 hover:bg-pink-400 hover:shadow-lg">Log in</a>
        <a href="#" class="ml-4 btn">Sign up</a>
      </div>

      <div class="flex">
        <div class="bg-red-500 h-4 w-6"></div>
        <div class="bg-blue-300 h-8  w-6"></div>
        <div class="bg-green-500 h-12 w-6"></div>
      </div>

      <header class="mt-3">
        <h2 class="text-7xl">Recipes</h2>
        <h3 class="text-3xl">For Ninjas</h3>
      </header>

      <!--      <div style="width: 200px">-->
      <div >
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div class="mt-8 grid md:grid-cols-3 sm:grid-cols-1 gap-3">
          <!-- cards go here -->
          <div class="card">
            <div class="p-4">
              <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg"
                   alt="stew" class="w-full h-32 sm:h-48">
              <div class="m-2">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div class="text-xl uppercase font-bold rounded-full bg-green-50 overflow-hidden absolute top-0 p-2 mt-6 ml-6">
              <span>25 min</span>
            </div>
          </div>
          <div class="card">
            <div class="p-4">
              <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg"
                   alt="stew" class="w-full h-32 sm:h-48">
              <div class="m-2">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div class="text-xl uppercase font-bold rounded-full bg-green-50 overflow-hidden absolute top-0 p-2 mt-6 ml-6">
              <span>25 min</span>
            </div>
          </div>
          <div class="card">
            <div class="p-4">
              <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg"
                   alt="stew" class="w-full h-32 sm:h-48">
              <div class="m-2">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div class="text-xl uppercase font-bold rounded-full bg-green-50 overflow-hidden absolute top-0 p-2 mt-6 ml-6">
              <span>25 min</span>
            </div>
          </div>

          <div class="card">
            <div class="p-4">
              <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg"
                   alt="stew" class="w-full h-32 sm:h-48">
              <div class="m-2">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div class="text-xl uppercase font-bold rounded-full bg-green-50 overflow-hidden absolute top-0 p-2 mt-6 ml-6">
              <span>25 min</span>
            </div>
          </div>

          <div class="card">
            <div class="p-4">
              <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg"
                   alt="stew" class="w-full h-32 sm:h-48">
              <div class="m-2">
                <span class="font-bold">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div class="text-xl uppercase font-bold rounded-full bg-green-50 overflow-hidden absolute top-0 p-2 mt-6 ml-6">
              <span>25 min</span>
            </div>
          </div>

        </div>
        <h4 class="font-black mt-14">Most Popular</h4>
        <div>
          <!-- cards go here -->
        </div>
      </div>

      <div class="flex justify-center bg-amber-50">
        <div class="hover:shadow-inner transform hover:scale-125 hover:bg-pink-400">Load more</div>
      </div>
    </main>
  </div>
  </div>
</template>
