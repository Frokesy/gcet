
import { FiveBlueStars, Heart, Naira } from "../svgs/extras";

const BestSellers = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/sports/st-two.png",
      name: "Arsenal Away Jersey 2024/2025",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/sports/st-three.png",
      name: "Nike Predator Boots",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
    },
    {
      id: 3,
      productImg: "/assets/sports/st-four.png",
      name: "Wilson Basketball",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/sports/st-five.png",
      name: "Nike Pegasus Trail 5 Gore-tex",
      ratingIcon: <FiveBlueStars />,
      price: "200,000.00",
    },
  ];

  return (
    <div>
      <hr className="w-[60vw] mx-auto" />
      <div className="lg:pt-[15vh] pt-14 w-[90vw] mx-auto">
        <h2 className="lg:text-[48px] text-[32px] text-[#194185]">
          Best Sellers
        </h2>

        <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] lg:space-x-5 space-x-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col relative space-y-1 lg:w-[320px] w-[174px]"
            >
              <div className="flex items-center justify-between w-[100%] absolute p-4">
                <p className="bg-[#fff] text-[#000] lg:text-[16px] text-[12px] uppercase py-1 px-4 rounded-lg font-semibold">
                  Hot
                </p>
                <div className="shadow-xl rounded-full bg-[#fff] p-1">
                  <Heart />
                </div>
              </div>
              <img
                src={item.productImg}
                alt={item.name}
                className="lg:w-[320px] w-[174px] lg:h-[445px] h-[270px]"
              />
              <div className="pt-10 w-[100%]">
                <button className="bg-[#039855] w-[100%] text-[#fff] lg:py-4 py-3 lg:rounded-xl rounded-lg">
                  Add to Cart
                </button>
              </div>
              <div className="pt-4">{item.ratingIcon}</div>
              <h2 className="uppercase lg:text-[14px] text-[10px] pt-2">{item.name}</h2>
              <p className="flex items-center lg:text-[14px] text-[10px]">
                <Naira /> {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
