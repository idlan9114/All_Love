import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  

  const products_home = [
    { name: "ALL BODEGA SWEATER",
      price: "299.00",
      img: "/src/assets/Images/AllBodega_Front.png",
      hoverImg: "/src/assets/Images/AllBodega_Back.png" },

    { name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: "/src/assets/Images/Heirloom_Front.png",
      hoverImg: "/src/assets/Images/Heirloom_Back.png" },

    { name: "COOKIE TIN TEE",
      price: "169.00",
      img: "/src/assets/Images/Cookies_Front.png",
      hoverImg: "/src/assets/Images/Cookies_Back.png" },

    { name: "ALL BODEGA TEE",
      price: "189.90",
      img: "/src/assets/Images/Bodega_Front.png",
      hoverImg: "/src/assets/Images/Bodega_Back.png" },         
  ]

  const products_home2 = [
    { name: "ALL WALLET BLACK",
      price: "189.90",
      img: "/src/assets/Images/Wallet_Front.png",
      hoverImg: "/src/assets/Images/Wallet_Back.png" },

    { name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: "/src/assets/Images/Heirloom_Front.png",
      hoverImg: "/src/assets/Images/Heirloom_Back.png" },

    { name: "COOKIE TIN TEE",
      price: "169.00",
      img: "/src/assets/Images/Cookies_Front.png",
      hoverImg: "/src/assets/Images/Cookies_Back.png" },

    { name: "ALL BODEGA TEE",
      price: "189.90",
      img: "/src/assets/Images/Bodega_Front.png",
      hoverImg: "/src/assets/Images/Bodega_Back.png" },         
  ]

  return { count, doubleCount, increment, products_home, products_home2 }
})