<template>
  <div class="relative w-full overflow-hidden">
    <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
          v-for="(image, index) in images"
          :key="index"
          class="min-w-full h-64 bg-cover bg-center"
          :style="{ backgroundImage: `url(${image})` }"
      ></div>
    </div>
    <button
        class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        @click="prev"
    >Prev</button>
    <button
        class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        @click="next"
    >Next</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const images = ref([
  'https://via.placeholder.com/800x400?text=Slide+1',
  'https://via.placeholder.com/800x400?text=Slide+2',
  'https://via.placeholder.com/800x400?text=Slide+3'
])

const currentIndex = ref(0)

const next = () => {
  if (currentIndex.value < images.value.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = images.value.length - 1
  }
}
</script>

<style scoped>
.carousel-image {
  min-width: 100%;
  height: 16rem;
  background-size: cover;
  background-position: center;
}
</style>
