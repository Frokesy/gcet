import Container from "../../../components/defaults/Container";
import Brands from "../../../components/wristwatch/Brands";
import Hero from "../../../components/wristwatch/Hero";

const WristwatchHome = () => {
  return (
    <Container>
      <div className="font-playfair">
        <Hero />
        <Brands />
      </div>
    </Container>
  );
};

export default WristwatchHome;
