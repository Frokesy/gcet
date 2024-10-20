import Container from "../../../components/defaults/Container";
import {
  BackIcon,
  DefaultDelivery,
  DeliveryInProgress,
  Naira,
  WhiteTick,
} from "../../../components/svgs/extras";

const TrackOrder = () => {
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
            <p className="underline">Tracking</p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between">
          <div className="bg-[#f2f4f7] p-6 mt-10 lg:w-[40%]">
            <h2 className="lg:text-[40px] text-[26px] font-semibold">Tracking Details</h2>

            <div className="lg:w-[80%] flex justify-between items-center mt-4">
              <h2 className="text-[#333]">Status</h2>
              <button className="bg-[#925f1b] text-[#fff] p-2 rounded-lg">
                Ongoing Delivery
              </button>
            </div>

            <div className="flex mt-6 border-l-4 ml-2 relative border-[#039855] pb-10">
              <div className="absolute -left-4">
                <WhiteTick />
              </div>
              <div className="flex flex-col ml-10">
                <h2>Payment complete</h2>
                <p>Order complete and payment confirmed</p>
              </div>
            </div>
            <div className="flex border-l-4 ml-2 relative border-[#039855] pb-10">
              <div className="absolute -left-4">
                <WhiteTick />
              </div>
              <div className="flex flex-col ml-10">
                <h2>Payment complete</h2>
                <p>Order complete and payment confirmed</p>
              </div>
            </div>
            <div className="flex border-l-2 ml-2 relative border-[#ccc] pb-10">
              <div className="absolute -left-5">
                <DeliveryInProgress />
              </div>
              <div className="flex flex-col ml-10">
                <h2>Payment complete</h2>
                <p>Order complete and payment confirmed</p>
              </div>
            </div>
            <div className="flex ml-2 relative pb-10">
              <div className="absolute -left-4">
                <DefaultDelivery />
              </div>
              <div className="flex flex-col ml-10">
                <h2>Payment complete</h2>
                <p>Order complete and payment confirmed</p>
              </div>
            </div>

            <div className="mt-10">
              <h2>Order Details</h2>
              <div className="mt-3 lg:w-[90%] rounded-lg p-3 bg-[#eaecf0] space-y-3">
                <div className="flex items-center space-x-4">
                  <p className="w-[32px] h-[32px] rounded-full bg-[#000] text-[#fff] text-[14px] flex items-center justify-center">
                    1
                  </p>
                  <div className="">
                    <p>New balance 9060</p>
                    <p className="text-[14px] text-[#808080]">Color: White</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <p className="w-[32px] h-[32px] rounded-full bg-[#000] text-[#fff] text-[14px] flex items-center justify-center">
                    1
                  </p>
                  <div className="">
                    <p>Nike SB Low Dunk</p>
                    <p className="text-[14px] text-[#808080]">Color: White</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="w-[32px] h-[32px] rounded-full bg-[#000] text-[#fff] text-[14px] flex items-center justify-center">
                    1
                  </p>
                  <div className="">
                    <p>Dr Martens</p>
                    <p className="text-[14px] text-[#808080]">Color: Brown</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="w-[32px] h-[32px] rounded-full bg-[#000] text-[#fff] text-[14px] flex items-center justify-center">
                    1
                  </p>
                  <div className="">
                    <p>London loafers</p>
                    <p className="text-[14px] text-[#808080]">Color: Black</p>
                  </div>
                </div>

                <div className="flex space-x-20 text-[20px] pt-10">
                    <h2>Total</h2>
                    <p className="flex items-center"><Naira /> 325,000.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[60%]">
            <img
              src="/assets/delivery-map.png"
              alt="img"
              className="w-[100%]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrackOrder;
