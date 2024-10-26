
import FourandHalf from "../stars/FourandHalf";
import ThreeandHalf from "../stars/ThreeandHalf";

const NewArrivals = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/furniture/fur-eight.png",
      name: "Wooden Chair",
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 2,
      productImg: "/assets/furniture/fur-nine.png",
      name: "Interior Chair",
      ratingIcon: <ThreeandHalf />,
      price: "200,000.00",
      discount: "-20%",
    },
    {
      id: 3,
      productImg: "/assets/furniture/fur-ten.png",
      name: "Bamboo basket",
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 4,
      productImg: "/assets/furniture/fur-eleven.png",
      name: "Loveseat Sofa",
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
    {
      id: 5,
      productImg: "/assets/furniture/fur-twelve.png",
      name: "Arm Chair",
      ratingIcon: <FourandHalf />,
      price: "200,000.00",
    },
  ];
  return (
    <div className="bg-[#107569] py-10 mt-[10vh]">
      <div className="w-[90vw] mx-auto flex justify-between items-center">
        <h2 className="lg:text-[40px] text-[24px] font-semibold text-[#fff]">New Arrivals</h2>
        <p className="text-[#fff] underline lg:text-[16px] text-[13px]">More Products {">"}</p>
      </div>
      <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between lg:py-[10vh] py-10 space-x-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 flex flex-col space-y-3 lg:w-[262px] w-[180px]"
          >
            <div className="bg-[#fff] relative lg:w-[262px] w-[180px] flex flex-col lg:space-y-16 space-y-[15vh] items-center justify-center rounded-2xl">
              <p className="absolute top-6 left-3 bg-[#134e48] text-[#fff] lg:text-[16px] text-[12px] uppercase py-1 px-4 rounded-lg font-semibold">
                New
              </p>
              <img
                src={item.productImg}
                alt={item.name}
                className="lg:w-[200px] lg:h-[300px] w-[110px] h-[146px] object-cover"
              />
            </div>
            {item.ratingIcon}
            <h2 className="lg:text-[16px] text-[12px] text-[#fff]">{item.name}</h2>

            <p className="flex items-center lg:text-[16px] text-[12px] text-[#fff]">
              N{item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
