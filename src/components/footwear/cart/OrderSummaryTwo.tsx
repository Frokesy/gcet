import { Bin, CouponIcon, Naira } from "../../svgs/extras";

const OrderSummaryTwo = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/footwear/ft-two.png",
      name: "Nike Zoom",
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/footwear/ft-three.png",
      name: "Dr Martens",
      price: "200,000.00",
    },
    {
      id: 3,
      productImg: "/assets/footwear/ft-four.png",
      name: "London Loafers",
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/footwear/ft-five.png",
      name: "Nike Air max 0s",
      price: "200,000.00",
    },
  ];
  return (
    <div className="lg:w-[30%] w-[90%] mx-auto lg:mx-0 mt-10 border border-[#ccc] rounded-2xl bg-[#f9fafb] p-6">
      <h2 className="text-[24px] font-semibold">Order Summary</h2>

      <div className="flex flex-col space-y-10 mt-10">
        {items.map((item) => (
          <div
            className="flex justify-between border-b-2 border-[#ccc] pb-4"
            key={item.id}
          >
            <div className="flex items-center space-x-6">
              <img
                src={item.productImg}
                alt={item.name}
                className="w-[80px] h-[57px] object-cover"
              />
              <div className="flex flex-col space-y-3">
                <h2 className="lg:text-[16px] text-[12px]">{item.name}</h2>
                <p className="lg:text-[16px] text-[12px]">Color: white</p>
                <div className="flex items-center space-x-4">
                  <p className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff]">
                    -
                  </p>
                  <p className="lg:text-[16px] text-[12px]">1</p>
                  <p className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff]">
                    +
                  </p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-col flex-col-reverse justify-between items-end">
              <Bin />
              <p className="flex items-center font-semibold space-x-2 text-[14px]">
                <Naira />
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr />
      <div className="border-b-2 mt-6 border-[#ccc] py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <CouponIcon />
          <p>Promo discount</p>
        </div>
        <p className="text-[#912018]">Not available</p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
        <p>Delivery Fee</p>
        <p className="font-semibold">Free</p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
        <p>Subtotal</p>
        <p className="font-semibold flex items-center">
          <Naira /> 5,000.00
        </p>
      </div>
      <div className="border-b-2 border-[#ccc] py-6 flex justify-between items-center text-[20px]">
        <p>Total</p>
        <p className="font-semibold flex items-center">
          <Naira /> 325,000.00
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryTwo;