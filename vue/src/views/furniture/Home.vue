<script setup>
import Header from '../../components/defaults/Header.vue'
import Footer from '../../components/defaults/Footer.vue'
import Hero from "../../components/furniture/Hero.vue"
import NewArrivals from "../../components/furniture/NewArrivals.vue"
import TopSelling from "../../components/furniture/TopSelling.vue"
import Reviews from "../../components/furniture/Reviews.vue"
import Categories from "../../components/furniture/Categories.vue"

</script>

<template>
    <Header active="furniture" />
    <Hero />
    <Categories />
    <NewArrivals />
    <TopSelling />
    <Reviews />
    <Footer active="furniture" />
</template>