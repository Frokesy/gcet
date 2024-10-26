import React from "react";
import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const SportsCart = () => {

  const items: ItemProps[] = [
    {
        id: 1,
        productImg: "/assets/sports/st-two.png",
        name: "Sports Equipment",
        price: "200,000.00",
      },
  ];

  return (
    <Container active="sports">
      <CartTemplate items={items} themeColor="#039855" active="sports" />
    </Container>
  );
};

export default SportsCart;
