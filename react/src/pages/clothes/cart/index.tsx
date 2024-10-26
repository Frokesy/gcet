import React from "react";
import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const ClothesCart = () => {

  const items: ItemProps[] = [
    {
        id: 19,
        productImg: "/assets/clothes/cl-twenty-three.png",
        name: "T-shirt with Tape Details",
        price: "200,000.00",
      },
      {
        id: 20,
        productImg: "/assets/clothes/cl-twenty-four.png",
        name: "T-shirt with Tape Details",
        price: "200,000.00",
      },
  ];

  return (
    <Container active="clothes">
      <CartTemplate items={items} themeColor="#553a32" active="clothes" />
    </Container>
  );
};

export default ClothesCart;
