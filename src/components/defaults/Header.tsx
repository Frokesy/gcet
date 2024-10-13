import { useState } from "react";
import {
  AccountIcon,
  CaretDown,
  CartIcon,
  MobileHamburger,
  SearchIcon,
  ShopIcon,
} from "../svgs/HeaderIcons";
import CategoriesDropdown from "../footwear/dropdowns/CategoriesDropdown";

const Header = () => {
  const [revealCategoryDropdown, setRevealCategoryDropdown] =
    useState<boolean>(false);
  return (
    <div className="border-b-2 border-[#ccc] shadow-md fixed w-[100%] bg-[#fff]">
      <div className="w-[90vw] mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <img
            src="/assets/logo.png"
            alt="logo"
            className="max-w-[48px] max-h-[48px]"
          />
          <div className="lg:flex hidden space-x-8">
            <div className="flex items-center space-x-2">
              <h2>Home</h2>
              <CaretDown />
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setRevealCategoryDropdown(!revealCategoryDropdown)}
            >
              <h2>Categories</h2>
              <CaretDown />
            </div>
            <h2>Brands</h2>
            <h2>Contact us</h2>
          </div>
        </div>
        <div className="lg:hidden block">
          <MobileHamburger />
        </div>

        <div className="lg:flex hidden items-center space-x-8">
          <div className="input border border-[#ccc] flex items-center rounded-full py-1.5 px-5 space-x-3">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none placeholder:text-[#333] bg-inherit"
            />
          </div>
          <ShopIcon />
          <CartIcon />
          <AccountIcon />
        </div>
      </div>
      {revealCategoryDropdown && <CategoriesDropdown />}
    </div>
  );
};

export default Header;
