import Container from "../../../components/defaults/Container";
import {
  BackIcon,
  Bin,
  CheckoutIcon,
  CouponIcon,
  Naira,
} from "../../../components/svgs/extras";

const Cart = () => {
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
    <Container>
      <div className="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
        <div className="flex space-x-6 w-[90vw] mx-auto">
          <div className="flex items-center cursor-pointer space-x-2">
            <BackIcon />
            <p className="uppercase">Back</p>
          </div>
          <div className="flex space-x-1 lg:text-[14px] text-[12px]">
            <p className="underline">Home</p>
            <p>/</p>
            <p className="underline">Cart</p>
          </div>
        </div>
        <h2 className="lg:text-[40px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
          Your Cart
        </h2>

        <div className="flex justify-between">
          <div className="w-[60%]">
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="flex items-center space-x-3 border-b-2 border-[#333] pb-3 font-semibold">
                <p className="w-[38px] h-[38px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full">
                  1
                </p>
                <p>Cart</p>
              </div>
              <div className="flex items-center space-x-3 pb-3 font-semibold">
                <p className="w-[38px] h-[38px] bg-[#808080] text-[#fff] flex justify-center items-center rounded-full">
                  2
                </p>
                <p className="text-[#808080]">Checkout Details</p>
              </div>
              <div className="flex items-center space-x-3 pb-3 font-semibold">
                <p className="w-[38px] h-[38px] bg-[#808080] text-[#fff] flex justify-center items-center rounded-full">
                  3
                </p>
                <p className="text-[#808080]">Order complete</p>
              </div>
            </div>

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
                      className="w-[160px] h-[115px] object-cover"
                    />
                    <div className="flex flex-col space-y-3">
                      <h2>{item.name}</h2>
                      <p>Color: white</p>
                      <div className="flex items-center space-x-4">
                        <p className="w-[20px] h-[20px] rounded-full flex justify-center items-center bg-[#000] text-[#fff]">
                          -
                        </p>
                        <p>1</p>
                        <p className="w-[20px] h-[20px] rounded-full flex justify-center items-center bg-[#000] text-[#fff]">
                          +
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end ">
                    <Bin />
                    <p className="flex items-center font-semibold space-x-2 text-[14px]">
                      <Naira />
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[30%] border border-[#ccc] rounded-2xl p-3">
            <h2 className="text-[24px] font-semibold">Order Summary</h2>

            <div className="flex flex-col space-y-6 mt-6">
              <div className="flex justify-between p-3 rounded-lg border border-[#333]">
                <h2>Subtotal</h2>
                <p className="flex items-center font-semibold space-x-2 text-[14px]">
                  <Naira />
                  80,000.00
                </p>
              </div>
              <div className="flex justify-between p-3 rounded-lg border border-[#333]">
                <div className="flex items-center space-x-3">
                  <input type="radio" defaultChecked name="deliveryFee" id="" />
                  <h2>Subtotal</h2>
                </div>
                <p className="flex items-center font-semibold space-x-2 text-[14px]">
                  <Naira />
                  5,000.00
                </p>
              </div>
              <div className="flex justify-between p-3 rounded-lg border border-[#333]">
                <div className="flex items-center space-x-3">
                  <input type="radio" name="pickup" id="" />
                  <h2>Pickup</h2>
                </div>
                <p className="flex items-center font-semibold space-x-2 text-[14px]">
                  <Naira />
                  5,000.00
                </p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h2>Total</h2>
                <p className="flex items-center font-semibold space-x-2 text-[14px]">
                  <Naira />
                  100,000.00
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-[65%] bg-[#ccc] flex items-center p-3 space-x-3 rounded-lg">
                  <CouponIcon />
                  <input
                    type="text"
                    placeholder="Add promo code"
                    className="border-none outline-none bg-inherit"
                  />
                </div>
                <div className="cursor-pointer w-[30%] text-[14px] bg-[#000] text-center text-[#fff] p-2 rounded-lg">
                  Apply Coupon
                </div>
              </div>

              <button className="py-6 w-[100%] bg-[#000] text-[#fff] space-x-3 flex items-center rounded-lg justify-center font-semibold">
                <p>Proceed to Checkout</p>
                <CheckoutIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
