import Container from "../../../components/defaults/Container";
import { ProductProps } from "../../../components/footwear/ShopCatalog";
import { FiveBlueStars } from "../../../components/svgs/extras";
import ShopTemplate from "../../../components/templates/ShopTemplate";

const SportsShop = () => {
  const items: ProductProps[] = [
    {
      id: 1,
      productImg: "/assets/sports/st-two.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 2,
      productImg: "/assets/sports/st-three.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 3,
      productImg: "/assets/sports/st-four.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 4,
      productImg: "/assets/sports/st-five.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 5,
      productImg: "/assets/sports/st-six.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 6,
      productImg: "/assets/sports/st-seven.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 7,
      productImg: "/assets/sports/st-eight.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 8,
      productImg: "/assets/sports/st-nine.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 9,
      productImg: "/assets/sports/st-ten.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 10,
      productImg: "/assets/sports/st-two.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 11,
      productImg: "/assets/sports/st-four.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 12,
      productImg: "/assets/sports/st-six.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 13,
      productImg: "/assets/sports/st-three.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 14,
      productImg: "/assets/sports/st-five.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 15,
      productImg: "/assets/sports/st-ten.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 16,
      productImg: "/assets/sports/st-eight.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 17,
      productImg: "/assets/sports/st-nine.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 18,
      productImg: "/assets/sports/st-seven.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 19,
      productImg: "/assets/sports/st-four.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 20,
      productImg: "/assets/sports/st-ten.png",
      name: "Sports Equipment",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
      category: "sports",
    },
  ];

  return (
    <Container active="sports">
      <ShopTemplate products={items} themeColor="#039855" active="sports" />
    </Container>
  );
};

export default SportsShop;
