<script setup>
import Header from '../../components/defaults/Header.vue'
import Hero from "../../components/sports/Hero.vue"
import NewArrivals from "../../components/sports/NewArrivals.vue"
import BestSellers from "../../components/sports/BestSellers.vue"
import FeaturedProducts from "../../components/sports/FeaturedProducts.vue"
import Categories from "../../components/sports/Categories.vue"
import Footer from '../../components/defaults/Footer.vue'
</script>

<template>
    <Header active="sports" />
    <Hero />
    <BestSellers />
    <FeaturedProducts />
    <Categories />
    <NewArrivals />
    <Footer active="sports" />
</template>