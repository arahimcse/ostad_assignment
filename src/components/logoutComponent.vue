<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const data = JSON.parse(localStorage.getItem('userData'))
function logoutAuth() {
    router.push({ path: '/' })
}
</script>

<template>
  <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
    <h2 class="mb-5 text-xl">Welcome  {{ data.username }}</h2>
    <div class="w-full max-w-xs ">
        <button
            @click="logoutAuth()"
            class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
            type="button"
          >
            Log Out
          </button>
      <p class="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
    </div>
  </div>
</template>
<style scoped></style>
