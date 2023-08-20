<script setup>
defineProps({
    message:String
})
import { ref } from "vue"
import ChildComponent from "./ChildComponent.vue"
const CustomMessage = ref()
</script>

<template>
    <ChildComponent :message="message"  @message-emitted="(response) => {CustomMessage = response}">
        {{ CustomMessage }}
    </ChildComponent>
</template>

<style scoped></style>
