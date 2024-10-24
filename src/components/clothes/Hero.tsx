const Hero = () => {
  return (
    <div className="bg-[#f7f7f7] pt-[20vh] pb-10">
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col-reverse justify-between">
        <div className="lg:w-[35%] space-y-4">
          <h2 className="lg:text-[50px] text-[32px] mt-10 lg:mt-0 font-semibold uppercase">
            Take your dress sense to a new level
          </h2>
          <p className="lg:text-[18px] text-[14px] text-[#404040] pb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-[#553a32] text-[#fff] py-3 rounded-lg w-[40%] lg:text-[16px] text-[14px] font-semibold">Shop Now</button>
        </div>
        <div className="lg:w-[60%] flex space-x-4 lg:justify-end lg:items-end bg-[#fff] rounded-[50px]">
            <img src="/assets/clothes/cl-one.png" alt="img" className="lg:h-[256px] lg:w-[30%] w-[100%] h-[432px]" />
            <img src="/assets/clothes/cl-two.png" alt="img" className="h-[384px] w-[30%] lg:block hidden" />
            <img src="/assets/clothes/cl-three.png" alt="img" className="h-[536px] w-[40%] lg:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
