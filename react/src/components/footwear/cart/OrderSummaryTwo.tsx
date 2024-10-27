import { FC, useEffect, useState } from "react";
import { ItemProps } from "../../../pages/footwear/cart";
import { CouponIcon, Naira } from "../../svgs/extras";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../../utils/idbService";

interface SummaryTwoProps {
  items: ItemProps[];
  total: number;
}

const OrderSummaryTwo: FC<SummaryTwoProps> = ({
  items: initialItems,
  total: totalCost,
}) => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [total, setTotal] = useState<number>(totalCost);


  const incrementItem = async (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    const item = items.find((item) => item.id === id);
    if (item) {
      await updateItemQuantity(id, item.quantity + 1);
    }
  };

  const decrementItem = async (id: number) => {
    const newItems = items
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setItems(newItems);

    const item = newItems.find((item) => item.id === id);
    if (item) {
      await updateItemQuantity(id, item.quantity);
    }
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    removeItemFromCart(id);
  };

  useEffect(() => {
    if (initialItems.length > 0) {
      setItems(initialItems);
    }
  }, [initialItems]);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = items.reduce(
        (acc, item) => acc + item.quantity * parseInt(item.price),
        0
      );
      setTotal(newTotal);
    };
    calculateTotal();
  }, [items]);

  return (
    <div className="lg:w-[30%] w-[90%] mx-auto lg:mx-0 mt-10 border border-[#ccc] rounded-2xl bg-[#f9fafb] p-6">
      <h2 className="text-[24px] font-semibold">Order Summary</h2>

      <div className="flex flex-col space-y-10 mt-10">
        {items.map((item) => (
          <div
            className="flex justify-between border-b-2 border-[#ccc] pb-4"
            key={item.id}
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.productImg}
                alt={item.name}
                className="w-[80px] h-[57px] object-cover"
              />
              <div className="flex flex-col space-y-3">
                <h2 className="lg:text-[16px] text-[12px]">{item.name}</h2>
                <p className="lg:text-[16px] text-[12px]">Color: white</p>
                <div className="flex items-center space-x-4">
                  <p
                    onClick={() => decrementItem(item.id)}
                    className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full cursor-pointer flex justify-center items-center bg-[#000] text-[#fff]"
                  >
                    -
                  </p>
                  <p className="lg:text-[16px] text-[12px]">{item.quantity}</p>
                  <p
                    onClick={() => incrementItem(item.id)}
                    className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full cursor-pointer flex justify-center items-center bg-[#000] text-[#fff]"
                  >
                    +
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col flex-col-reverse justify-between items-end">
              <p onClick={() => removeItem(item.id)} className="cursor-pointer">
                x
              </p>
              <p className="flex items-center font-semibold space-x-2 text-[14px]">
                <Naira />
                {parseInt(item.price) * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="border-b-2 mt-6 border-[#ccc] py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <CouponIcon />
          <p>Promo discount</p>
        </div>
        <p className="text-[#912018]">Not available</p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
        <p>Delivery Fee</p>
        <p className="font-semibold">Free</p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
        <p>Subtotal</p>
        <p className="font-semibold flex items-center">
          <Naira /> {total}
        </p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center text-[20px]">
        <p>Total</p>
        <p className="font-semibold flex items-center">
          <Naira /> {total + 5000}
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryTwo;
