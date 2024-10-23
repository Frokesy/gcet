import Container from "../../../components/defaults/Container"
import Brands from "../../../components/tech/Brands"
import Categories from "../../../components/tech/Categories"
import Hero from "../../../components/tech/Hero"
import NewArrivals from "../../../components/tech/NewArrivals"
import TopSeller from "../../../components/tech/TopSeller"

const TechHome = () => {
  return (
    <Container>
        <Hero />
        <Brands />
        <NewArrivals />
        <Categories />
        <TopSeller />
    </Container>
  )
}

export default TechHome
