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
<div class="flex justify-center  bg-gray-300 place-items-center h-screen ">
  <div class="login-container flex flex-col items-center justify-center">
    <img src="@/assets/Images/AllLove_Logo.png" alt="All Love Logo" class="mb-4 "/>
    <h2 class="font-[Outfit] pb-8">Sign In</h2>

    <form @submit.prevent="handleLogin">
        
        <input type="username" v-model="username" placeholder="Username" required class="px-2 py-1"/>
        <input type="email" v-model="email" placeholder="Email" required class="px-2 py-1"/>

        <div class="flex justify-center items-center">
        <button type="submit" class="bg-gray-200 text-black px-6 py-2 hover:bg-black hover:!text-white transition-colors">Sign In</button>
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
