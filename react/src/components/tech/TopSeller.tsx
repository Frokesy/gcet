
import { FiveBlackStars, Naira } from "../svgs/extras";

const TopSeller = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/tech/th-seven.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/tech/th-three.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
      discount: "-20%",
    },
    {
      id: 3,
      productImg: "/assets/tech/th-two.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/tech/th-eight.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
    {
      id: 5,
      productImg: "/assets/tech/th-nine.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
    {
      id: 6,
      productImg: "/assets/tech/th-ten.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
      discount: "-20%",
    },
    {
      id: 7,
      productImg: "/assets/tech/th-twelve.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
    {
      id: 8,
      productImg: "/assets/tech/th-eleven.png",
      name: "Skullcandy - Crusher anc 2 wireless headphones",
      ratingIcon: <FiveBlackStars />,
      price: "200,000.00",
    },
  ];
  return (
    <div className="py-10 mt-[5vh]">
      <h2 className="lg:text-[40px] text-[24px] font-semibold text-[#000] w-[90vw] mx-auto">
        Top Seller
      </h2>
      <div className="w-[90vw] grid lg:grid-cols-4 grid-cols-2 mx-auto gap-10 py-10">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col space-y-3 lg:w-[320px] w-[180px]"
          >
            <div className=" relative rounded-2xl">
              <p className="absolute lg:top-4 top-3 left-3 font-semibold bg-[#fff] text-[#000] lg:text-[14px] text-[12px] uppercase py-0.5 px-6 rounded-md">
                hot
              </p>
              <img
                src={item.productImg}
                alt={item.name}
                className="lg:w-[320px] lg:h-[445px] w-[174px] h-[242px] object-cover"
              />
            </div>
            {item.ratingIcon}
            <h2 className="lg:text-[16px] text-[12px] text-[#000]">
              {item.name}
            </h2>

            <p className="flex items-center lg:text-[16px] text-[12px]">
              <Naira /> {item.price}
            </p>
          </div>
        ))}
      </div>
      <p className="flex justify-end w-[90vw] mx-auto font-semibold text-[18px] underline">
        See More {">"}
      </p>
    </div>
  );
};

export default TopSeller;
