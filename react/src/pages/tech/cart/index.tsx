import React from "react";
import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const TechCart = () => {

  const items: ItemProps[] = [
    {
        id: 19,
        productImg: "/assets/tech/th-nine.png",
        name: "Skullcandy - Crusher anc 2 wireless headphones",
        price: "200,000.00",
      },
      {
        id: 20,
        productImg: "/assets/tech/th-ten.png",
        name: "Skullcandy - Crusher anc 2 wireless headphones",
        price: "200,000.00",
      },
  ];

  return (
    <Container active="tech">
      <CartTemplate items={items} themeColor="#3e4784" active="tech" />
    </Container>
  );
};

export default TechCart;
