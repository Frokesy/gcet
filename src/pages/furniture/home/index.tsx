import Container from "../../../components/defaults/Container"
import Categories from "../../../components/furniture/Categories"
import Hero from "../../../components/furniture/Hero"
import NewArrivals from "../../../components/furniture/NewArrivals"

const FurnitureHome = () => {
  return (
    <Container>
        <Hero />
        <Categories />
        <NewArrivals />
    </Container>
  )
}

export default FurnitureHome
