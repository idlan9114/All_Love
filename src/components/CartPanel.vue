<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <div class="relative">

    <button @click="isOpen = true" class="flex flex-col justify-between w-6 h-5 p-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
    </button>


    <div v-if="isOpen" class="fixed inset-0 overflow-hidden z-50">
      <div class="absolute inset-0 bg-black/50" @click="isOpen = false"></div>

      <Transition name="slide">
        <div v-if="isOpen" class="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-4">
          <Cart/> 
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
</style>