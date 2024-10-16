import Container from "../../../components/defaults/Container";
import { ArrowDown, BackIcon, FilterIcon } from "../../../components/svgs/extras";
import { SearchIcon } from "../../../components/svgs/HeaderIcons";

const Shop = () => {
  return (
    <Container>
      <div className="pt-[15vh] pb-10 w-[90vw] mx-auto">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <BackIcon />
            <p className="uppercase">Back</p>
          </div>
          <div className="flex space-x-2 text-[14px]">
            <p className="underline">Home</p>
            <p>/</p>
            <p className="underline">Men</p>
          </div>
        </div>

        <h2 className="text-[64px] font-semibold uppercase mt-10">Men Shoes</h2>

        <div className="flex justify-between items-center">
          <div className="w-[40%]">
            <h2 className="text-[40px] font-semibold">
              Shop our latest men&apos;s <br /> wear
            </h2>
            <p className="text-[18px]">
              Sign up for deals, new products and promotions
            </p>
          </div>
          <div className="w-[50%]">
            <img src="/assets/footwear/ft-ten.png" alt="shop-img" />
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-between w-[15%]">
                <p>Hide Filters</p>
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
        </div>
      </div>
    </Container>
  );
};

export default Shop;
