
import {
  Acer,
  Apple,
  Dell,
  Hp,
  Huawei,
  Samsung,
  Sony,
} from "../svgs/brandIcons";

const Brands = () => {
  return (
    <div className="bg-[#fff] py-10">
      <h2 className="text-center text-[#667085] font-semibold uppercase">
        Available brands
      </h2>

      <div className="w-[90vw] mx-auto grid grid-cols-3 gap-6 lg:gap-0 place-items-center lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
        <Hp />
        <Apple />
        <Samsung />
        <Huawei />
        <Sony />
        <Dell />
        <div className="col-span-3">
          <Acer />
        </div>
      </div>
    </div>
  );
};

export default Brands;
