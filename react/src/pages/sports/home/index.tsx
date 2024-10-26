import Container from "../../../components/defaults/Container"
import BestSellers from "../../../components/sports/BestSellers"
import Categories from "../../../components/sports/Categories"
import FeaturedProducts from "../../../components/sports/FeaturedProducts"
import Hero from "../../../components/sports/Hero"
import NewArrivals from "../../../components/sports/NewArrivals"

const SportsHome = () => {
  return (
    <Container active="sports">
      <Hero />
      <BestSellers />
      <FeaturedProducts />
      <Categories />
      <NewArrivals />
    </Container>
  )
}

export default SportsHome
