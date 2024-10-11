import Container from "../../../components/defaults/Container";
import Categories from "../../../components/footwear/Categories";
import Hero from "../../../components/footwear/Hero";
import MiniGallery from "../../../components/footwear/MiniGallery";

const FootwearHome = () => {
  return (
    <Container>
      <Hero />
      <MiniGallery />
      <Categories />
    </Container>
  );
};

export default FootwearHome;
