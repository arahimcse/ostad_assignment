<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { reactive } from 'vue'
const loginData = reactive({
  username: '',
  password: ''
})
const router = useRouter()
function loginAuth() {
  const data = JSON.parse(localStorage.getItem('userData'))
  if (loginData.username === data.username && loginData.password === data.password) {
    router.push({ path: '/dashboard' })
  } else {
    alert('Username or Password not match')
  }
}
</script>

<template>
  <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
    <h2 class="mb-5 text-xl">Login</h2>
    <div class="w-full max-w-xs">
      <form @submit.prevent class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            v-model="loginData.username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            v-model="loginData.password"
          />
          <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
        </div>
        <div class="flex items-center justify-between">
          <button
            @click="loginAuth()"
            class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <RouterLink
            class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-orange-800"
            to="/signup"
            >Or Register</RouterLink
          >
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>
<style scoped></style>
