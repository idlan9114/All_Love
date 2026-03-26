<script setup lang="ts">
import { ref } from 'vue'
import { GoogleLogin } from 'vue3-google-login'
import { decodeCredential } from 'vue3-google-login'

const email = ref('')
const username = ref('')

const handleLogin = () => {
  console.log('Logging in with', email.value, username.value)
}

const callback = (response: any) => {

  const userData = decodeCredential(response.credential)
  console.log('User Data:', userData)

}
</script>

<template>
<div class="flex justify-center  bg-black place-items-center h-screen ">
  <div class="login-container flex flex-col items-center justify-center">
    <img src="@/assets/Images/AllLove_Logo.png" alt="All Love Logo" class="fixed -z-1 opacity-35 w-[150vw] md:w-[80vw] max-w-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2""/>
    <h2 class="font-[Outfit] pb-8 text-white">Log In</h2>

    <form @submit.prevent="handleLogin" class="">
        
        <input type="username" v-model="username" placeholder="Username" required class="px-2 py-1 rounded-lg"/>
        <input type="email" v-model="email" placeholder="Email" required class="px-2 py-1 rounded-lg"/>

        <div class="flex justify-center items-center mt-8">
        <button type="submit" class="bg-gray-200 text-black px-6 py-2 hover:bg-gray-600 hover:!text-white transition-colors">Log In</button>
        </div>

    </form>

    <div class="divider">OR</div>

    <GoogleLogin :callback="callback" />
  </div>
</div>
</template>



<style scoped>
    .login-container { max-width: 300px; padding: 20px; }
    .divider { margin: 15px 0; text-align: center; }
    input { display: block; width: 100%; margin-bottom: 10px; }
</style>
