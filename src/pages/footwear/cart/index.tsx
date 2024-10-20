import { useState } from "react";
import Container from "../../../components/defaults/Container";
import OrderSummaryOne from "../../../components/footwear/cart/OrderSummaryOne";
import ShoppingCart from "../../../components/footwear/cart/ShoppingCart";
import { BackIcon } from "../../../components/svgs/extras";
import CheckoutDetails from "../../../components/footwear/cart/CheckoutDetails";
import OrderSummaryTwo from "../../../components/footwear/cart/OrderSummaryTwo";

const Cart = () => {
  const [activeTab, setActiveTab] = useState<string>("cart");

  return (
    <Container>
      <div className="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
        <div className="flex space-x-6 w-[90vw] mx-auto">
          <div className="flex items-center cursor-pointer space-x-2">
            <BackIcon />
            <p className="uppercase">Back</p>
          </div>
          <div className="flex space-x-1 lg:text-[14px] text-[12px]">
            <p className="underline">Home</p>
            <p>/</p>
            <p className="underline">Cart</p>
          </div>
        </div>
        <h2 className="lg:text-[40px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
          Your Cart
        </h2>

        <div className="flex lg:flex-row flex-col justify-between">
          <div className="lg:w-[60%]">
            <div className="lg:grid grid-cols-3 flex overflow-x-auto gap-6 mt-6 px-6 lg:px-0">
              <div
                onClick={() => setActiveTab("cart")}
                className="flex items-center space-x-3 border-b-2 border-[#333] cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold"
              >
                <p className="w-[38px] h-[38px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full">
                  1
                </p>
                <p>Cart</p>
              </div>
              <div
                onClick={() => setActiveTab("checkout")}
                className="flex items-center space-x-3 pb-3 font-semibold cursor-pointer flex-shrink-0 w-[256px]"
              >
                <p className="w-[38px] h-[38px] bg-[#808080] text-[#fff] flex justify-center items-center rounded-full">
                  2
                </p>
                <p className="text-[#808080]">Checkout Details</p>
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
          </div>

          {activeTab === "cart" && <OrderSummaryOne />}
          {activeTab === "checkout" && <OrderSummaryTwo />}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
