<script setup>
import Header from '../../components/defaults/Header.vue'
import Hero from "../../components/wristwatch/Hero.vue"
import Brands from "../../components/wristwatch/Brands.vue"
import Trending from "../../components/wristwatch/Trending.vue"
import WatchCategories from "../../components/wristwatch/WatchCategories.vue"
import NewArrivals from "../../components/wristwatch/NewArrivals.vue"
import Promotions from "../../components/wristwatch/Promotions.vue"
import Footer from '../../components/defaults/Footer.vue'
</script>

<template>
    <Header active="wristwatch" />
    <Hero />
    <Brands />
    <Trending />
    <WatchCategories />
    <NewArrivals />
    <Promotions />
    <Footer active="wristwatch" />
</template>