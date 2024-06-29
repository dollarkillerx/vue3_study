<script setup lang="ts">

</script>

<template>
<div class="pt-6 px-2">
  <div class="absolute bg-gray-100 rounded-full -top-20 -right-1/2" style="height: 1000rpx;width: 1000rpx; z-index: -1">
  </div>
  <div>
    <div>
      <h1>Beats</h1>
      <h3 class="text-gray-400">by Dre</h3>
    </div>

    <div class="mt-2 flex" >
      <div class="flex flex-col justify-evenly items-center w-10 h-96 ">
        <div class="flex transform -rotate-90 w-40">
          <svg class="w-6 mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
          </svg>
          <div class="flex flex-col items-center">
            <span class="text-sm">40-Hour Battery</span>
          </div>
        </div>
        <div class="flex transform -rotate-90 w-40">
          <svg class="w-6  mr-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
          </svg>
          <div class="flex flex-col items-center">
            <span class="text-sm">Wireless</span>
          </div>
        </div>
      </div>

      <div class="flex pl-4">
        <div class="flex w-10 h-96 border-cyan-300"></div>
        <div class="w-56 bg-gradient-to-bl from-red-500 to-blue-500 relative rounded-3xl" >
          <img src="@/static/headphone.png" class="h-60 absolute top-6 -left-10">

          <div class="w-56 transform text-center absolute" style="top: 150rpx; right: -130rpx">
            <div class="-rotate-90">
              <span class="text-3xl font-black text-blue-200 ">WARRIORS ROYAL BlUE</span>
            </div>
          </div>

          <div class="h-20 absolute bottom-0 pb-2 px-4">
            <div class="flex justify-evenly">
              <span class="text-gray-200 font-semibold text-sm pl-1 ">Beats Studio3 Wireless</span>
              <svg class="w-6 h-6 text-gray-200 " fill="none " stroke="currentColor " viewBox="0 0 24 24 " xmlns="http://www.w3.org/2000/svg "><path stroke-linecap="round " stroke-linejoin="round " stroke-width="2 " d="M4.318 6.318a4.5 4.5 0 000
            6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z "></path></svg>
            </div>

            <div class="flex justify-between items-center pt-4">
              <div  style="flex: 1">
                <span class="text-gray-200 font-semibold text-sm ">$399.99</span>
              </div>

              <div style="flex: 1">
              </div>
            </div>
          </div>

          <div class="absolute bottom-0 right-0 h-6 w-15 bg-red-500 text-center flex justify-center items-center p-2 rounded-tl-3xl rounded-br-3xl">
            <span class="text-gray-200 font-semibold text-sm rounded-tl-3xl ">Add to Cart</span>
          </div>
        </div>
        <div class="flex w-10 h-96 relative items-center">
          <div class="bg-red-500 w-10 h-80 absolute -right-8 rounded-l-3xl">
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>