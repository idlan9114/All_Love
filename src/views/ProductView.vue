<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { computed, ref } from 'vue'
import { MDBCard } from "mdb-vue-ui-kit";

const route = useRoute()
const store = useCounterStore()
const productId = computed(() => Number(route.params.id))
const product = computed(() => store.getProductById(productId.value))
const mainImage = ref('')


const setMainImage = (image: string) => {
  mainImage.value = image
}

if (product.value) {
  mainImage.value = product.value.img
}

const selected = ref('')
const productstatus = computed(() => {
  
})

</script>

<template>
  <div v-if="product" class="flex gap-4 justify-center mx-auto px-4 pt-20 min-h-screen">
    
    <!-- Left Part -->

    <div class="h-full w-full">
      
    </div>

    <!-- Middle Part  -->
    
    <div class="h-full w-full">
      <img src="@/assets/Images/AllBodega_Back.png" alt="Description of image" class="w-full h-auto" style="min-height: 150%;">
      <img src="@/assets/Images/AllBodega_Front.png" alt="Description of image" class="w-full h-auto" style="min-height: 150%;">
    </div>


    <!-- Rigth Part -->

    <div class="h-full w-full flex flex-col items-center mt-20">

      <div>
        <div class="text-sm text-gray-600 mb-1 mt-10">Size: {{ selected }}</div>

          <select v-model="selected" class="border border-gray-400 rounded px-2 py-1 text-sm w-28 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option disabled value="">S - {{ productstatus }}</option>
            <option>M - {{ productstatus }}</option>
            <option>L - {{ productstatus }}</option>
            <option>XL - {{ productstatus }}</option>
          </select>

        </div>

        <div>
          <div class="text-sm text-gray-600 mb-1 mt-1 ">Color: {{ selected }}</div>

          <select v-model="selected" class="border border-gray-400 rounded px-2 py-1 text-sm w-28 cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400">
            <option disabled value="">S - {{ productstatus }}</option>
            <option>M - {{ productstatus }}</option>
            <option>L - {{ productstatus }}</option>
            <option>XL - {{ productstatus }}</option>
          </select>

        </div>

        <button class="bg-black text-white mt-10 px-4 py-2 rounded-[10px] ">
          <h1 class="text-[15px] mt-[7px]">ADD TO CART</h1>
        </button>

    </div>
    
  </div>
</template>

<style scoped>
.main-image {
  height: 400px;
  object-fit: cover;
}

@media (min-width: 640px) {
  .main-image {
    height: 500px;
  }
}

@media (min-width: 1024px) {
  .main-image {
    height: 600px;
  }
}

.thumbnail {
  transition: transform 0.2s ease;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail.active img {
  border-color: black;
  border-width: 2px;
}

.image-wrapper {
  cursor: pointer;
}

/* For mobile tap */
@media (hover: none) {
  .thumbnail:active {
    transform: scale(0.95);
  }
}

.breadcrumbs a {
  transition: color 0.2s ease;
}
</style>