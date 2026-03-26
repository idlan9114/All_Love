<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { computed, ref, onMounted, watch } from 'vue'

const route = useRoute()
const store = useProductStore()
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
    <div v-if="product" class="min-h-screen px-4 pt-20">
    
        <!-- MOBILE: vertical stack (default), DESKTOP: 3-column flex -->
        <div class="flex flex-col md:flex-row gap-4 justify-center mx-auto">

            <!-- Left Part - Product Info (hidden on mobile, shown on desktop) -->
            <div class="hidden md:flex md:sticky md:top-40 h-fit w-full items-center">
                <div class="mt-10 ml-10">
                <h1 class="text-sm font-[Outfit]">{{ product.name }}</h1>
                <h1 class="text-2xl font-[Outfit]">${{ product.price }}</h1>
                <p class="text-sm text-gray-600 mt-4 max-w-xs text-justify">{{ product.description }}</p>
                </div>
            </div>

            <!-- Middle Part - Product Images -->
            <!-- Mobile: horizontal scroll, Desktop: centered column -->
            <div class="w-full">

                <!-- Mobile image slider -->
                <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-2 md:hidden">
                <img 
                    :src="product.img" 
                    :alt="product.name" 
                    class="snap-center shrink-0 w-full h-auto object-cover"
                >
                <img 
                    :src="product.hoverImg" 
                    :alt="product.name" 
                    class="snap-center shrink-0 w-full h-auto object-cover"
                >
                </div>

                <!-- Desktop stacked images -->
                <div class="hidden md:block">
                    <img :src="product.img" :alt="product.name" class="w-full h-auto mb-4">
                    <img :src="product.hoverImg" :alt="product.name" class="w-full h-auto">
                </div>
            </div>

            <!-- Right Part - Product Options -->
            <div class="w-full flex flex-col items-start md:sticky md:top-40 h-fit md:items-center md:mt-20 pb-20">

                <!-- Mobile: show product info here instead -->
                <div class="md:hidden mt-4 mb-6">
                    <h1 class="text-sm font-[Outfit]">{{ product.name }}</h1>
                    <h1 class="text-2xl font-[Outfit]">${{ product.price }}</h1>
                    <p class="text-sm text-gray-600 mt-2 text-justify">{{ product.description }}</p>
                </div>

                <div class="w-full md:w-[300px] mt-0 md:mt-10 flex flex-col gap-6 overflow-hidden">

                    <div>
                        <div class="text-sm text-gray-600 mb-1">Size:</div>
                        <select 
                            v-model="selectedSize" 
                            class="border border-gray-400 rounded px-2 py-1 text-sm w-full h-[40px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400 overflow-hidden"
                        >
                            <option value="">Select Size</option>
                            <option value="S">S - {{ productStatus }}</option>
                            <option value="M">M - {{ productStatus }}</option>
                            <option value="L">L - {{ productStatus }}</option>
                            <option value="XL">XL - {{ productStatus }}</option>
                        </select>
                    </div>

                    <div>
                        <div class="text-sm text-gray-600 mb-1">Color:</div>
                        <select 
                            v-model="selectedColor" 
                            class="border border-gray-400 rounded px-2 py-1 text-sm min-w-full h-[40px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-400 overflow-hidden"
                        >
                            <option value="">Select Color</option>
                            <option value="Black">Black - {{ productStatus }}</option>
                            <option value="Blue">Blue - {{ productStatus }}</option>
                            <option value="White">White - {{ productStatus }}</option>
                        </select>
                    </div>

                    <button 
                        @click="addToCart"
                        class="bg-black text-white px-4 py-3 rounded-[3px] w-full hover:bg-gray-800 transition-colors"
                    >
                        <span class="text-[15px]">ADD TO CART</span>
                    </button>

                </div>
            </div>

        </div>
  </div>

  <div v-else class="flex justify-center items-center min-h-screen">
    Loading...
  </div>
</template>