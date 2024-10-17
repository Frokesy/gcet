import { FC, SetStateAction } from "react";
import Five from "../stars/Five";
import { Naira } from "../svgs/extras";

interface CatalogProps {
    setProduct: React.Dispatch<SetStateAction<ProductProps | undefined>>;
}

export interface ProductProps {
    id: number;
    productImg: string;
    name: string;
    ratingIcon: React.ReactElement;
    price: string;
    category: string;
}

const ShopCatalog: FC<CatalogProps> = ({ setProduct }) => {
    const items: ProductProps[] = [
        {
          id: 1,
          productImg: "/assets/footwear/shops/shop-img-one.png",
          name: "Nike air monarch iv",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sneakers",
        },
        {
          id: 2,
          productImg: "/assets/footwear/shops/shop-img-two.png",
          name: "New balance 1906R",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sneakers",
        },
        {
          id: 3,
          productImg: "/assets/footwear/shops/shop-img-three.png",
          name: "Nike dunk low",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sneakers",
        },
        {
          id: 4,
          productImg: "/assets/footwear/shops/shop-img-four.png",
          name: "New balance made in USA 990v6",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sneakers",
        },
        {
          id: 5,
          productImg: "/assets/footwear/shops/shop-img-five.png",
          name: "Nike air monarch iv",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "shoes",
        },
        {
          id: 6,
          productImg: "/assets/footwear/shops/shop-img-six.png",
          name: "New balance 1906R",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "shoes",
        },
        {
          id: 7,
          productImg: "/assets/footwear/shops/shop-img-seven.png",
          name: "Nike dunk low",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "shoes",
        },
        {
          id: 8,
          productImg: "/assets/footwear/shops/shop-img-eight.png",
          name: "New balance made in USA 990v6",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "shoes",
        },
        {
          id: 9,
          productImg: "/assets/footwear/shops/shop-img-nine.png",
          name: "Nike air monarch iv",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sports",
        },
        {
          id: 10,
          productImg: "/assets/footwear/shops/shop-img-ten.png",
          name: "New balance 1906R",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sports",
        },
        {
          id: 11,
          productImg: "/assets/footwear/shops/shop-img-eleven.png",
          name: "Nike dunk low",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sports",
        },
        {
          id: 12,
          productImg: "/assets/footwear/shops/shop-img-twelve.png",
          name: "New balance made in USA 990v6",
          ratingIcon: <Five />,
          price: "200,000.00",
          category: "sports",
        },
        {
            id: 13,
            productImg: "/assets/footwear/shops/shop-img-thirteen.png",
            name: "New balance made in USA 990v6",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "sneakers",
          },
          {
            id: 14,
            productImg: "/assets/footwear/shops/shop-img-fourteen.png",
            name: "Nike air monarch iv",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "shoes",
          },
          {
            id: 15,
            productImg: "/assets/footwear/shops/shop-img-fifteen.png",
            name: "New balance 1906R",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "shoes",
          },
          {
            id: 16,
            productImg: "/assets/footwear/shops/shop-img-sixteen.png",
            name: "Nike dunk low",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "shoes",
          },
          {
            id: 17,
            productImg: "/assets/footwear/shops/shop-img-seventeen.png",
            name: "New balance made in USA 990v6",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "shoes",
          },
          {
            id: 18,
            productImg: "/assets/footwear/shops/shop-img-eighteen.png",
            name: "Nike air monarch iv",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "sports",
          },
          {
            id: 19,
            productImg: "/assets/footwear/shops/shop-img-nineteen.png",
            name: "New balance 1906R",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "sports",
          },
          {
            id: 20,
            productImg: "/assets/footwear/shops/shop-img-twenty.png",
            name: "Nike dunk low",
            ratingIcon: <Five />,
            price: "200,000.00",
            category: "sports",
          },
      ];
    return (
        <div>
      <div className="w-[100%] grid lg:grid-cols-4 grid-cols-2 gap-6 mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setProduct(item)}
            className="flex-shrink-0 flex flex-col space-y-1 cursor-pointer lg:w-[248px] w-[176px]"
          >
            <img
              src={item.productImg}
              alt={item.name}
              className="lg:w-[248px] lg:h-[250px] w-[176px] h-[176px]"
            />
            <h2 className="font-semibold pt-3 lg:text-[16px] text-[14px]">{item.name}</h2>
            <div className="flex items-center space-x-3 text-[14px] text-[#808080] font-semibold">
              {item.ratingIcon}
              <p>5/5</p>
            </div>
            <p className="flex items-center lg:text-[16px] text-[14px] font-semibold">
              <Naira /> {item.price}
            </p>
          </div>
        ))}
      </div>
        </div>
    )
}

export default ShopCatalog;