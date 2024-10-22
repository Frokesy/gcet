import Container from "../../../components/defaults/Container"
import Categories from "../../../components/furniture/Categories"
import Hero from "../../../components/furniture/Hero"
import NewArrivals from "../../../components/furniture/NewArrivals"
import TopSelling from "../../../components/furniture/TopSelling"

const FurnitureHome = () => {
  return (
    <Container>
        <Hero />
        <Categories />
        <NewArrivals />
        <TopSelling />
    </Container>
  )
}

export default FurnitureHome
