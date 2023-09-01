<script  setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const items = ref()
async function getCategories() {
    try {
        const response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-categories`)
        if (response.status == 200) {
            items.value = response.data
        } 
    } catch (error) {
        alert(error.message)
    }
}
onMounted(() => {
    getCategories()
})
</script>

<template>
    <nav class=" border-b-gray-300 border-b-2 py-5">
        <div class="container w-11/12  mx-auto flex justify-between items-center">
            <a href="#" class="font-bold text-xl">My Blog</a>
            <ul class="flex space-x-4">
                <li>
                    <router-link to="/">হোম</router-link>
                </li>
                <li v-for="(item, index) in items" :key="index"><router-link :to="item.name">{{ item.name
                }}</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style  scoped></style>
