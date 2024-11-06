import { FC } from "react";
import {
  Acer,
  Adidas,
  Apple,
  Casio,
  Dell,
  DrMartens,
  Gucci,
  Helm,
  Hermes,
  Hp,
  Huawei,
  Ikea,
  Knoll,
  LuisVuitton,
  NewBalance,
  Nike,
  Patek,
  Pb,
  Prada,
  Puma,
  Red,
  Reebok,
  RichardMille,
  Role,
  Samsung,
  Seiko,
  Sony,
  TagHeuer,
  WayFair,
  Zara,
} from "../svgs/brandIcons";

interface BrandDropdownProps {
  active: string;
}

const BrandDropdown: FC<BrandDropdownProps> = ({ active }) => {
  return (
    <div className="bg-[#fff] lg:shadow-xl w-[100%] lg:py-10 lg:fixed">
      {active === "footwear" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-4 items-center justify-between my-6">
            <Nike />
            <Adidas />
            <Puma />
            <DrMartens />
            <NewBalance />
            <Reebok />
            <Hermes />
          </div>
        </div>
      )}
      {active === "wristwatch" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-2 gap-6 items-center justify-between my-6">
            <LuisVuitton />
            <TagHeuer />
            <RichardMille />
            <Casio />
            <Seiko />
            <Patek />
            <Role />
          </div>
        </div>
      )}
      {active === "furniture" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-4 items-center justify-between my-6">
            <Knoll />
            <Red />
            <Helm />
            <Ikea />
            <WayFair />
            <Pb />
          </div>
        </div>
      )}

      {active === "clothes" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-1 gap-6 items-center justify-between my-6">
            <Nike />
            <Prada />
            <Gucci />
            <Zara />
          </div>
        </div>
      )}

      {active === "tech" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-3 items-center justify-between my-6">
            <Hp />
            <Apple />
            <Samsung />
            <Huawei />
            <Sony />
            <Dell />
            <Acer />
          </div>
        </div>
      )}

      {active === "sports" && (
        <div className="w-[90vw] mx-auto">
          <h2 className="uppercase font-semibold lg:block hidden">Brands</h2>
          <div className="lg:flex grid grid-cols-4 items-center justify-between my-6">
            <Nike />
            <Adidas />
            <Puma />
            <DrMartens />
            <NewBalance />
            <Reebok />
            <Hermes />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandDropdown;
