import Container from "../../../components/defaults/Container";
import Brands from "../../../components/wristwatch/Brands";
import WatchCategories from "../../../components/wristwatch/Categories";
import Hero from "../../../components/wristwatch/Hero";
import NewArrivals from "../../../components/wristwatch/NewArrivals";
import Promotions from "../../../components/wristwatch/Promotions";
import Trending from "../../../components/wristwatch/Trending";

const WristwatchHome = () => {
  return (
    <Container active="wristwatch">
      <div className="font-playfair">
        <Hero />
        <Brands />
        <Trending />
        <WatchCategories />
        <NewArrivals />
        <Promotions />
      </div>
    </Container>
  );
};

export default WristwatchHome;
