<script setup>

const images = [
  {
    name:"Slide Image 1",
    imageUrl: "https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60",
    desc:"Lorem ipsum dolor sit amet."
  },
  {
    name:"Slide Image 2",
    imageUrl: "https://images.unsplash.com/photo-1682695794816-7b9da18ed470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60",
    desc:"Lorem ipsum dolor sit amet consectetur."
  },
  {
    name:"Slide Image 3",
    imageUrl: "https://images.unsplash.com/photo-1682685797661-9e0c87f59c60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing."
  },
  {
    name:"Slide Image 4",
    imageUrl: "https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1024&q=60",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
  }
]

</script>

<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" v-for="(image, index) in images" :data-bs-slide-to="index" :class="0==index ? 'active' : ''" aria-current="true" :aria-label="['slide' , index+1]"  ></button>
  </div>
  <div class="carousel-inner">



    <div class="carousel-item" v-for="(image, index) in images" :key="index" :class="index == 0 ? 'active':''">
      <img :src="image.imageUrl" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>{{ image.name}}</h5>
        <p>{{ image.desc }}</p>
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped></style>
