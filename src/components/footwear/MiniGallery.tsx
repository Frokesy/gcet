import FourandHalf from "../stars/FourandHalf";
import ThreeandHalf from "../stars/ThreeandHalf";
import { Naira } from "../svgs/extras";

const MiniGallery = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/footwear/ft-two.png",
      name: "Nike Zoom",
      rating: 4.5,
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/footwear/ft-three.png",
      name: "Dr Martens",
      rating: 3.5,
      ratingIcon: <ThreeandHalf />,
      price: "200,000.00",
      discount: "-20%",
    },
    {
      id: 3,
      productImg: "/assets/footwear/ft-four.png",
      name: "London Loafers",
      rating: 4.5,
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/footwear/ft-five.png",
      name: "Nike Air max 0s",
      rating: 4.5,
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
  ];
  return (
    <div className="pt-[5vh]">
      <div className="lg:bg-[#000] lg:text-[#fff] w-[100%] py-2">
        <h2 className="lg:text-[48px] text-[32px] font-bold uppercase text-center">
          Fresh Footwears
        </h2>
      </div>
      <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-[10vh] space-x-4">
  {items.map((item) => (
    <div key={item.id} className="flex-shrink-0 flex flex-col space-y-1 w-[295px]">
      <img
        src={item.productImg}
        alt={item.name}
        className="w-[295px] h-[300px]"
      />
      <h2 className="font-semibold pt-3 text-[20px]">{item.name}</h2>
      <div className="flex items-center space-x-3 text-[14px] text-[#808080] font-semibold">
        {item.ratingIcon}
        <p>{item.rating}/5</p>
      </div>
      <p className="flex items-center text-[20px] font-semibold">
        <Naira /> {item.price}
      </p>
    </div>
  ))}
</div>

      <div className="flex justify-center">
        <button className="bg-[#000] lg:w-[15%] w-[50%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
          View all
        </button>
      </div>
    </div>
  );
};

export default MiniGallery;
