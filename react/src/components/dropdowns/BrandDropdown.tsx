import React from "react";
import { Adidas, DrMartens, Hermes, NewBalance, Nike, Puma, Reebok } from "../svgs/brandIcons";

const BrandDropdown = () => {
  return (
    <div className="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
      <div className="w-[90vw] mx-auto">
        <h2 className="uppercase font-semibold">Brands</h2>
        <div className="flex items-center justify-between mt-4">
            <Nike />
            <Adidas />
            <Puma />
            <DrMartens />
            <NewBalance />
            <Reebok />
            <Hermes />
        </div>
      </div>
    </div>
  );
};

export default BrandDropdown;
