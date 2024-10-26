import { NavLink } from "react-router-dom";
import { Naira } from "../../svgs/extras";
import { ItemProps } from "../../../pages/footwear/cart";
import { FC } from "react";


interface OrderCompleteProps {
  items: ItemProps[];
}

const OrderComplete: FC<OrderCompleteProps> = ({ items }) => {
  
  return (
    <div className="lg:w-[50%] w-[90%] mx-auto border border-[#ccc] rounded-xl mt-20 bg-[#fff] shadow-xl text-center flex flex-col items-center justify-center py-10">
      <h2 className="text-[#808080]">Thank You!</h2>
      <p className="lg:text-[40px] text-[24px] w-[70%] pb-4">
        Order created and delivery in progress
      </p>

      <div className="mt-6 grid lg:flex flex-row items-center space-x-10 grid-cols-2 place-items-center lg:gap-10 gap-16">
        {items.map((item) => (
          <div className="w-[96px] h-[112px] relative" key={item.id}>
            <p className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#000] text-[#fff] text-[14px] rounded-full">
              1
            </p>
            <img
              src={item.productImg}
              alt="img"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col space-y-3">
        <div className="flex w-[100%] justify-between mt-10 items-center">
          <h2 className="text-[#6C7275] text-[14px]">Total:</h2>
          <p className="flex items-center font-semibold text-[15px]">
            <Naira /> 325,000.00
          </p>
        </div>
        <div className="flex w-[100%] justify-between mt-10 items-center">
          <h2 className="text-[#6C7275] text-[14px]">Payment method:</h2>
          <p className="font-semibold text-[15px]">Credit Card</p>
        </div>
        <div className="flex w-[100%] justify-between mt-10 items-center">
          <h2 className="text-[#6C7275] text-[14px]">Recipient&apos;s name:</h2>
          <p className="font-semibold text-[15px]">John Doe</p>
        </div>
        <div className="flex w-[100%] justify-between mt-10 items-center">
          <h2 className="text-[#6C7275] text-[14px]">Date:</h2>
          <p className="font-semibold text-[15px]">October 19, 2023</p>
        </div>
        <div className="flex w-[100%] justify-between lg:space-x-16 space-x-10 mt-10 items-center">
          <h2 className="text-[#6C7275] text-[14px]">Transaction ID:</h2>
          <p className="font-semibold text-[15px]">SH67696959-TY</p>
        </div>
      </div>

      <div className="flex justify-between lg:space-x-16 space-x-10 mt-10">
        <button className="text-[#fff] bg-[#000] py-2 px-4 font-semibold text-[14px] rounded-lg">
          View transaction
        </button>
        <NavLink to="/track-order">
          <button className="text-[#fff] bg-[#000] py-2 px-4 font-semibold text-[14px] rounded-lg">
            Delivery progress
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default OrderComplete;
