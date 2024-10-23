import { FiveBlackStars, Naira } from "../svgs/extras";

const Categories = () => {
  return (
    <div className="bg-gradient-to-r from-[#3e4784] to-[#0e101e] text-[#fff]">
      <div className="w-[90vw] mx-auto py-10">
        <div className="flex justify-between">
          <h2 className="lg:text-[40px] text-[24px] font-semibold">Featured Categories</h2>
          <button className="bg-[#606baf] p-2 rounded-xl text-[#fff] text-[14px] font-semibold lg:hidden">
              Phones
            </button>
          <div className="lg:flex hidden items-center space-x-10 font-bold">
            <button className="bg-[#606baf] p-2 rounded-xl text-[#fff]">
              Phones
            </button>
            <button className="border border-[#727684] p-2 rounded-xl text-[#98A2B3]">
              Laptops
            </button>
            <button className="border border-[#727684] p-2 rounded-xl text-[#98A2B3]">
              Monitors
            </button>
            <button className="border border-[#727684] p-2 rounded-xl text-[#98A2B3]">
              Tablets
            </button>
            <button className="border border-[#727684] p-2 rounded-xl text-[#98A2B3]">
              Headphones
            </button>
            <button className="border border-[#727684] p-2 rounded-xl text-[#98A2B3]">
              See All
            </button>
          </div>
        </div>

        <div className="my-10 flex lg:flex-row flex-col justify-between lg:space-x-6">
          <div className="lg:w-[50%] space-y-6">
            <div className="lg:py-16 py-12 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex items-center lg:space-x-10 lg:justify-normal justify-between">
              <img
                src="/assets/tech/th-two.png"
                alt="img"
                className="lg:w-[274px] w-[157px] lg:h-[354px] h-[204px]"
              />
              <div className="space-y-2">
                <FiveBlackStars />
                <h2 className="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p className="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
            <div className="lg:py-8 py-6 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex items-center lg:space-x-10 lg:justify-normal justify-between">
              <img
                src="/assets/tech/th-six.png"
                alt="img"
                className="lg:w-[202px] w-[116px] lg:h-[258px] h-[148px]"
              />
              <div className="space-y-2">
                <FiveBlackStars />
                <h2 className="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p className="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-[50%] space-y-6 pt-6 lg:pt-0">
            <div className="lg:py-8 py-6 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex flex-row-reverse justify-between items-center lg:space-x-10">
              <img
                src="/assets/tech/th-six.png"
                alt="img"
                className="lg:w-[202px] w-[102px] lg:h-[258px] h-[130px]"
              />
              <div className="space-y-2">
                <FiveBlackStars />
                <h2 className="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p className="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>

            <div className="lg:py-16 py-12 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex flex-row-reverse justify-between items-center lg:space-x-10">
              <img
                src="/assets/tech/th-two.png"
                alt="img"
                className="lg:w-[274px] w-[138px] lg:h-[354px] h-[179px]"
              />
              <div className="space-y-2">
                <FiveBlackStars />
                <h2 className="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p className="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
