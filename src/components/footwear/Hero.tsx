const Hero = () => {
  return (
    <div className="py-[10vh] flex justify-between items-center">
      <div className="w-[45%]">
        <h2 className="font-bold text-[64px] uppercase">
          Shop quality <br /> footwears.
        </h2>
        <p className="text-[#808080] mt-10">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="w-[40%] bg-[#000] text-[#fff] mt-6 py-2 rounded-lg">Shop Now</button>
      </div>
      <div className="w-[50%] flex justify-end">
        <img src="/assets/footwear/ft-one.png" alt="footwear-one" />
      </div>
    </div>
  );
};

export default Hero;
