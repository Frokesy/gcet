import React from "react";

const Categories = () => {
  return (
    <div className="mt-[15vh] pb-10 w-[90vw] mx-auto">
      <h2 className="lg:text-[48px] text-[24px] font-semibold text-center uppercase">
        Browse By category
      </h2>
      <div className="mt-6 flex flex-col space-y-4">
        <div className="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div className="lg:w-[43%] lg:h-[289px] h-[205px] rounded-2xl relative overflow-hidden">
            <img
              src="/assets/furniture/fur-four.png"
              alt="img"
              className="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p className="absolute top-0 p-6 text-[#fff] lg:text-[32px]">
              Living Room
            </p>
          </div>

          <div className="relative lg:w-[55%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-five.png"
              alt="img"
              className="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p className="absolute top-0 p-6 text-[#fff] lg:text-[32px]">
              Bedroom
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div className="relative lg:w-[55%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-six.png"
              alt="img"
              className="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p className="absolute top-0 p-6 text-[#fff] lg:text-[32px]">
              Commercial
            </p>
          </div>
          <div className="relative lg:w-[43%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-seven.png"
              alt="img"
              className="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p className="absolute top-0 p-6 text-[#fff] lg:text-[32px]">
              Kitchen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
