
import { CaretRight } from "../svgs/extras";

const FeaturedProducts = () => {
  return (
    <div className="bg-[#faf9f6] py-[10vh]">
      <h2 className="lg:text-[48px] text-[32px] text-[#194185] lg:text-center px-6 lg:px-0">
        Featured Products
      </h2>

      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col lg:space-x-4 mt-10">
        <div className="lg:pr-6 pr-3 bg-[#b2ddff] space-x-6 rounded-lg flex lg:w-[50%]">
          <img
            src="/assets/sports/st-six.png"
            className="lg:w-[391px] w-[190px] lg:h-[704px] h-[379px]"
            alt="img"
          />
          <div className="flex flex-col justify-between py-6">
            <h2 className="font-sans lg:text-[24px] text-[16px] font-semibold">
              Tennis Racket and ball
            </h2>
            <button className="flex items-center font-sans bg-[#039855] lg:w-[161px] font-semibold py-2 lg:px-3 px-2 lg:text-[14px] text-[12px] rounded-xl text-[#fff] space-x-3">
              <span>Shop Category</span> <CaretRight />
            </button>
          </div>
        </div>

        <div className="lg:w-[50%] flex flex-col lg:space-y-6 space-y-10 lg:mt-0 mt-10">
          <div className="lg:pl-6 pl-3 bg-[#b2ddff] flex justify-between rounded-lg">
            <div className="flex flex-col justify-between space-y-3 my-6">
              <h2 className="font-sans lg:text-[24px] font-semibold">
                Basketball and Jt 1s Sneakers
              </h2>
              <div className="">
                <button className="flex items-center font-sans bg-[#039855] font-semibold py-2 px-3 lg:text-[14px] text-[12px] rounded-xl text-[#fff] space-x-3">
                  <span>Shop Category</span> <CaretRight />
                </button>
              </div>
            </div>
            <img
              src="/assets/sports/st-seven.png"
              className="lg:w-[295px] w-[159px] lg:h-[340px] h-[183px]"
              alt="img"
            />
          </div>
          <div className="lg:pl-6 pl-3 bg-[#b2ddff] flex justify-between rounded-lg">
            <div className="flex flex-col justify-between space-y-3 my-6">
              <h2 className="font-sans lg:text-[24px] font-semibold">
                Boxing Equipments
              </h2>
              <div className="">
                <button className="flex items-center font-sans bg-[#039855] font-semibold py-2 px-3 lg:text-[14px] text-[12px] rounded-xl text-[#fff] space-x-3">
                  <span>Shop Category</span> <CaretRight />
                </button>
              </div>
            </div>
            <img
              src="/assets/sports/st-eight.png"
              className="lg:w-[295px] w-[159px] lg:h-[340px] h-[183px]"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
