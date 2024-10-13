import Container from "../../../components/defaults/Container";
import BestSellers from "../../../components/footwear/BestSellers";
import Categories from "../../../components/footwear/Categories";
import Footer from "../../../components/footwear/Footer";
import Hero from "../../../components/footwear/Hero";
import MiniGallery from "../../../components/footwear/MiniGallery";
import Reviews from "../../../components/footwear/Reviews";

const FootwearHome = () => {
  return (
    <Container>
      <Hero />
      <MiniGallery />
      <Categories />
      <BestSellers />
      <Reviews />
      <Footer />
    </Container>
  );
};

export default FootwearHome;
