import React from "react";

const Hero = () => {
  return (
    <div className="lg:pt-[15vh] pt-20 pb-10 w-[90vw] mx-auto lg:block flex flex-col-reverse">
      <div className="flex lg:flex-row flex-col justify-between lg:items-center">
        <h2 className="text-[#194185] lg:text-[64px] text-[28px] pt-6 lg:pt-0 font-semibold lg:w-[70%]">
          Get your favorite sports <br /> wears and equipment
        </h2>
        <div className="lg:w-[30%] pt-6 lg:pt-0 space-y-6">
          <p className="lg:text-[19px] text-[14px] text-[#161C2D]">
            With SIKO PIECES, shop for your type of time piece, be it the
            casual, sporty or luxurious piece. SIKO is here for you!
          </p>
          <button className="bg-[#039855] text-[#fff] py-3 rounded-lg lg:w-[40%] w-[100%] lg:text-[16px] text-[14px] font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-[100%] mt-10">
        <img src="/assets/sports/st-one.png" alt="img" className="w-[100%]" />
      </div>
    </div>
  );
};

export default Hero;
