import React from "react";
import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const WristwatchCart = () => {

  const items: ItemProps[] = [
    {
        id: 19,
        productImg: "/assets/wristwatch/wt-twenty-two.png",
        name: "Richard Mille E4",
        price: "200,000.00",
      },
      {
        id: 20,
        productImg: "/assets/wristwatch/wt-one.png",
        name: "Richard Mille E4",
        price: "200,000.00",
      },
  ];

  return (
    <Container active="wristwatch">
      <CartTemplate items={items} themeColor="#ff4405" active="wristwatch" />
    </Container>
  );
};

export default WristwatchCart;
