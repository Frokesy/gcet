import { motion } from "framer-motion";
import React, { FC, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeDropdown from "../dropdowns/HomeDropdown";
import { ArrowDown } from "../svgs/extras";
import CategoriesDropdown from "../dropdowns/CategoriesDropdown";
import BrandDropdown from "../dropdowns/BrandDropdown";

interface DrawerProps {
  setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
  active: string;
}

const dropdownVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10, transition: { duration: 0.6 } },
};

const Drawer: FC<DrawerProps> = ({ setOpenDrawer, active }) => {
  const [revealCategoryDropdown, setRevealCategoryDropdown] =
    useState<boolean>(false);
  const [revealBrandDropdown, setRevealBrandDropdown] =
    useState<boolean>(false);
  const [revealHomeDropdown, setRevealHomeDropdown] = useState<boolean>(false);

  const handleClick = (tab: string) => {
    if (tab === "home") {
      setRevealHomeDropdown(!revealHomeDropdown);
    } else if (tab === "categories") {
      setRevealCategoryDropdown(!revealCategoryDropdown);
    } else if (tab === "brands") {
      setRevealBrandDropdown(!revealBrandDropdown);
    }
  };

  return (
    <>
      <div className="fixed top-0 min-h-screen font-serif z-50 w-screen">
        <div className="">
          <motion.div
            className="flex flex-col space-y-[30px] bg-[#fff] h-screen w-[100%] pt-6 px-6 text-[18px] text-[#000]"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "ease", stiffness: 60 }}
          >
            <div className="flex justify-end text-[14px]">
              <p
                onClick={() => setOpenDrawer(false)}
                className="border border-[#808080] flex items-center justify-center h-6 w-6 rounded-full"
              >
                x
              </p>
            </div>
            <div className="space-y-4">
              <div
                onClick={() => handleClick("home")}
                className="flex justify-between items-center"
              >
                <p>Home</p>
                <div
                  className={`transition-transform duration-300 ${
                    revealHomeDropdown ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <ArrowDown />
                </div>
              </div>
              {revealHomeDropdown && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <HomeDropdown />
                </motion.div>
              )}
            </div>
            <div className="space-y-4">
              <div
                onClick={() => handleClick("categories")}
                className="flex justify-between items-center"
              >
                <p>Categories</p>
                <div
                  className={`transition-transform duration-300 ${
                    revealCategoryDropdown ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <ArrowDown />
                </div>
              </div>
              {revealCategoryDropdown && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <CategoriesDropdown active={active} />
                </motion.div>
              )}
            </div>
            <div className="space-y-4">
              <div
                onClick={() => handleClick("brands")}
                className="flex justify-between items-center"
              >
                <p>Brands</p>
                <div
                  className={`transition-transform duration-300 ${
                    revealBrandDropdown ? "rotate-0" : "-rotate-90"
                  }`}
                >
                  <ArrowDown />
                </div>
              </div>
              {revealBrandDropdown && (
                <motion.div
                  variants={dropdownVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <BrandDropdown active={active} />
                </motion.div>
              )}
            </div>

            {active === "footwear" && <NavLink to="/shop">Shop</NavLink>}
            {active === "wristwatch" && (
              <NavLink to="/tmp-2/shop">Shop</NavLink>
            )}
            {active === "furniture" && <NavLink to="/tmp-3/shop">Shop</NavLink>}
            {active === "clothes" && <NavLink to="/tmp-4/shop">Shop</NavLink>}
            {active === "tech" && <NavLink to="/tmp-5/shop">Shop</NavLink>}
            {active === "sports" && <NavLink to="/tmp-6/shop">Shop</NavLink>}
            {active === "footwear" && <NavLink to="/cart">Cart</NavLink>}
            {active === "wristwatch" && (
              <NavLink to="/tmp-2/cart">Cart</NavLink>
            )}
            {active === "furniture" && <NavLink to="/tmp-3/cart">Cart</NavLink>}
            {active === "clothes" && <NavLink to="/tmp-4/cart">Cart</NavLink>}
            {active === "tech" && <NavLink to="/tmp-5/cart">Cart</NavLink>}
            {active === "sports" && <NavLink to="/tmp-6/cart">Cart</NavLink>}
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
            {active === "footwear" && (
              <NavLink to="/track-order">Track Delivery</NavLink>
            )}
            {active === "wristwatch" && (
              <NavLink to="/tmp-2/track-order">Track Delivery</NavLink>
            )}
            {active === "furniture" && (
              <NavLink to="/tmp-3/track-order">Track Delivery</NavLink>
            )}
            {active === "clothes" && (
              <NavLink to="/tmp-4/track-order">Track Delivery</NavLink>
            )}
            {active === "tech" && (
              <NavLink to="/tmp-5/track-order">Track Delivery</NavLink>
            )}
            {active === "sports" && (
              <NavLink to="/tmp-6/track-order">Track Delivery</NavLink>
            )}
            <NavLink to="/profile">Profile</NavLink>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Drawer;
