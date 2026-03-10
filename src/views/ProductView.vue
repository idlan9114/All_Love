<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { computed, ref, onMounted, watch } from 'vue'

const route = useRoute()
const store = useCounterStore()
const productId = computed(() => Number(route.params.id))
const product = computed(() => store.getProductById(productId.value))
const mainImage = ref('')
const selectedSize = ref('')
const selectedColor = ref('')

onMounted(() => {
  if (product.value) {
    mainImage.value = product.value.img
  }
})

watch(() => product.value, (newProduct) => {
  if (newProduct) {
    mainImage.value = newProduct.img
  }
})

const setMainImage = (image: string) => {
  mainImage.value = image
}

const productStatus = computed(() => {
  return 'In Stock'
})

const addToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  if (!selectedColor.value) {
    alert('Please select a color')
    return
  }
  console.log('Added to cart:', {
    product: product.value,
    size: selectedSize.value,
    color: selectedColor.value
  })
}
</script>

<template>
  <div v-if="product" class="flex gap-4 justify-center mx-auto px-4 pt-20 min-h-screen">
    
    <!-- Left Part - Product Info -->
    <div class="sticky top-40 h-fit w-full flex items-center mt-20">
      <div class="mt-10 ml-20">
        <h1 class="text-sm font-[Outfit]">{{product.name}}</h1>
        <h1 class="text-2xl font-[Outfit]">${{ product.price }}</h1>
        <p class="text-sm text-gray-600 mt-4 max-w-xs text-justify">{{ product.description }}</p>
      </div>
    </div>

    <!-- Middle Part - Product Images -->
    <div class="h-full w-full">
      <img 
        :src="product.img" 
        :alt="product.name" 
        class="w-full h-auto mb-4 min-h-150%"
        
      >
      <img 
        :src="product.hoverImg" 
        :alt="product.name" 
        class="w-full h-auto min-h-150%"
      >
    </div>

    <!-- Right Part - Product Options -->
    <div class="sticky top-40 h-fit w-full flex flex-col items-center mt-20">
      <div>
        <div class="text-sm text-gray-600 mb-1 mt-10">Size: </div>
        <select 
          v-model="selectedSize" 
          class="border border-gray-400 rounded px-2 py-1 text-sm w-[300px] h-[40px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="">Select Size</option>
          <option value="S">S - {{ productStatus }}</option>
          <option value="M">M - {{ productStatus }}</option>
          <option value="L">L - {{ productStatus }}</option>
          <option value="XL">XL - {{ productStatus }}</option>
        </select>
      </div>

      <div class="mt-10">
        <div class="text-sm text-gray-600 mb-1 mt-1">Color: </div>
        <select 
          v-model="selectedColor" 
          class="border border-gray-400 rounded px-2 py-1 text-sm w-[300px] h-[40px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400"
        >
          <option value="">Select Color</option>
          <option value="Black">Black - {{ productStatus }}</option>
          <option value="Blue">Blue - {{ productStatus }}</option>
          <option value="White">White - {{ productStatus }}</option>
        </select>
      </div>

      <button 
        @click="addToCart"
        class="bg-black text-white mt-14 px-4 py-2 rounded-[3px] w-[300px] hover:bg-gray-800 transition-colors"
      >
        <h1 class="text-[15px] mt-[7px]">ADD TO CART</h1>
      </button>
    </div>
  </div>
  
  <div v-else class="flex justify-center items-center min-h-screen">
    Loading...
  </div>
</template>