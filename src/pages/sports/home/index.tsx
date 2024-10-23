import Container from "../../../components/defaults/Container"
import BestSellers from "../../../components/sports/BestSellers"
import Categories from "../../../components/sports/Categories"
import FeaturedProducts from "../../../components/sports/FeaturedProducts"
import Hero from "../../../components/sports/Hero"

const SportsHome = () => {
  return (
    <Container>
      <Hero />
      <BestSellers />
      <FeaturedProducts />
      <Categories />
    </Container>
  )
}

export default SportsHome
