import React from "react";
import { Gucci, Nike, Prada, Zara } from "../svgs/brandIcons";

const Brands = () => {
  return (
    <div className="bg-[#fff] py-10">
      <h2 className="text-center text-[#667085] font-semibold uppercase">
        Available brands
      </h2>

      <div className="w-[90vw] mx-auto grid grid-cols-2 gap-6 lg:gap-0 place-items-center lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
        <Nike />
        <div className="lg:scale-100 scale-75">
          <Prada />
        </div>
        <div className="lg:scale-100 scale-75">
          <Gucci />
        </div>
        <Zara />
      </div>
    </div>
  );
};

export default Brands;
