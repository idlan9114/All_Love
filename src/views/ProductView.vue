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

const quantity = ref(1)
const selectedSize = ref('')

const sizes = ['S', 'M', 'L', 'XL']

const addToCart = () => {
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  
  console.log('Added to cart:', {
    product: product.value,
    size: selectedSize.value,
    quantity: quantity.value
  })
  
  alert(`Added ${product.value?.name} (Size: ${selectedSize.value}, Qty: ${quantity.value}) to cart!`)
}
</script>

<template>
  <div v-if="product" class="container mx-auto px-4 pt-20 min-h-screen">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <div class="product-images">
        <MDBCard class="w-full mb-4">
          <div class="image-wrapper relative overflow-hidden">
            <img 
              :src="mainImage || product.img" 
              :alt="product.name"
              class="main-image w-full object-cover rounded-t"
            />
          </div>
        </MDBCard>
      
        <div class="thumbnail-grid grid grid-cols-2 gap-2">
          <div 
            class="thumbnail cursor-pointer"
            @click="setMainImage(product.img)"
            :class="{ 'active': mainImage === product.img }"
          >
            <img 
              :src="product.img" 
              :alt="product.name"
              class="w-full object-cover rounded border-2 transition-colors"
            />
          </div>
          <div 
            class="thumbnail cursor-pointer"
            @click="setMainImage(product.hoverImg)"
            :class="{ 'active': mainImage === product.hoverImg }"
          >
            <img 
              :src="product.hoverImg" 
              :alt="product.name"
              class="w-full object-cover rounded border-2 transition-colors"
            />
          </div>
        </div>
      </div>


      <div class="product-details">
        <h1 class="text-3xl font-[Outfit] mb-2">{{ product.name }}</h1>
        <p class="text-2xl font-[Outfit] mb-6">RM {{ product.price }}</p>
        

        <div class="product-description mb-8">
          <h3 class="font-[Outfit] text-lg mb-3 border-b pb-2">Description</h3>
          <p class="text-gray-700 leading-relaxed">
            {{ product.description }}
          </p>
        </div>


        <div class="size-selection mb-6">
          <div class="flex justify-between items-center mb-2">
            <h3 class="font-[Outfit] text-lg">Size</h3>
            <span v-if="selectedSize" class="text-sm text-gray-600">Selected: {{ selectedSize }}</span>
          </div>
          <div class="flex gap-2 flex-wrap">
            <button 
              v-for="size in sizes" 
              :key="size"
              @click="selectedSize = size"
              class="border px-6 py-3 transition-colors min-w-[60px]"
              :class="[
                selectedSize === size 
                  ? 'bg-black text-white border-black' 
                  : 'border-gray-300 hover:bg-black hover:text-white'
              ]"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <!-- Quantity and Add to Cart -->
        <div class="mb-8">
          <h3 class="font-[Outfit] text-lg mb-2">Quantity</h3>
          <div class="flex gap-4 items-center">
            <select 
              v-model="quantity"
              class="border border-gray-300 px-4 py-3 w-24"
            >
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            
            <button 
              @click="addToCart"
              class="flex-1 bg-black text-white py-3 font-[Outfit] hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="container mx-auto px-4 py-8 text-center min-h-screen flex items-center justify-center">
    <div>
      <p class="text-xl font-[Outfit] mb-4">Product not found</p>
      <router-link to="/" class="text-black underline hover:no-underline">Return to Home</router-link>
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