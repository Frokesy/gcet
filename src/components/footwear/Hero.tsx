const Hero = () => {
  return (
    <div className="lg:py-[10vh] w-[90vw] mx-auto pt-2 pb-10 flex lg:flex-row flex-col-reverse justify-between items-center">
      <div className="lg:w-[45%]">
        <h2 className="font-bold lg:text-[64px] text-[32px] uppercase">
          Shop quality <br /> footwears.
        </h2>
        <p className="text-[#808080] lg:mt-10 mt-2">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <div className="flex lg:justify-start justify-center">
          <button className="bg-[#000] lg:w-[40%] w-[70%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
      <div className="lg:w-[50%] flex lg:justify-end mt-10 lg:mt-0">
        <img src="/assets/footwear/ft-one.png" alt="footwear-one" />
      </div>
    </div>
  );
};

export default Hero;
