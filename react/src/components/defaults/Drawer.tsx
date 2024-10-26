import { motion } from "framer-motion";
import React, { FC, SetStateAction, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeDropdown from "../dropdowns/HomeDropdown";
import { ArrowDown } from "../svgs/extras";

interface DrawerProps {
  setOpenDrawer: React.Dispatch<SetStateAction<boolean>>;
}

const dropdownVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10, transition: { duration: 0.6 } },
};

const Drawer: FC<DrawerProps> = ({ setOpenDrawer }) => {
  //   const [revealCategoryDropdown, setRevealCategoryDropdown] =
  //     useState<boolean>(false);
  //   const [revealBrandDropdown, setRevealBrandDropdown] =
  //     useState<boolean>(false);
  const [revealHomeDropdown, setRevealHomeDropdown] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setRevealHomeDropdown(!revealHomeDropdown);
    setIsRotated(!isRotated);
  };

  return (
    <>
      <div className="fixed top-0 h-screen font-serif z-50 w-screen">
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
                className="border border-[#808080] flex items-center justify-center h-8 w-8 rounded-full"
              >
                X
              </p>
            </div>
            <div className="space-y-4">
              <div
                onClick={handleClick}
                className="flex justify-between items-center"
              >
                <p>Home</p>
                <div
                  className={`transition-transform duration-300 ${
                    isRotated ? "rotate-0" : "-rotate-90"
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
            <div className="flex justify-between items-center">
              <p>Categories</p>
              <div className="-rotate-90">
                <ArrowDown />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p>Brands</p>
              <div className="-rotate-90">
                <ArrowDown />
              </div>
            </div>
            <NavLink to="/contact">Contact Us</NavLink>
            <p>Track Delivery</p>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Drawer;