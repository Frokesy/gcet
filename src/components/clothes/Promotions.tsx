import { PromotionIcon } from "../svgs/extras"

const Promotions = () => {
  return (
    <div className="bg-[#f7f7f7] py-[10vh]">
      <div className="w-[90vw] mx-auto flex">
        <div className="lg:w-[55%] bg-[#f0f0f0] lg:px-10 px-6 lg:py-20 py-10">
            <PromotionIcon />
            <p className="text-[#771A0D] font-bold uppercase lg:text-[16px] text-[12px] font-sans py-6">Promotion</p>
            <h2 className="lg:text-[40px] text-[24px] font-semibold pb-2">Hurry up! 15% OFF</h2>
            <p className="lg:text-[20px] text-[#333] font-sans">Thousands of high tech are waiting for you.</p>
            <p className="py-6 lg:text-[16px] text-[12px]">Offer expires in soon</p>
            <button className="bg-[#fff] py-2 px-6 rounded-xl font-semibold text-[#333] font-sans">Shop Now</button>
        </div>
        <div className="w-[45%] lg:block hidden">
            <img src="/assets/clothes/cl-two.png" className="w-[541px] h-[532px] object-cover" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Promotions
