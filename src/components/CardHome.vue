<script setup lang="ts">
import { MDBCard, MDBCardBody, MDBCardTitle } from "mdb-vue-ui-kit";
import { onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'  
import type router from "@/router";

const store = useCounterStore()
const { products_home } = store 

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.2 })

  document.querySelectorAll('.Card').forEach(card => observer.observe(card))
})
</script>

<template>
  <div class="w-full ">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">

      <div class="w-full" v-for="product in products_home" :key="product.name">
        <MDBCard 
          class="Card w-full h-full"
        >
          <div class="image-wrapper">
            <img :src="product.img"
                  alt="product"
                  class="card-img front w-full object-cover rounded-t"/>
            <img :src="product.hoverImg"
                  alt="product"
                  class="card-img back w-full object-cover rounded-t"/>
          </div>

          <MDBCardBody class="card-body-compact">
            <MDBCardTitle class="text-xs sm:text-sm text-center font-[Outfit] leading-tight">{{ product.name }}</MDBCardTitle>
            <h1 class="text-xs sm:text-sm flex justify-center font-[Outfit]">RM {{ product.price }}</h1>
          </MDBCardBody>
        </MDBCard>
      </div>

    </div>
  </div>

  <div class="flex items-center justify-center pt-12 pb-4">
    <router-link to="/shop"
      class="bg-gray-200 text-black px-6 py-2 hover:bg-black hover:!text-white transition-colors"
      >View More</router-link>
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

/* Desktop hover */
@media (hover: hover) and (pointer: fine) {
  .Card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: scale(1.05);
  }

  .Card:hover .back  { opacity: 1; }
  .Card:hover .front { opacity: 0; }
}

/* Mobile tap */
@media (hover: none) {
  .Card.tapped {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

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
}

/* Responsive image height */
.card-img {
  height: 180px;
}

@media (min-width: 640px) {
  .card-img {
    height: 220px;
  }
}

@media (min-width: 1024px) {
  .card-img {
    height: 288px;
  }
}

@media (min-width: 1600px) {
  .card-img {
    height: 19vw;
  }
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.front {
  transition: opacity 0.3s ease;
}

.card-body-compact {
  padding: 0.5rem !important;
}

@media (min-width: 640px) {
  .card-body-compact {
    padding: 1rem !important;
  }
}

</style>