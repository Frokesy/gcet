import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

const SportsCart = () => {
  return (
    <Container active="sports">
      <CartTemplate themeColor="#039855" active="sports" />
    </Container>
  );
};

export default SportsCart;
