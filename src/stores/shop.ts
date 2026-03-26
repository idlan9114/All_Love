import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    searchQuery: '',
    sortOption: 'default',
    minPrice: 0,
    maxPrice: 1000,
  }),

  actions: {
    setSearch(query: string) {
      this.searchQuery = query
    },
    setSort(option: string) {
      this.sortOption = option
    },
    setMinPrice(price: number) {
      this.minPrice = price
    },
    setMaxPrice(price: number) {
      this.maxPrice = price
    },
    reset() {
      this.searchQuery = ''
      this.sortOption = 'default'
      this.minPrice = 0
      this.maxPrice = 1000
    },
  },
})