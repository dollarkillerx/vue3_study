<script setup lang="ts">
</script>

<template>
  <div class="text-read-200 font-mono bg-amber-50">
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

    <main class="px-16 py-6">
      <div class="flex justify-between">
        <a href="#">Log in</a>
        <a href="#">Sign up</a>
      </div>

      <div class="flex items-center">
        <div class="bg-red-500 h-4 w-6"></div>
        <div class="bg-blue-300 h-8  w-6"></div>
        <div class="bg-green-500 h-12 w-6"></div>
      </div>

      <header>
        <h2>Recipes</h2>
        <h3>For Ninjas</h3>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        <div class="mt-8">
          <!-- cards go here -->
          <div class="bg-white rounded overflow-hidden shadow-md">
            <img src="https://raw.githubusercontent.com/iamshaunjp/tailwind-tutorial/lesson-2/public/img/stew.jpg" alt="stew">
            <div>
              <span class="font-bold">5 Bean Chili Stew</span>
              <span class="block text-gray-500 text-sm">Recipe by Mario</span>
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
