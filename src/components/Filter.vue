<script setup lang="ts">
import { useShopStore } from '@/stores/shop'

const shopStore = useShopStore()
</script>

<template>
    <!-- Filters Bar -->
    <div class="flex flex-col md:flex-row gap-4 items-start md:items-end mb-10 border-b border-gray-200 pb-6 flex-wrap">

      <div class="flex flex-col gap-1 w-full md:w-64">
        <label class="text-xs text-gray-500 font-[Outfit] uppercase tracking-wider">Search</label>
        <input
          v-model="shopStore.searchQuery"
          type="text"
          placeholder="Search products..."
          class="border border-gray-300 rounded px-3 py-2 text-sm font-[Outfit] focus:outline-none focus:ring-1 focus:ring-black w-full"
        />
      </div>

      <div class="flex flex-col gap-1 w-full md:w-48">
        <label class="text-xs text-gray-500 font-[Outfit] uppercase tracking-wider">Sort By</label>
        <select
          v-model="shopStore.sortOption"
          class="border border-gray-300 rounded px-3 py-2 text-sm font-[Outfit] focus:outline-none focus:ring-1 focus:ring-black w-full h-[38px] cursor-pointer"
        >
          <option value="default">Default</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A–Z</option>
        </select>
      </div>

      <div class="flex flex-col gap-1 w-full md:w-36">
        <label class="text-xs text-gray-500 font-[Outfit] uppercase tracking-wider">Min Price (RM)</label>
        <input
          v-model.number="shopStore.minPrice"
          type="number"
          min="0"
          class="border border-gray-300 rounded px-3 py-2 text-sm font-[Outfit] focus:outline-none focus:ring-1 focus:ring-black w-full"
        />
      </div>

      <div class="flex flex-col gap-1 w-full md:w-36">
        <label class="text-xs text-gray-500 font-[Outfit] uppercase tracking-wider">Max Price (RM)</label>
        <input
          v-model.number="shopStore.maxPrice"
          type="number"
          min="0"
          class="border border-gray-300 rounded px-3 py-2 text-sm font-[Outfit] focus:outline-none focus:ring-1 focus:ring-black w-full"
        />
      </div>

      <button
        @click="shopStore.reset()"
        class="text-xs font-[Outfit] uppercase tracking-wider text-gray-400 hover:text-black transition-colors underline underline-offset-2 whitespace-nowrap pb-2 cursor-pointer"
      >
        Reset
      </button>

    </div>
</template>