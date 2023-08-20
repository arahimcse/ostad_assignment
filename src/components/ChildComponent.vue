<script setup>
defineProps({
    message:String
})
defineEmits(['messageEmitted'])
</script>

<template>
    <div class="container w-2/6 mx-auto mt-20 flex flex-col text-center">
        <h2 class="text-center text-2xl mb-5">{{ message }}</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-5"
            @click="$emit('message-emitted', 'Blogging with Vue')">Custom Message</button>
        <slot name="default"></slot>
    </div>
</template>

<style scoped></style>