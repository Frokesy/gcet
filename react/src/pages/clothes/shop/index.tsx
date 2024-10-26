import React from "react";
import Container from "../../../components/defaults/Container";
import { ProductProps } from "../../../components/footwear/ShopCatalog";
import Five from "../../../components/stars/Five";
import ShopTemplate from "../../../components/templates/ShopTemplate";

const ClothesShop = () => {
  const items: ProductProps[] = [
    {
      id: 1,
      productImg: "/assets/clothes/cl-one.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 2,
      productImg: "/assets/clothes/cl-two.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 3,
      productImg: "/assets/clothes/cl-three.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 4,
      productImg: "/assets/clothes/cl-four.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 5,
      productImg: "/assets/clothes/cl-five.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 6,
      productImg: "/assets/clothes/cl-six.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 7,
      productImg: "/assets/clothes/cl-seven.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 8,
      productImg: "/assets/clothes/cl-eight.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 9,
      productImg: "/assets/clothes/cl-nine.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 10,
      productImg: "/assets/clothes/cl-ten.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 11,
      productImg: "/assets/clothes/cl-eleven.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 12,
      productImg: "/assets/clothes/cl-sixteen.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 13,
      productImg: "/assets/clothes/cl-seventeen.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 14,
      productImg: "/assets/clothes/cl-eighteen.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 15,
      productImg: "/assets/clothes/cl-nineteen.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 16,
      productImg: "/assets/clothes/cl-twenty.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 17,
      productImg: "/assets/clothes/cl-twenty-one.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 18,
      productImg: "/assets/clothes/cl-twenty-two.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 19,
      productImg: "/assets/clothes/cl-twenty-three.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
    {
      id: 20,
      productImg: "/assets/clothes/cl-twenty-four.png",
      name: "T-shirt with Tape Details",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "clothes",
    },
  ];

  return (
    <Container active="clothes">
      <ShopTemplate products={items} themeColor="#553a32" active="clothes" />
    </Container>
  );
};

export default ClothesShop;
