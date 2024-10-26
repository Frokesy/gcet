import React from "react";
import Five from "../stars/Five";
import FourandHalf from "../stars/FourandHalf";
import ThreeandHalf from "../stars/ThreeandHalf";
import { Naira } from "../svgs/extras";

const NewArrivals = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/clothes/cl-four.png",
      name: "T-shirt with Tape Details",
      rating: 5,
      ratingIcon: <Five />,
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/clothes/cl-five.png",
      name: "Skinny Fit Jeans",
      rating: 3.5,
      ratingIcon: <ThreeandHalf />,
      price: "200,000.00",
      discount: "-20%",
    },
    {
      id: 3,
      productImg: "/assets/clothes/cl-six.png",
      name: "Checkered Shirt",
      rating: 4.5,
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/clothes/cl-seven.png",
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
  ];
  return (
    <div className="py-[10vh] bg-[#f7f7f7]">
      <h2 className="lg:text-[48px] text-[32px] uppercase font-semibold text-center">
        New Arrivals
      </h2>

      <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-[10vh] space-x-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col space-y-1 w-[295px]"
          >
            <img
              src={item.productImg}
              alt={item.name}
              className="w-[295px] h-[300px]"
            />
            <h2 className="font-semibold pt-3 text-[20px]">{item.name}</h2>
            <div className="flex items-center space-x-3 text-[14px] text-[#808080] font-semibold">
              {item.ratingIcon}
              <p>{item.rating}/5</p>
            </div>
            <div className="flex items-center space-x-10">
              <p className="flex items-center text-[20px] font-semibold">
                <Naira /> {item.price}
              </p>
              {item.discount && (
                <p className="bg-[#f8e4e4] text-[#ff3333] text-[13px] py-1 px-4 rounded-full">
                  {item.discount}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#553a32] font-semibold lg:w-[15%] w-[50%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
          View all
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
