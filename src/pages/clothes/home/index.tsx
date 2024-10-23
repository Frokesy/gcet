import Brands from "../../../components/clothes/Brands"
import Hero from "../../../components/clothes/Hero"
import NewArrivals from "../../../components/clothes/NewArrivals"
import Container from "../../../components/defaults/Container"

const ClothesHome = () => {
  return (
    <Container>
        <Hero />
        <Brands />
        <NewArrivals />
    </Container>
  )
}

export default ClothesHome
