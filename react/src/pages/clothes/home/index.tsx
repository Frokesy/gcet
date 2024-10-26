import React from "react"
import Brands from "../../../components/clothes/Brands"
import Categories from "../../../components/clothes/Categories"
import Hero from "../../../components/clothes/Hero"
import NewArrivals from "../../../components/clothes/NewArrivals"
import Promotions from "../../../components/clothes/Promotions"
import TopSelling from "../../../components/clothes/TopSelling"
import Container from "../../../components/defaults/Container"

const ClothesHome = () => {
  return (
    <Container active="clothes">
        <Hero />
        <Brands />
        <NewArrivals />
        <TopSelling />
        <Categories />
        <Promotions />
    </Container>
  )
}

export default ClothesHome
