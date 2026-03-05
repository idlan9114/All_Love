<script setup lang="ts" >

import MenuPanel from './MenuPanel.vue';
import CartPanel from './CartPanel.vue';

</script>

<template>
    <nav class="Navbar bg-gradient-to-t from-transparent to-black/80 h-16 flex items-center justify-center z-10">
       
        <div class="ml-12">
            <MenuPanel/>
        </div>

        <router-link class="tracking-wide pl-16 flex justify-center font-bold text-4xl font-[Talina] text-white mr-8 lg:mr-0" to="/">
            all love
        </router-link>

        <div class="Right flex gap-4">
            <router-link class="text-white mt-1" to="/SignIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
            </router-link>
            <div class="text-white">|</div>
            <div>
                <CartPanel class="text-white mt-1"/>
            </div>
            
        </div>

    </nav>
    
</template>

<style scoped>

.Navbar {
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}

.Right {
    margin-right: 3rem;
}

@media (max-width: 640px) {
    .Right {
        margin-right: 1.5rem;
    }
}

</style>