<script setup>
import Header from '../../components/defaults/Header.vue'
import Footer from '../../components/defaults/Footer.vue'
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
        <Footer active="footwear" />
    </div>
</template>