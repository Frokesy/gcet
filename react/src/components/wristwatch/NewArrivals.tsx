import React from "react";
import { Naira } from "../svgs/extras";

const NewArrivals = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/wristwatch/wt-four.png",
      name: "Richard Mille E4",
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/wristwatch/wt-five.png",
      name: "Patek Phillippe T50",
      price: "200,000.00",
    },
    {
      id: 3,
      productImg: "/assets/wristwatch/wt-six.png",
      name: "Tag Heuer",
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/wristwatch/wt-seven.png",
      name: "Casio Watch 5-8",
      price: "200,000.00",
    },
    {
      id: 5,
      productImg: "/assets/wristwatch/wt-eight.jpeg",
      name: "Wrist Watch",
      price: "200,000.00",
    },
  ];
  return (
    <div className="py-[10vh]">
      <h2 className="lg:text-[48px] text-[32px] font-semibold text-center">New Arrivals</h2>

      <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-[10vh] space-x-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col space-y-1 lg:w-[295px] w-[146px]"
          >
            <img
              src={item.productImg}
              alt={item.name}
              className="lg:w-[295px] w-[146px] lg:h-[300px] h-[148px]"
            />
            <h2 className="font-sans pt-3 lg:text-[20px] text-[12px]">{item.name}</h2>

            <p className="flex items-center lg:text-[15px] text-[10px] font-sans font-semibold">
              <Naira /> {item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#ff4405] font-semibold lg:w-[15%] w-[50%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
          View all
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
