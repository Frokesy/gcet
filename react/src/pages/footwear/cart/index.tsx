
import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
  quantity: number;
}

const FootwearCart = () => {

  return (
    <Container active="footwear">
      <CartTemplate active="footwear" themeColor="#000" />
    </Container>
  );
};

export default FootwearCart;
