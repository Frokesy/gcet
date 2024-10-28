<script setup>
import Header from '../../components/defaults/Header.vue'
import Hero from "../../components/footwear/Hero.vue"
import MiniGallery from "../../components/footwear/MiniGallery.vue"
import Categories from "../../components/footwear/Categories.vue"
import BestSeller from "../../components/footwear/BestSeller.vue"
import Reviews from "../../components/footwear/Reviews.vue"
</script>

<template>
    <Header active="footwear" />
    <div>
        <Hero />
        <MiniGallery />
        <Categories />
        <BestSeller />
        <Reviews />
    </div>
</template>