import Container from "../../../components/defaults/Container"
import BestSellers from "../../../components/sports/BestSellers"
import FeaturedProducts from "../../../components/sports/FeaturedProducts"
import Hero from "../../../components/sports/Hero"

const SportsHome = () => {
  return (
    <Container>
      <Hero />
      <BestSellers />
      <FeaturedProducts />
    </Container>
  )
}

export default SportsHome
