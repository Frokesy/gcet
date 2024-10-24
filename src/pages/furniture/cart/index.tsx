import Container from "../../../components/defaults/Container";
import CartTemplate from "../../../components/templates/CartTemplate";

export interface ItemProps {
  id: number;
  productImg: string;
  name: string;
  price: string;
}

const FurnitureCart = () => {

  const items: ItemProps[] = [
    {
        id: 18,
        productImg: "/assets/furniture/fur-twenty.png",
        name: "Wooden Couch",
        price: "200,000.00",
      },
      {
        id: 19,
        productImg: "/assets/furniture/fur-twenty-one.png",
        name: "Wooden Couch",
        price: "200,000.00",
      },
      {
        id: 20,
        productImg: "/assets/furniture/fur-twenty-two.png",
        name: "Wooden Couch",
        price: "200,000.00",
      },
  ];

  return (
    <Container active="furniture">
      <CartTemplate items={items} themeColor="#0e9384" active="furniture" />
    </Container>
  );
};

export default FurnitureCart;
