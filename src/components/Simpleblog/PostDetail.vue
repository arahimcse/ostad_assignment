<script setup>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';
const data = ref()
const route = useRoute()
async function getDetails() {
    try {
        const response = await axios.get(`https://basic-blog.teamrabbil.com/api/post-details/${route.params.id}`)
        const { postDetails } = response.data
        data.value = postDetails
    } catch (error) {
        alert(error.message)
    }
}
onMounted(() => {
    getDetails()
})
const date = computed(() => {
    const d = new Date(data.value.created_at)
    let formatDate = d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear()
    return formatDate
})
</script>

<template>
    <section v-if="data" class="w-11/12 mx-auto">
        <img class="my-5" :src="data.img" :alt="data.title">
        <div class="p-5">
            <h1 class="mb-3">{{ data.title }} <span>Posted at {{ date }}</span></h1>
            <p class=" text-justify">{{ data.content }}</p>
        </div>
    </section>
    <section v-else class="w-11/12 mx-auto">
        <h1 class="text-center text-xl my-10">Sorry! Post Detail not available</h1>

    </section>
</template>

<style scoped></style>
