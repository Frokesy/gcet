import { FC, useState, useEffect, useCallback } from "react";
import { ItemProps } from "../../../pages/footwear/cart";
import { Bin, EmptyCart, Naira } from "../../svgs/extras";
import {
  removeItemFromCart,
  updateItemQuantity,
} from "../../../../utils/idbService";

interface ShoppingCartProps {
  items: ItemProps[];
  onUpdateTotal: (total: number) => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({
  items: initialItems,
  onUpdateTotal,
}) => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [loading, setLoading] = useState(true);

  const calculateTotal = useCallback(() => {
    const total = items.reduce(
      (acc, item) => acc + parseInt(item.price) * item.quantity,
      0
    );
    onUpdateTotal(total);
  }, [items, onUpdateTotal]);

  useEffect(() => {
    if (initialItems.length > 0) {
      setItems(initialItems);
    }
    setLoading(false);
  }, [initialItems]);

  useEffect(() => {
    if (!loading) calculateTotal();
  }, [items, loading, calculateTotal]);

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

  if (loading) {
    return <h2>Loading Cart Items...</h2>;
  }

  return (
    <div className="flex flex-col space-y-10 mt-10">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            className="flex justify-between border-b-2 border-[#ccc] pb-4 px-6"
            key={item.id}
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.productImg}
                alt={item.name}
                className="lg:w-[160px] w-[80px] lg:h-[115px] h-[57px] object-cover"
              />
              <div className="flex flex-col space-y-3">
                <h2 className="lg:text-[16px] text-[12px]">{item.name}</h2>
                <p className="lg:text-[16px] text-[12px]">Color: white</p>
                <div className="flex items-center space-x-4">
                  <p
                    className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                    onClick={() => decrementItem(item.id)}
                  >
                    -
                  </p>
                  <p className="lg:text-[16px] text-[12px]">{item.quantity}</p>
                  <p
                    className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                    onClick={() => incrementItem(item.id)}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col flex-col-reverse justify-between items-end">
              <div
                onClick={() => removeItem(item.id)}
                className="cursor-pointer"
              >
                <Bin />
              </div>
              <p className="flex items-center font-semibold space-x-2 text-[14px]">
                <Naira />
                {parseInt(item.price) * item.quantity}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col items-center justify-center space-y-4 mt-6">
          <EmptyCart />
          <p className="text-center text-lg font-serif">Your Cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
