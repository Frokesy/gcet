import { FC, SetStateAction } from "react";
import { Naira } from "../svgs/extras";


interface CatalogProps {
  setProduct: React.Dispatch<SetStateAction<ProductProps | undefined>>;
  items: ProductProps[];
}

export interface ProductProps {
  id: number;
  productImg: string;
  name: string;
  ratingIcon: React.ReactElement;
  price: string;
  category: string;
}

const ShopCatalog: FC<CatalogProps> = ({ setProduct, items }) => {
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
            <h2 className="font-semibold pt-3 lg:text-[16px] text-[14px]">
              {item.name}
            </h2>
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
  );
};

export default ShopCatalog;
