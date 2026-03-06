import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const getImg = (path: string) => new URL(`../assets/Images/${path}`, import.meta.url).href

  const products_home = [
    { name: "ALL BODEGA SWEATER",
      price: "299.00",
      img: getImg("AllBodega_Front.png"),
      hoverImg: getImg("AllBodega_Back.png") },

    { name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: getImg("Heirloom_Front.png"),
      hoverImg: getImg("Heirloom_Back.png") },

    { name: "COOKIE TIN TEE",
      price: "169.00",
      img: getImg("Cookies_Front.png"),
      hoverImg: getImg("Cookies_Back.png") },

    { name: "ALL BODEGA TEE",
      price: "189.90",
      img: getImg("Bodega_Front.png"),
      hoverImg: getImg("Bodega_Back.png") },
  ]

  const products_home2 = [
    { name: "ALL WALLET BLACK",
      price: "189.90",
      img: getImg("Wallet_Front.png"),
      hoverImg: getImg("Wallet_Back.png") },

    { name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: getImg("Ring1.png"),
      hoverImg: getImg("Ring2.png") },

    { name: "COOKIE TIN TEE",
      price: "169.00",
      img: getImg("Neck1.png"),
      hoverImg: getImg("Neck2.png") },

    { name: "ALL BODEGA TEE",
      price: "189.90",
      img: getImg("Bag1.png"),
      hoverImg: getImg("Bag2.png") },
  ]

  return { count, doubleCount, increment, products_home, products_home2 }
})