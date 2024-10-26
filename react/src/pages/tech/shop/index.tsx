
import Container from "../../../components/defaults/Container";
import { ProductProps } from "../../../components/footwear/ShopCatalog";
import Five from "../../../components/stars/Five";
import ShopTemplate from "../../../components/templates/ShopTemplate";

const TechShop = () => {
  const items: ProductProps[] = [
    {
      id: 1,
      productImg: "/assets/tech/th-two.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 2,
      productImg: "/assets/tech/th-three.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 3,
      productImg: "/assets/tech/th-four.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 4,
      productImg: "/assets/tech/th-five.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 5,
      productImg: "/assets/tech/th-six.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 6,
      productImg: "/assets/tech/th-seven.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 7,
      productImg: "/assets/tech/th-eight.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 8,
      productImg: "/assets/tech/th-nine.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 9,
      productImg: "/assets/tech/th-ten.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 10,
      productImg: "/assets/tech/th-eleven.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 11,
      productImg: "/assets/tech/th-twelve.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 12,
      productImg: "/assets/tech/th-two.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 13,
      productImg: "/assets/tech/th-three.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 14,
      productImg: "/assets/tech/th-four.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 15,
      productImg: "/assets/tech/th-five.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 16,
      productImg: "/assets/tech/th-six.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 17,
      productImg: "/assets/tech/th-seven.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 18,
      productImg: "/assets/tech/th-eight.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 19,
      productImg: "/assets/tech/th-nine.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
    {
      id: 20,
      productImg: "/assets/tech/th-ten.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "gadgets",
    },
  ];

  return (
    <Container active="tech">
      <ShopTemplate products={items} themeColor="#3e4784" active="tech" />
    </Container>
  );
};

export default TechShop;
