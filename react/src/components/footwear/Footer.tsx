
import { Facebook, Instagram, Youtube } from "../svgs/extras";
import {
  AmericanExpressCard,
  ApplePay,
  MasterCard,
  PayPalCard,
  StripeCard,
  VisaCard,
} from "../svgs/footerIcons";

const Footer = () => {
  return (
    <div className="lg:bg-[#000] text-[#fff] lg:mt-[25vh] mt-14">
      <div className="lg:w-[90vw] mx-auto relative">
        <div className="flex lg:flex-row flex-col lg:px-10 px-6 lg:w-[90vw] rounded-2xl shadow-2xl bg-[#fff] text-[#000] py-10 lg:absolute justify-between -top-[15vh]">
          <div className="">
            <h2 className="lg:text-[40px] text-[24px] uppercase font-semibold">
              Join our newsletter
            </h2>
            <p className="lg:text-[16px] text-[15px]">Stay upto date about our latest offers</p>
          </div>
          <div className="flex flex-col lg:items-center lg:mt-0 mt-10 space-y-4">
            <div className="border border-[#808080] rounded-xl lg:w-[360px] w-[100%] py-2 px-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-inherit outline-none border-none"
              />
            </div>
            <button className="bg-[#000] text-[#fff] uppercase w-[100%] py-3 px-4 rounded-xl">
              Subscribe to newsletter
            </button>
          </div>
        </div>

        <div className="lg:border-b border-[#808080] lg:my-14"></div>

        <div className="flex lg:flex-row flex-col bg-[#000] lg:mt-[20vh] py-10 lg:pt-0 lg:mb-[10vh] justify-between px-6">
          <div>
            <div className="flex items-center lg:space-x-3 space-x-2">
              <img
                src="/assets/logo.png"
                alt="logo"
                className="lg:w-[48px] lg:h-[48px] w-[36px] h-[36px]"
              />
              <h2 className="lg:text-[20px] text-[15px] font-semibold">
                Ecommerce
              </h2>
            </div>
            <p className="lg:w-[465px] font-light mt-4">
              With SIKO PIECES, shop for your type of time piece, be it the
              casual, sporty or luxurious piece. SIKO is here for you!
            </p>

            <div className="flex items-center space-x-4 mt-6">
              <Instagram />
              <Facebook />
              <Youtube />
            </div>
          </div>

          <div className="">
            <div className="lg:flex lg:flex-row grid grid-cols-2 lg:space-x-[8vw] justify-between lg:space-y-0 gap-10 lg:mt-0 mt-10">
              <div className="space-y-4 flex flex-col">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">
                  Page
                </h2>
                <p className="lg:text-[15px] text-[14px]">Home</p>
                <p className="lg:text-[15px] text-[14px]">Shop</p>
                <p className="lg:text-[15px] text-[14px]">Product</p>
                <p className="lg:text-[15px] text-[14px]">Articles</p>
                <p className="lg:text-[15px] text-[14px]">Contact Us</p>
              </div>
              <div className="space-y-4 flex flex-col">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">
                  Info
                </h2>
                <p className="lg:text-[15px] text-[14px]">Shipping Policy</p>
                <p className="lg:text-[15px] text-[14px]">Return & Refund</p>
                <p className="lg:text-[15px] text-[14px]">Support</p>
                <p className="lg:text-[15px] text-[14px]">FAQs</p>
              </div>
              <div className="space-y-4 flex flex-col">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">
                  Office
                </h2>
                <p className="lg:text-[15px] text-[14px]">
                  43111 Hai Trieu street
                </p>
                <p className="lg:text-[15px] text-[14px]">District !, HCMC</p>
                <p className="lg:text-[15px] text-[14px]">Vietname</p>
                <p className="lg:text-[15px] text-[14px] mt-3">84-756-3237</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="py-14 px-6 flex lg:flex-row flex-col lg:justify-between bg-[#000] lg:items-center">
          <div className="mt-6 lg:space-x-10 flex lg:flex-row flex-col lg:text-[15px] text-[14px]">
            <p className="border-r-2 pr-4 border-[#ccc]">
              © 2024 goat CLOUDS tech. All rights reserved.
            </p>

            <p className="text-[#6C7275] pt-4 lg:pt-0">Privacy Policy</p>
            <p className="text-[#6C7275] pt-1 lg:pt-0">Terms & Conditions</p>
          </div>
          <div className="flex items-center space-x-4 pt-10 lg:pt-0">
            <VisaCard />
            <AmericanExpressCard />
            <MasterCard />
            <StripeCard />
            <PayPalCard />
            <ApplePay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
