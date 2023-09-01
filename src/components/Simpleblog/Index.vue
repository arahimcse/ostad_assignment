<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const oldNews = ref()
const latestNews = ref()
const isLoad = ref(false)
async function getOldNews() {
    try {
        const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-list/2')
        if (response.status == 200) {
            oldNews.value = response.data;
        }
    } catch (error) {
        isLoad.value = true
    }
}

async function getLatestNews() {
    try {
        const response = await axios.get('https://basic-blog.teamrabbil.com/api/post-newest')
        if (response.status == 200) {
            latestNews.value = response.data;
        }
    } catch (error) {
        isLoad.value = true
        console.log(isLoad)
    }
}
onMounted(() => {
    getOldNews()
    getLatestNews()
})
</script>

<template>
    <!-- Data is loaded -->
    <template v-if="false == isLoad">
        <h1 class="text-center mt-5 text-3xl">Latest News</h1>
        <section class="w-11/12 mx-auto mt-5 flex flex-row flex-wrap">
            <article
                class="m-1 w-[24%] p-3 bg-gray-200 border border-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300"
                v-for="(item, index) in latestNews" :key="index">
                <h1 class="my-3">
                    <RouterLink class=" text-blue-500 hover:underline"
                        :to="{ name: 'postDetails', params: { id: item.id } }">
                        {{ item.title }}</RouterLink>
                </h1>
                <p>{{ item.short }} </p>
            </article>
        </section>

        <h1 class="text-center mt-5 text-3xl">Old News</h1>
        <section class="w-11/12 mx-auto mt-5 flex flex-row flex-wrap">
            <article
                class="m-1 w-[24%] p-3 bg-gray-200 border border-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300"
                v-for="(item, index) in oldNews" :key="index">
                <h1 class="my-3">
                    <RouterLink class=" text-blue-500 hover:underline"
                        :to="{ name: 'postDetails', params: { id: item.id } }">
                        {{ item.title }}</RouterLink>
                </h1>
                <p>{{ item.short }} </p>
            </article>
        </section>
    </template>
    <!-- Data Loading Section -->
    <template v-if="true == isLoad">
        <h1 class="text-center mt-10 mb-20">Network Error</h1>
        <div class="border border-blue-300 shadow p-4 w-5/6 mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped></style>
