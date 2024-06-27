<script setup lang="ts">
</script>

<template>
  <div class="text-read-200 font-mono">
    <div>
      <nav>
        <div>
          <h1>
            <a href="/" class="lg:hidden">Food Ninja</a>
          </h1>
        </div>
        <ul>
          <li class="text-green-700 text-xl">
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <main class="px-16 py-6 bg-amber-50">
      <div class="flex justify-end text-yellow-400">
        <a href="#">Log in</a>
        <a href="#" class="ml-4">Sign up</a>
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
        <div class="mt-8 grid md:grid-cols-3 sm:grid-cols-1">
          <!-- cards go here -->
          <div class="card mt-4 mr-4">
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
          <div class="card mt-4 mr-4">
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
          <div class="card mt-4 mr-4">
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
          <div class="card mt-4 mr-4">
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
          <div class="card mt-4 mr-4">
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
          <div class="card mt-4 mr-4">
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
        <div>Load more</div>
      </div>
    </main>
  </div>
</template>
