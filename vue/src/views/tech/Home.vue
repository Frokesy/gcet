<script setup>
import Header from '../../components/defaults/Header.vue'
import Hero from "../../components/tech/Hero.vue"
import Brands from "../../components/tech/Brands.vue"
import NewArrivals from "../../components/tech/NewArrivals.vue"
import TopSeller from "../../components/tech/TopSeller.vue"
import Extra from "../../components/tech/Extra.vue"
import Categories from "../../components/tech/Categories.vue"
import Promotions from "../../components/tech/Promotions.vue"
import Footer from '../../components/defaults/Footer.vue'
</script>

<template>
    <Header active="tech" />
    <Hero />
    <Brands />
    <NewArrivals />
    <Categories />
    <TopSeller />
    <Promotions />
    <Extra />
    <Footer active="tech" />
</template>