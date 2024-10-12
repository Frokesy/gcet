import Container from "../../../components/defaults/Container";
import BestSellers from "../../../components/footwear/BestSellers";
import Categories from "../../../components/footwear/Categories";
import Hero from "../../../components/footwear/Hero";
import MiniGallery from "../../../components/footwear/MiniGallery";

const FootwearHome = () => {
  return (
    <Container>
      <Hero />
      <MiniGallery />
      <Categories />
      <BestSellers />
    </Container>
  );
};

export default FootwearHome;
