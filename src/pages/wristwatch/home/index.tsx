import Container from "../../../components/defaults/Container";
import Brands from "../../../components/wristwatch/Brands";
import WatchCategories from "../../../components/wristwatch/Categories";
import Hero from "../../../components/wristwatch/Hero";
import Trending from "../../../components/wristwatch/Trending";

const WristwatchHome = () => {
  return (
    <Container>
      <div className="font-playfair">
        <Hero />
        <Brands />
        <Trending />
        <WatchCategories />
      </div>
    </Container>
  );
};

export default WristwatchHome;
