<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { useShopStore } from '@/stores/shop'
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-vue-ui-kit"
import Filter from '@/components/Filter.vue'

const router = useRouter()
const productStore = useProductStore()
const shopStore = useShopStore()

const filteredProducts = computed(() => {
  let result = productStore.products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(shopStore.searchQuery.toLowerCase())
    const price = parseFloat(p.price)
    return matchesSearch && price >= shopStore.minPrice && price <= shopStore.maxPrice
  })

  if (shopStore.sortOption === 'price-asc') {
    result = [...result].sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  } else if (shopStore.sortOption === 'price-desc') {
    result = [...result].sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
  } else if (shopStore.sortOption === 'name-asc') {
    result = [...result].sort((a, b) => a.name.localeCompare(b.name))
  }

  return result
})

const goToProduct = (id: number) => router.push(`/product/${id}`)

const observeCards = async () => {
  await nextTick()
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.Card:not(.visible)').forEach(card => observer.observe(card))
}

onMounted(() => observeCards())
watch(filteredProducts, () => observeCards())
</script>

<template>
  <div class="min-h-screen bg-white pt-24 px-4 md:px-10 pb-20">

    <Filter/>

    <!-- Product Grid -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <div v-for="(product, index) in filteredProducts" :key="product.id" class="w-full">
        <MDBCard
          class="Card w-full h-full"
          :data-delay="index % 4"
          @click="goToProduct(product.id)"
        >
          <div class="image-wrapper">
            <img :src="product.img" :alt="product.name" class="card-img front w-full object-cover rounded-t" />
            <img :src="product.hoverImg" :alt="product.name" class="card-img back w-full object-cover rounded-t" />
          </div>
          <MDBCardBody class="card-body-compact">
            <MDBCardTitle class="text-xs sm:text-sm text-center font-[Outfit] leading-tight">
              {{ product.name }}
            </MDBCardTitle>
            <p class="text-xs sm:text-sm flex justify-center font-[Outfit]">RM {{ product.price }}</p>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else class="flex flex-col items-center justify-center py-32 text-gray-400">
      <p class="text-4xl mb-4">🔍</p>
      <p class="font-[Outfit] text-sm tracking-widest uppercase">No products found</p>
      <button @click="shopStore.reset()" class="mt-4 text-xs underline underline-offset-2 hover:text-black transition-colors font-[Outfit] cursor-pointer">
        Clear filters
      </button>
    </div>

  </div>
</template>

<style scoped>
.Card {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.Card.visible {
  opacity: 1;
  transform: scale(1);
}

.Card[data-delay="0"] { transition-delay: 0ms; }
.Card[data-delay="1"] { transition-delay: 100ms; }
.Card[data-delay="2"] { transition-delay: 200ms; }
.Card[data-delay="3"] { transition-delay: 300ms; }

@media (hover: hover) and (pointer: fine) {
  .Card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  .Card:hover .back  { opacity: 1; }
  .Card:hover .front { opacity: 0; }
}

@media (hover: none) {
  .Card.tapped { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }
  .Card.tapped .back  { opacity: 1; }
  .Card.tapped .front { opacity: 0; }
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.card-img {
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem 0.25rem 0 0;
  height: 180px;
}

@media (min-width: 640px)  { .card-img { height: 220px; } }
@media (min-width: 1024px) { .card-img { height: 288px; } }
@media (min-width: 1600px) { .card-img { height: 19vw; } }

.back {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.front { transition: opacity 0.3s ease; }

.card-body-compact { padding: 0.5rem !important; }
@media (min-width: 640px) { .card-body-compact { padding: 1rem !important; } }
</style>