import {
  Casio,
  LuisVuitton,
  Patek,
  RichardMille,
  Role,
  Seiko,
  TagHeuer,
} from "../svgs/brandIcons";

const Brands = () => {
  return (
    <div className="bg-[#fff] py-10">
      <h2 className="text-center text-[#667085] font-semibold uppercase">
        Available brands
      </h2>

      <div className="w-[90vw] mx-auto grid grid-cols-2 gap-10 lg:gap-0 place-items-center lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
        {" "}
        <LuisVuitton />
        <TagHeuer />
        <RichardMille />
        <Casio />
        <Seiko />
        <Patek />
        <div className="col-span-2">
          <Role />
        </div>
      </div>
    </div>
  );
};

export default Brands;
