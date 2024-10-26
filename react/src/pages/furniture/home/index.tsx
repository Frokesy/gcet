import Container from "../../../components/defaults/Container"
import Categories from "../../../components/furniture/Categories"
import Hero from "../../../components/furniture/Hero"
import NewArrivals from "../../../components/furniture/NewArrivals"
import Reviews from "../../../components/furniture/Reviews"
import TopSelling from "../../../components/furniture/TopSelling"

const FurnitureHome = () => {
  return (
    <Container active="furniture">
        <Hero />
        <Categories />
        <NewArrivals />
        <TopSelling />
        <Reviews />
    </Container>
  )
}

export default FurnitureHome
