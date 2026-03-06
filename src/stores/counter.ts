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
    { 
      id: 1,
      name: "ALL BODEGA SWEATER",
      price: "299.00",
      img: getImg("AllBodega_Front.png"),
      hoverImg: getImg("AllBodega_Back.png"),
      description: "The All Bodega Sweater is a premium knit piece featuring an oversized fit and embroidered branding. Made from 100% organic cotton for ultimate comfort and sustainability. Perfect for layering or as a statement piece in your streetwear collection."
    },
    { 
      id: 2,
      name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: getImg("Heirloom_Front.png"),
      hoverImg: getImg("Heirloom_Back.png"),
      description: "Our Heirloom Jersey combines vintage aesthetics with modern comfort. Crafted from heavyweight cotton jersey with a unique garment-dyed finish. Features a relaxed fit, ribbed collar, and screen-printed graphics that develop character with every wear."
    },
    { 
      id: 3,
      name: "COOKIE TIN TEE",
      price: "169.00",
      img: getImg("Cookies_Front.png"),
      hoverImg: getImg("Cookies_Back.png"),
      description: "The Cookie Tin Tee is a playful addition to any wardrobe. Made from soft ring-spun cotton with a classic crewneck silhouette. Features custom cookie tin-inspired artwork screen-printed using eco-friendly water-based inks."
    },
    { 
      id: 4,
      name: "ALL BODEGA TEE",
      price: "189.90",
      img: getImg("Bodega_Front.png"),
      hoverImg: getImg("Bodega_Back.png"),
      description: "The classic All Bodega Tee is a wardrobe essential. Cut from premium 100% combed cotton with a regular fit that's neither too slim nor too loose. Features our signature bodega-inspired graphic on the front and subtle branding on the back."
    },
  ]

  const products_home2 = [
    { 
      id: 5,
      name: "ALL WALLET BLACK",
      price: "189.90",
      img: getImg("Wallet_Front.png"),
      hoverImg: getImg("Wallet_Back.png"),
      description: "The All Wallet in Black is crafted from full-grain Italian leather that develops a beautiful patina over time. Features RFID-blocking technology, multiple card slots, a bill compartment, and a coin pocket. Slim profile design fits easily in any pocket."
    },
    { 
      id: 6,
      name: "HEIRLOOM JERSEY",
      price: "289.00",
      img: getImg("Ring1.png"),
      hoverImg: getImg("Ring2.png"),
      description: "This Heirloom Jersey variation features a unique colorway and distressed detailing. The garment-dyed process creates subtle variations in color, making each piece truly one-of-a-kind. Made from heavyweight cotton with a broken-in feel from day one."
    },
    { 
      id: 7,
      name: "COOKIE TIN TEE",
      price: "169.00",
      img: getImg("Neck1.png"),
      hoverImg: getImg("Neck2.png"),
      description: "Another take on our popular Cookie Tin Tee, featuring alternative artwork inspired by vintage cookie tins. The soft-washed fabric ensures comfort while maintaining structure. Pre-shrunk to minimize shrinkage after washing."
    },
    { 
      id: 8,
      name: "ALL BODEGA TEE",
      price: "189.90",
      img: getImg("Bag1.png"),
      hoverImg: getImg("Bag2.png"),
      description: "This All Bodega Tee variation showcases different graphic placement and color scheme. Made from the same premium materials as our classic tee but with a fresh perspective. Features double-stitched hems for durability."
    },
  ]

  function getProductById(id: number) {
    const allProducts = [...products_home, ...products_home2]
    return allProducts.find(product => product.id === id)
  }

  function getAllProducts() {
    return [...products_home, ...products_home2]
  }

  return { 
    count, 
    doubleCount, 
    increment, 
    products_home, 
    products_home2,
    getProductById,
    getAllProducts
  }
})