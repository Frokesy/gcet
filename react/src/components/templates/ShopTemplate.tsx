import { ArrowDown, BackIcon, FilterIcon } from "../svgs/extras";
import PriceRangeSlider from "../defaults/PriceRangeSlider";
import ShopCatalog, { ProductProps } from "../footwear/ShopCatalog";
import { SearchIcon } from "../svgs/headerIcons";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "../footwear/Product";
import { motion } from "framer-motion";

interface ShopTemplateProps {
  products: ProductProps[];
  active: string;
  themeColor: string;
}

const ShopTemplate: FC<ShopTemplateProps> = ({
  products,
  themeColor,
  active,
}) => {
  const [product, setProduct] = useState<ProductProps>();
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [showFilter, setShowFilter] = useState<boolean>(true);

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
    return priceRange;
  };

  return (
    <div className="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
      <div className="flex space-x-6 w-[90vw] mx-auto">
        {product !== undefined ? (
          <div
            onClick={() => setProduct(undefined)}
            className="flex items-center cursor-pointer space-x-2"
          >
            <BackIcon />
            <p className="uppercase">Back</p>
          </div>
        ) : (
          <div className="">
            {active === "footwear" && (
              <NavLink
                to="/"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
            {active === "wristwatch" && (
              <NavLink
                to="/tmp-2/home"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
            {active === "furniture" && (
              <NavLink
                to="/tmp-3/home"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
            {active === "clothes" && (
              <NavLink
                to="/tmp-4/home"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
            {active === "tech" && (
              <NavLink
                to="/tmp-5/home"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
            {active === "sports" && (
              <NavLink
                to="/tmp-6/home"
                className="flex items-center cursor-pointer space-x-2"
              >
                <BackIcon />
                <p className="uppercase">Back</p>
              </NavLink>
            )}
          </div>
        )}

        <div className="flex space-x-1 lg:text-[14px] text-[12px]">
          <p className="underline">Home</p>
          <p>/</p>
          <p className="underline">Men</p>
          {product?.category && <p className="underline">/</p>}
          {product?.category && (
            <p className="underline capitalize">{product.category}</p>
          )}
          {product?.category && <p className="underline">/</p>}
          {product?.name && (
            <p className="underline">{product.name.slice(0, 10)}...</p>
          )}
        </div>
      </div>

      {product === undefined ? (
        <div className="">
          {active === "footwear" ? (
            <div className="">
              <h2 className="lg:text-[64px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
                Men Shoes
              </h2>

              <div className="flex justify-between items-center">
                <div className="lg:w-[40%] mt-6 lg:mt-0 px-6 lg:px-0 lg:block pb-4 flex flex-col justify-end lg:bg-none bg-[url('/assets/footwear/ft-ten.png')] bg-cover lg:min-h-0 min-h-[410px]">
                  <h2 className="text-[40px] lg:block hidden font-semibold">
                    Shop our latest men&apos;s <br /> wear
                  </h2>
                  <h2 className="text-[32px] block lg:hidden font-semibold">
                    Shop our latest men&apos;s wear
                  </h2>
                  <p className="lg:text-[18px]">
                    Sign up for deals, new products and promotions
                  </p>
                </div>
                <div className="lg:block hidden w-[50%]">
                  <img src="/assets/footwear/ft-ten.png" alt="shop-img" />
                </div>
              </div>
            </div>
          ) : (
            <div className="">
              {active === "wristwatch" && (
                <div className="w-[100%] mt-10">
                  <img
                    src="/assets/wristwatch/cover.png"
                    alt="shop-img"
                    className="w-[100%] lg:h-[470px] object-cover"
                  />
                </div>
              )}
              {active === "furniture" && (
                <div className="w-[100%] mt-10">
                  <img
                    src="/assets/furniture/cover.png"
                    alt="shop-img"
                    className="w-[100%] lg:h-[470px] object-cover"
                  />
                </div>
              )}
              {active === "clothes" && (
                <div className="w-[100%] mt-10">
                  <img
                    src="/assets/clothes/cover.png"
                    alt="shop-img"
                    className="w-[100%] lg:h-[470px] object-cover"
                  />
                </div>
              )}
              {active === "tech" && (
                <div className="w-[100%] mt-10">
                  <img
                    src="/assets/tech/th-one.png"
                    alt="shop-img"
                    className="w-[100%] lg:h-[470px] object-cover"
                  />
                </div>
              )}
              {active === "sports" && (
                <div className="w-[100%] mt-10">
                  <img
                    src="/assets/sports/st-one.png"
                    alt="shop-img"
                    className="w-[100%] lg:h-[470px] object-cover"
                  />
                </div>
              )}
            </div>
          )}

          <div className="mt-10 w-[90vw] mx-auto">
            {/**Desktop selector */}
            <div className="lg:flex hidden justify-between items-center">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center justify-between w-[15%] cursor-pointer"
              >
                <p>{showFilter ? "Hide Filters" : "Show Filters"}</p>
                <FilterIcon />
              </div>
              <div className="input border border-[#ccc] flex items-center rounded-full py-1.5 px-5 w-[30%] bg-[#eee] space-x-3">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  className="border-none outline-none placeholder:text-[#333] bg-inherit"
                />
              </div>
              <div className="flex items-center justify-between border border-[#808080] p-2 rounded-lg w-[15%]">
                <p>Sort By</p>
                <ArrowDown />
              </div>
            </div>

            {/**Mobile selector*/}
            <div className="flex lg:hidden flex-col justify-between items-center">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center justify-between w-[100%]"
              >
                <p>{showFilter ? "Hide Filters" : "Show Filters"}</p>
                <FilterIcon />
              </div>
              <div className="flex justify-between w-[100%] mt-6">
                <div className="input flex items-center rounded-lg py-1 px-2 w-[45%] bg-[#eee] space-x-3">
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search"
                    className="border-none outline-none placeholder:text-[#333] bg-inherit w-[100%]"
                  />
                </div>
                <div className="flex items-center justify-between p-1 rounded-lg w-[45%]">
                  <p>Sort By</p>
                  <ArrowDown />
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between lg:space-x-16 mt-10">
              {showFilter ? (
                <motion.div
                  className="flex flex-col lg:w-[15%]"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -200, opacity: 0 }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <h2>Selected filters</h2>
                  <button
                    className={`p-2 bg-[${themeColor}] w-12 text-[#fff] uppercase mt-3 mb-6`}
                  >
                    All
                  </button>

                  <div className="space-y-8 mt-6 w-[100%]">
                    <div className="flex items-center justify-between">
                      <p>Gender</p>
                      <ArrowDown />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Type</p>
                      <ArrowDown />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Color</p>
                      <ArrowDown />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Brand</p>
                      <ArrowDown />
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Collections</p>
                      <ArrowDown />
                    </div>
                    <div className="mx-auto lg:w-[100%] w-[50%] pb-10">
                      <PriceRangeSlider
                        min={0}
                        max={1000}
                        onChange={handlePriceChange}
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="w-[15%]"></div>
              )}

              <div className="lg:w-[85%]">
                <ShopCatalog setProduct={setProduct} items={products} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Product active={active} product={product} />
      )}
    </div>
  );
};

export default ShopTemplate;
