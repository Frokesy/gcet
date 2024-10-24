import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { BackIcon, GreenTick } from "../svgs/extras";
import ShoppingCart from "../footwear/cart/ShoppingCart";
import CheckoutDetails from "../footwear/cart/CheckoutDetails";
import OrderComplete from "../footwear/cart/OrderComplete";
import OrderSummaryOne from "../footwear/cart/OrderSummaryOne";
import OrderSummaryTwo from "../footwear/cart/OrderSummaryTwo";
import { ItemProps } from "../../pages/footwear/cart";

interface CartTemplateProps {
  items: ItemProps[];
  active: string;
  themeColor: string;
}

const CartTemplate: FC<CartTemplateProps> = ({ items, active, themeColor }) => {
  const [activeTab, setActiveTab] = useState<string>("cart");

  return (
    <div className="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
      <div className="flex space-x-6 w-[90vw] mx-auto">
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
        <div className="flex space-x-1 lg:text-[14px] text-[12px]">
          <p className="underline">Home</p>
          <p>/</p>
          <p className="underline">Cart</p>
          {activeTab !== "cart" && <p>/</p>}
          {activeTab !== "cart" && <p className="underline">Checkout</p>}
        </div>
      </div>
      <h2 className="lg:text-[40px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
        {activeTab === "order-complete" ? "Order" : "Your Cart"}
      </h2>

      <div
        className={` flex lg:flex-row flex-col ${
          activeTab !== "order-complete" && "justify-between"
        }`}
      >
        <div
          className={`${
            activeTab !== "order-complete"
              ? "lg:w-[60%]"
              : "lg:w-[100%] lg:mx-auto"
          }`}
        >
          <div className="lg:grid grid-cols-3 flex overflow-x-auto gap-6 mt-6 px-6 lg:px-0">
            <div
              onClick={() => setActiveTab("cart")}
              className={`flex items-center space-x-3 ${
                activeTab !== "cart"
                  ? "border-b-4 border-[#039855]"
                  : "border-b-2 border-[#333]"
              } cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold`}
            >
              {activeTab !== "cart" ? (
                <GreenTick />
              ) : (
                <p className="w-[35px] h-[35px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full">
                  1
                </p>
              )}
              <p>Shopping Cart</p>
            </div>
            <div
              onClick={() => setActiveTab("checkout")}
              className={`flex items-center space-x-3 ${
                activeTab === "checkout" && "border-b-2 border-[#333]"
              } ${
                activeTab === "order-complete" && "border-b-4 border-[#039855]"
              } cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold`}
            >
              {activeTab === "order-complete" ? (
                <GreenTick />
              ) : (
                <p
                  className={`w-[38px] h-[38px] ${
                    activeTab === "checkout" ? "bg-[#000]" : "bg-[#808080]"
                  } text-[#fff] flex justify-center items-center rounded-full`}
                >
                  2
                </p>
              )}
              <p
                className={`${activeTab === "checkout" && "text-[#000]"} ${
                  activeTab === "order-complete" && "text-[#000] font-semibold"
                } text-[#808080]`}
              >
                Checkout Details
              </p>
            </div>
            <div
              onClick={() => setActiveTab("order-complete")}
              className="flex items-center space-x-3 pb-3 cursor-pointer font-semibold flex-shrink-0 w-[256px]"
            >
              <p className="w-[38px] h-[38px] bg-[#808080] text-[#fff] flex justify-center items-center rounded-full">
                3
              </p>
              <p className="text-[#808080]">Order complete</p>
            </div>
          </div>

          {activeTab === "cart" && <ShoppingCart items={items} />}
          {activeTab === "checkout" && <CheckoutDetails />}
          {activeTab === "order-complete" && <OrderComplete items={items} />}
        </div>

        {activeTab === "cart" && <OrderSummaryOne themeColor={themeColor} />}
        {activeTab === "checkout" && <OrderSummaryTwo items={items} />}
      </div>
    </div>
  );
};

export default CartTemplate;
