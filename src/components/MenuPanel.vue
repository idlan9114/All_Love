<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>

<template>
  <div class="relative">

    <button @click="isOpen = true" class="flex flex-col justify-between w-6 h-5 p-0.5">
      <span class="block w-full h-0.5 bg-white"></span>
      <span class="block w-full h-0.5 bg-white"></span>
      <span class="block w-full h-0.5 bg-white"></span>
    </button>


    <div v-if="isOpen" class="fixed inset-0 overflow-hidden z-50">
      <div class="absolute inset-0 bg-black/50" @click="isOpen = false"></div>

      <Transition name="slide">
        <div v-if="isOpen" class="absolute left-0 top-0 h-full w-64 bg-white shadow-lg p-4">
          <Menu/> 
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