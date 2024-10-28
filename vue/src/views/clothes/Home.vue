<script setup>
import Header from '../../components/defaults/Header.vue'
import Hero from "../../components/clothes/Hero.vue"
import Brands from "../../components/clothes/Brands.vue"
import NewArrivals from "../../components/clothes/NewArrivals.vue"
import TopSelling from "../../components/clothes/TopSelling.vue"
import Categories from "../../components/clothes/Categories.vue"
import Promotions from "../../components/clothes/Promotions.vue"
import Footer from '../../components/defaults/Footer.vue'
</script>

<template>
    <Header active="clothes" />
    <Hero />
    <Brands />
    <NewArrivals />
    <TopSelling />
    <Categories />
    <Promotions />
    <Footer active="clothes"/>
</template>