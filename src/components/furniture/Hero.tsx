const Hero = () => {
  return (
    <div className="bg-[#63ead1] pt-[20vh]">
      <div className="w-[90vw] bg-[#1ebda4] mx-auto relative lg:pt-[15vh]">
        <div className="lg:absolute flex flex-col items-center justify-center pb-20 lg:pb-0 w-[100%] lg:-mt-6">
          <h2 className="lg:text-[24px] font-bold text-center pt-[15vh]">
            Funture
          </h2>
          <h2 className="lg:text-[72px] text-[40px] font-semibold text-center text-[#fff]">
            Customize your own <span className="lg:hidden inline">space.</span>
          </h2>
        </div>
        <div className="lg:hidden">
            <img src="/assets/furniture/fur-three.png" alt="img" />
        </div>
        <div className="lg:flex hidden items-center">
          <div className="w-[41%]">
            <img
              src="/assets/furniture/fur-one.png"
              alt="img"
              className="w-[100%]"
            />
          </div>
          <div className="w-[18%] mt-[15vh]">
            <h2 className="text-[72px] font-semibold text-center text-[#fff]">
              Space.
            </h2>
          </div>
          <div className="w-[41%]">
            <img
              src="/assets/furniture/fur-two.png"
              alt="img"
              className="w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
