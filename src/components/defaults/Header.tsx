import { FC, useState } from "react";
import {
  AccountIcon,
  CaretDown,
  CartIcon,
  MobileHamburger,
  SearchIcon,
  ShopIcon,
} from "../svgs/headerIcons";
import CategoriesDropdown from "../dropdowns/CategoriesDropdown";
import BrandDropdown from "../dropdowns/BrandDropdown";
import HomeDropdown from "../dropdowns/HomeDropdown";
import { NavLink } from "react-router-dom";

interface HeaderProps {
  active: string;
}

const Header: FC<HeaderProps> = ({ active }) => {
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
            {active === "footwear" && (
              <NavLink to="/contact">Contact us</NavLink>
            )}
            {active === "wristwatch" && (
              <NavLink to="/tmp-2/contact">Contact us</NavLink>
            )}
            {active === "furniture" && (
              <NavLink to="/tmp-3/contact">Contact us</NavLink>
            )}
            {active === "clothes" && (
              <NavLink to="/tmp-4/contact">Contact us</NavLink>
            )}
            {active === "tech" && (
              <NavLink to="/tmp-5/contact">Contact us</NavLink>
            )}
            {active === "sports" && (
              <NavLink to="/tmp-6/contact">Contact us</NavLink>
            )}
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
          {active === "footwear" && (
            <NavLink to="/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "wristwatch" && (
            <NavLink to="/tmp-2/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "furniture" && (
            <NavLink to="/tmp-3/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "clothes" && (
            <NavLink to="/tmp-4/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "tech" && (
            <NavLink to="/tmp-5/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "sports" && (
            <NavLink to="/tmp-6/shop">
              <ShopIcon />
            </NavLink>
          )}
          {active === "footwear" && (
            <NavLink to="/cart">
              <CartIcon />
            </NavLink>
          )}
          {active === "wristwatch" && (
            <NavLink to="/tmp-2/cart">
              <CartIcon />
            </NavLink>
          )}
          {active === "furniture" && (
            <NavLink to="/tmp-3/cart">
              <CartIcon />
            </NavLink>
          )}
          {active === "clothes" && (
            <NavLink to="/tmp-4/cart">
              <CartIcon />
            </NavLink>
          )}
          {active === "tech" && (
            <NavLink to="/tmp-5/cart">
              <CartIcon />
            </NavLink>
          )}
          {active === "sports" && (
            <NavLink to="/tmp-6/cart">
              <CartIcon />
            </NavLink>
          )}
          <NavLink to="/profile">
            <AccountIcon />
          </NavLink>
        </div>
      </div>
      {revealCategoryDropdown && <CategoriesDropdown />}
      {revealBrandDropdown && <BrandDropdown />}
      {revealHomeDropdown && <HomeDropdown />}
    </div>
  );
};

export default Header;
