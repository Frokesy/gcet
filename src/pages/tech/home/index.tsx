import Container from "../../../components/defaults/Container"
import Brands from "../../../components/tech/Brands"
import Categories from "../../../components/tech/Categories"
import Hero from "../../../components/tech/Hero"
import NewArrivals from "../../../components/tech/NewArrivals"

const TechHome = () => {
  return (
    <Container>
        <Hero />
        <Brands />
        <NewArrivals />
        <Categories />
    </Container>
  )
}

export default TechHome
