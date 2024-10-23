import Container from "../../../components/defaults/Container"
import Brands from "../../../components/tech/Brands"
import Categories from "../../../components/tech/Categories"
import Extras from "../../../components/tech/Extras"
import Hero from "../../../components/tech/Hero"
import NewArrivals from "../../../components/tech/NewArrivals"
import Promotions from "../../../components/tech/Promotions"
import TopSeller from "../../../components/tech/TopSeller"

const TechHome = () => {
  return (
    <Container>
        <Hero />
        <Brands />
        <NewArrivals />
        <Categories />
        <TopSeller />
        <Promotions />
        <Extras />
    </Container>
  )
}

export default TechHome
