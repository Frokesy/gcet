import { useState } from "react";
import Container from "../../../components/defaults/Container";
import OrderSummaryOne from "../../../components/footwear/cart/OrderSummaryOne";
import ShoppingCart from "../../../components/footwear/cart/ShoppingCart";
import { BackIcon, GreenTick } from "../../../components/svgs/extras";
import CheckoutDetails from "../../../components/footwear/cart/CheckoutDetails";
import OrderSummaryTwo from "../../../components/footwear/cart/OrderSummaryTwo";
import OrderComplete from "../../../components/footwear/cart/OrderComplete";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const [activeTab, setActiveTab] = useState<string>("cart");

  return (
    <Container>
      <div className="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
        <div className="flex space-x-6 w-[90vw] mx-auto">
          <NavLink
            to="/"
            className="flex items-center cursor-pointer space-x-2"
          >
            <BackIcon />
            <p className="uppercase">Back</p>
          </NavLink>
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
                  activeTab === "order-complete" &&
                  "border-b-4 border-[#039855]"
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
                    activeTab === "order-complete" &&
                    "text-[#000] font-semibold"
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

            {activeTab === "cart" && <ShoppingCart />}
            {activeTab === "checkout" && <CheckoutDetails />}
            {activeTab === "order-complete" && <OrderComplete />}
          </div>

          {activeTab === "cart" && <OrderSummaryOne />}
          {activeTab === "checkout" && <OrderSummaryTwo />}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
