<script setup lang="ts">
import CardHome from '@/components/CardHome.vue';
import CardHome_2 from '@/components/CardHome_2.vue';
</script>

<template>
    
    <div class="relative min-h-screen">
        <img 
        src="@/assets/Images/Main2.png" 
        alt="Main Page" 
        class="Main fixed inset-0 w-full h-screen object-cover object-[40%_center] -z-10"
        />
        <div> 
        <router-link to="/shop" class="absolute underline text-white bottom-[200px] lg:bottom-[90px] left-1/2 transform -translate-x-1/2">
            Shop Now 
        </router-link>
        </div>
    </div>
    <div class="p-8 bg-white rounded-t-[50px] h-[700px] lg:h-[600px]">
        <div class="w-full">
            <CardHome/>
        </div>
    </div>
    <div class="bg-white h-[700px] flex items-center justify-center ">
        <img 
            src="@/assets/Images/MainPage.jpeg" 
            alt="Main Page" 
            class="MainPage absolute w-[1450px] h-[550px] object-cover object-top"
        />
        <img 
            src="@/assets/Images/AllLove_Logo.png" 
            alt="Overlay Image" 
            class="LoveAll z-1 object-cover opacity-80"
        />
    </div>
    <div class="p-8 bg-white pt-16">
        <div class="w-full">
            <CardHome_2/>
        </div>
    </div>
    
</template>

<style scoped>



@media (min-width: 640px) {
  .LoveAll {
    width: 50vw;
    height: 50vw;
  }
}

@media (min-width: 1024px) {
  .LoveAll {
    width: 650px;
    height: 650px;
  }
}


</style>