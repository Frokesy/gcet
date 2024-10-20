import { CreditCardIcon } from "../../svgs/extras";

const CheckoutDetails = () => {
  return (
    <div className="mt-10 px-6 lg:px-0">
      <h2 className="text-[24px] font-semibold">Checkout Details</h2>

      <div className="mt-10 flex flex-col space-y-6">
        <h2 className="text-[20px]">Contact Information</h2>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2 w-[45%]">
            <label
              htmlFor="firstname"
              className="uppercase font-semibold text-[12px]"
            >
              First name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
            />
          </div>
          <div className="flex flex-col space-y-2 w-[45%]">
            <label
              htmlFor="lastname"
              className="uppercase font-semibold text-[12px]"
            >
              Last name
            </label>
            <input
              type="text"
              placeholder="Last name"
              className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2 w-[100%]">
          <label
            htmlFor="phone"
            className="uppercase font-semibold text-[12px]"
          >
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Phone number"
            className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-2 w-[100%]">
          <label
            htmlFor="email"
            className="uppercase font-semibold text-[12px]"
          >
            Email Address
          </label>
          <input
            type="email"
            placeholder="your email"
            className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-2 w-[100%]">
          <label
            htmlFor="country"
            className="uppercase font-semibold text-[12px]"
          >
            Country *
          </label>
          <input
            type="text"
            placeholder="Country"
            className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-2 w-[100%]">
          <label
            htmlFor="street address"
            className="uppercase font-semibold text-[12px]"
          >
            Street Address *
          </label>
          <input
            type="text"
            placeholder="Street Address"
            className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div className="flex flex-col space-y-2 w-[100%]">
          <label
            htmlFor="town/city"
            className="uppercase font-semibold text-[12px]"
          >
            Town / City *
          </label>
          <input
            type="text"
            placeholder="Town / City"
            className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col space-y-2 w-[45%]">
            <label
              htmlFor="state"
              className="uppercase font-semibold text-[12px]"
            >
              State
            </label>
            <input
              type="text"
              placeholder="state"
              className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
            />
          </div>
          <div className="flex flex-col space-y-2 w-[45%]">
            <label
              htmlFor="zip code"
              className="uppercase font-semibold text-[12px]"
            >
              Zip Code
            </label>
            <input
              type="number"
              placeholder="Zip Code"
              className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <input type="checkbox" name="saveAddress" id="saveAddress" />
          <p className="uppercase text-[12px] font-semibold text-[#808080]">
            save this address
          </p>
        </div>

        <div className="bg-[#f9fafb] border border-[#808080] py-10 px-6 rounded-lg flex flex-col space-y-6">
          <h2 className="text-[20px] font-semibold">Payment Method</h2>
          <div className="flex justify-between py-3 px-6 bg-[#fff] border border-[#808080] rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="radio" name="creditCard" id="creditCard" />
              <label
                htmlFor="creditCard"
                className="text-[12px] font-semibold uppercase"
              >
                Pay by credit card
              </label>
            </div>
            <CreditCardIcon />
          </div>
          <div className="flex items-center space-x-3 bg-[#fff] border border-[#808080] py-3 px-6 rounded-lg">
            <input type="radio" name="paypal" id="paypal" />
            <label
              htmlFor="paypal"
              className="text-[12px] font-semibold uppercase"
            >
              PayPal
            </label>
          </div>
          <hr />
          <div className="flex flex-col space-y-2 w-[100%]">
            <label
              htmlFor="card number"
              className="uppercase font-semibold text-[12px]"
            >
              Card Number
            </label>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
              className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-2 w-[45%]">
              <label
                htmlFor="expiration date"
                className="uppercase font-semibold text-[12px]"
              >
                Expiration Date
              </label>
              <input
                type="number"
                placeholder="MM/YY"
                className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
              />
            </div>
            <div className="flex flex-col space-y-2 w-[45%]">
              <label
                htmlFor="cvc"
                className="uppercase font-semibold text-[12px]"
              >
                cvc
              </label>
              <input
                type="number"
                placeholder="cvc code"
                className="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>

        <button className="bg-[#667085] text-[#fff] py-4 font-semibold rounded-lg">Place Order</button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
