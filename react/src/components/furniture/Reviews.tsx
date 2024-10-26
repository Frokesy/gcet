
import Five from "../stars/Five";
import FourandHalf from "../stars/FourandHalf";
import Three from "../stars/Three";
import ThreeandHalf from "../stars/ThreeandHalf";
import { Greentick } from "../svgs/extras";

const Reviews = () => {
  const items = [
    {
      id: 1,
      name: "Sarah M.",
      comment:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
      rating: <Five />,
    },
    {
      id: 2,
      name: "Alex K.",
      comment:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
      rating: <Five />,
    },
    {
      id: 3,
      name: "James L.",
      comment:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: <Three />,
    },
    {
      id: 4,
      name: "Moon Gray",
      comment:
        "I ordered a pair of casual loafers. While the shoes are comfortable and stylish, If you’re willing to spend a little more, this is a good place to shop, but it might not be the best value.",
      rating: <ThreeandHalf />,
    },
    {
      id: 5,
      name: "Tobiloba Olanrewaju",
      comment:
        "I bought a pair of running shoes from this website, and I couldn’t be happier!Delivery was fast, and the customer service was responsive when I had questions about sizing. Definitely shopping here again!",
      rating: <FourandHalf />,
    },
  ];
  return (
    <div className=" mt-[5vh] text-[#000] pt-[10vh]">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <h2 className="lg:text-[48px] text-[22px] font-bold uppercase">
          Our Happy Customers
        </h2>
        <p className="text-[20px] font-semibold">{"< >"}</p>
      </div>

      <div className="flex overflow-x-auto justify-between py-[10vh] space-x-14 lg:px-20 px-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col space-y-1 lg:w-[400px] w-[250px]"
          >
            <div>{item.rating}</div>
            <div className="flex items-center space-x-2 pt-3">
              <h2 className="font-semibold text-[20px]">{item.name}</h2>
              <Greentick />
            </div>
            <p className="pt-3 lg:text-[15px] text-[14px]">{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
