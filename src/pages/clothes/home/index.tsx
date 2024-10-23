import Brands from "../../../components/clothes/Brands"
import Hero from "../../../components/clothes/Hero"
import NewArrivals from "../../../components/clothes/NewArrivals"
import TopSelling from "../../../components/clothes/TopSelling"
import Container from "../../../components/defaults/Container"

const ClothesHome = () => {
  return (
    <Container>
        <Hero />
        <Brands />
        <NewArrivals />
        <TopSelling />
    </Container>
  )
}

export default ClothesHome
