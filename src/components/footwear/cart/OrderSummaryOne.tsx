import { FC } from "react";
import { CheckoutIcon, CouponIcon, Naira } from "../../svgs/extras";

interface SummaryProps {
  themeColor: string;
}

const OrderSummaryOne: FC<SummaryProps> = ({ themeColor }) => {
  return (
    <div className="lg:w-[30%] border border-[#ccc] lg:rounded-2xl p-6">
      <h2 className="text-[24px] font-semibold">Order Summary</h2>

      <div className="flex flex-col space-y-6 mt-6">
        <div className="flex justify-between p-3 rounded-lg border border-[#333]">
          <h2>Subtotal</h2>
          <p className="flex items-center font-semibold space-x-2 text-[14px]">
            <Naira />
            80,000.00
          </p>
        </div>
        <div className="flex justify-between p-3 rounded-lg border border-[#333]">
          <div className="flex items-center space-x-3">
            <input
              type="radio"
              defaultChecked
              name="deliveryFee"
              id="deliveryFee"
            />
            <h2>Subtotal</h2>
          </div>
          <p className="flex items-center font-semibold space-x-2 text-[14px]">
            <Naira />
            5,000.00
          </p>
        </div>
        <div className="flex justify-between p-3 rounded-lg border border-[#333]">
          <div className="flex items-center space-x-3">
            <input type="radio" name="pickup" id="pickup" />
            <h2>Pickup</h2>
          </div>
          <p className="flex items-center font-semibold space-x-2 text-[14px]">
            <Naira />
            5,000.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <h2>Total</h2>
          <p className="flex items-center font-semibold space-x-2 text-[14px]">
            <Naira />
            100,000.00
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="w-[65%] bg-[#ccc] flex items-center p-3 space-x-3 rounded-lg">
            <CouponIcon />
            <input
              type="text"
              placeholder="Add promo code"
              className="border-none outline-none bg-inherit w-[100%]"
            />
          </div>
          <div className={`cursor-pointer w-[30%] text-[14px] bg-[${themeColor}] text-center text-[#fff] p-2 rounded-lg`}>
            Apply Coupon
          </div>
        </div>

        <button className={`lg:py-6 py-4 w-[100%] bg-[${themeColor}] text-[#fff] space-x-3 flex items-center rounded-lg justify-center font-semibold`}>
          <p>Proceed to Checkout</p>
          <CheckoutIcon />
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryOne;
