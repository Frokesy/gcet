import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const Cart = () => {

  const items: ItemProps[] = [
    {
      id: 1,
      productImg: "/assets/footwear/ft-two.png",
      name: "Nike Zoom",
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/footwear/ft-three.png",
      name: "Dr Martens",
      price: "200,000.00",
    },
    {
      id: 3,
      productImg: "/assets/footwear/ft-four.png",
      name: "London Loafers",
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/footwear/ft-five.png",
      name: "Nike Air max 0s",
      price: "200,000.00",
    },
  ];

  return (
    <Container active="footwear">
      <CartTemplate items={items} active="footwear" themeColor="#000" />
    </Container>
  );
};

export default Cart;
