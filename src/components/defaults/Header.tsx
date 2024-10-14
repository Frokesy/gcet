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
import BrandDropdown from "../footwear/dropdowns/BrandDropdown";
import HomeDropdown from "../footwear/dropdowns/HomeDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [revealCategoryDropdown, setRevealCategoryDropdown] =
    useState<boolean>(false);
  const [revealBrandDropdown, setRevealBrandDropdown] =
    useState<boolean>(false);
  const [revealHomeDropdown, setRevealHomeDropdown] = useState<boolean>(false);
  return (
    <div className="border-b-2 border-[#ccc] shadow-md fixed w-[100%] z-50 bg-[#fff]">
      <div className="w-[90vw] mx-auto py-3 flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <NavLink to="/">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="max-w-[48px] max-h-[48px]"
            />
          </NavLink>
          <div className="lg:flex hidden space-x-8">
            <div
              onClick={() => {
                if (revealBrandDropdown || revealCategoryDropdown) {
                  setRevealBrandDropdown(false);
                  setRevealCategoryDropdown(false);
                  setRevealHomeDropdown(!revealHomeDropdown);
                } else {
                  setRevealHomeDropdown(!revealHomeDropdown);
                }
              }}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <h2>Home</h2>
              <CaretDown />
            </div>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => {
                if (revealBrandDropdown || revealHomeDropdown) {
                  setRevealBrandDropdown(false);
                  setRevealHomeDropdown(false);
                  setRevealCategoryDropdown(!revealCategoryDropdown);
                } else {
                  setRevealCategoryDropdown(!revealCategoryDropdown);
                }
              }}
            >
              <h2>Categories</h2>
              <CaretDown />
            </div>
            <h2
              className="cursor-pointer"
              onClick={() => {
                if (revealCategoryDropdown || revealHomeDropdown) {
                  setRevealCategoryDropdown(false);
                  setRevealHomeDropdown(false);
                  setRevealBrandDropdown(!revealBrandDropdown);
                } else {
                  setRevealBrandDropdown(!revealBrandDropdown);
                }
              }}
            >
              Brands
            </h2>
            <NavLink to="/contact">Contact us</NavLink>
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
      {revealBrandDropdown && <BrandDropdown />}
      {revealHomeDropdown && <HomeDropdown />}
    </div>
  );
};

export default Header;
