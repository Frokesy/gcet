
import Container from "../../../components/defaults/Container";
import { ProductProps } from "../../../components/footwear/ShopCatalog";
import Five from "../../../components/stars/Five";
import ShopTemplate from "../../../components/templates/ShopTemplate";

const WristwatchShop = () => {
  const items: ProductProps[] = [
    {
      id: 1,
      productImg: "/assets/wristwatch/wt-two.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 2,
      productImg: "/assets/wristwatch/wt-four.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 3,
      productImg: "/assets/wristwatch/wt-five.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 4,
      productImg: "/assets/wristwatch/wt-six.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 5,
      productImg: "/assets/wristwatch/wt-seven.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 6,
      productImg: "/assets/wristwatch/wt-eight.jpeg",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 7,
      productImg: "/assets/wristwatch/wt-ten.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 8,
      productImg: "/assets/wristwatch/wt-eleven.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 9,
      productImg: "/assets/wristwatch/wt-twelve.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 10,
      productImg: "/assets/wristwatch/wt-thirteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 11,
      productImg: "/assets/wristwatch/wt-fourteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 12,
      productImg: "/assets/wristwatch/wt-fifteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 13,
      productImg: "/assets/wristwatch/wt-sixteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 14,
      productImg: "/assets/wristwatch/wt-seventeen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 15,
      productImg: "/assets/wristwatch/wt-eighteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 16,
      productImg: "/assets/wristwatch/wt-nineteen.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 17,
      productImg: "/assets/wristwatch/wt-twenty.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 18,
      productImg: "/assets/wristwatch/wt-twenty-one.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 19,
      productImg: "/assets/wristwatch/wt-twenty-two.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
    {
      id: 20,
      productImg: "/assets/wristwatch/wt-one.png",
      name: "Richard Mille E4",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "watch",
    },
  ];

  return (
    <Container active="wristwatch">
      <ShopTemplate products={items} themeColor="#ff4405" active="wristwatch" />
    </Container>
  );
};

export default WristwatchShop;
