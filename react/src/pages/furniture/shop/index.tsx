import Container from "../../../components/defaults/Container";
import { ProductProps } from "../../../components/footwear/ShopCatalog";
import Five from "../../../components/stars/Five";
import ShopTemplate from "../../../components/templates/ShopTemplate";

const FurnitureShop = () => {
  const items: ProductProps[] = [
    {
      id: 1,
      productImg: "/assets/furniture/fur-three.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 2,
      productImg: "/assets/furniture/fur-four.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 3,
      productImg: "/assets/furniture/fur-five.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 4,
      productImg: "/assets/furniture/fur-six.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 5,
      productImg: "/assets/furniture/fur-seven.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 6,
      productImg: "/assets/furniture/fur-eight.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 7,
      productImg: "/assets/furniture/fur-nine.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 8,
      productImg: "/assets/furniture/fur-ten.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 9,
      productImg: "/assets/furniture/fur-eleven.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 10,
      productImg: "/assets/furniture/fur-twelve.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 11,
      productImg: "/assets/furniture/fur-thirteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 12,
      productImg: "/assets/furniture/fur-fourteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 13,
      productImg: "/assets/furniture/fur-fifteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 14,
      productImg: "/assets/furniture/fur-sixteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 15,
      productImg: "/assets/furniture/fur-seventeen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 16,
      productImg: "/assets/furniture/fur-eighteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 17,
      productImg: "/assets/furniture/fur-nineteen.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 18,
      productImg: "/assets/furniture/fur-twenty.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 19,
      productImg: "/assets/furniture/fur-twenty-one.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
    {
      id: 20,
      productImg: "/assets/furniture/fur-twenty-two.png",
      name: "Wooden Couch",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "furniture",
    },
  ];

  return (
    <Container active="furniture">
      <ShopTemplate products={items} themeColor="#0e9384" active="furniture" />
    </Container>
  );
};

export default FurnitureShop;
