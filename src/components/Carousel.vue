<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
let carousel = null;
const items = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg",
];
onMounted(() => {
    carousel = new Flickity('#imageCarousel', {
        autoPlay: 1500
    })
})
onBeforeUnmount(() => {
    if(carousel)
    {
        carousel.destroy()
    }
})
</script>

<template>
    <h2 class="my-5 text-3xl">Image Carosuels </h2>
    <div class="container carousel-container mx-auto w-5/6 mb-10" id="imageCarousel">
        <div v-for="(item, index) in items" :style="`background-image:url(${item})`" class="carousel-items">{{ index + 1 }}
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    width: 600px;
    height: 400px;
}

.carousel-items {
    width: 600px;
    height: 400px;
    background-color: darkgray;
    background-size: cover;
}
</style>
