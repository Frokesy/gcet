import { useState } from "react";
import Five from "../stars/Five";
import { Heart, Naira } from "../svgs/extras";


const Categories = () => {
  const items = [
    {
      id: 1,
      productImg: "/assets/footwear/ft-six.png",
      name: "Nike air monarch iv",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sneakers",
    },
    {
      id: 2,
      productImg: "/assets/footwear/ft-seven.png",
      name: "New balance 1906R",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sneakers",
    },
    {
      id: 3,
      productImg: "/assets/footwear/ft-eight.png",
      name: "Nike dunk low",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sneakers",
    },
    {
      id: 4,
      productImg: "/assets/footwear/ft-nine.png",
      name: "New balance made in USA 990v6",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sneakers",
    },
    {
      id: 5,
      productImg: "/assets/footwear/ft-six.png",
      name: "Nike air monarch iv",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "shoes",
    },
    {
      id: 6,
      productImg: "/assets/footwear/ft-seven.png",
      name: "New balance 1906R",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "shoes",
    },
    {
      id: 7,
      productImg: "/assets/footwear/ft-eight.png",
      name: "Nike dunk low",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "shoes",
    },
    {
      id: 8,
      productImg: "/assets/footwear/ft-nine.png",
      name: "New balance made in USA 990v6",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "shoes",
    },
    {
      id: 9,
      productImg: "/assets/footwear/ft-six.png",
      name: "Nike air monarch iv",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 10,
      productImg: "/assets/footwear/ft-seven.png",
      name: "New balance 1906R",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 11,
      productImg: "/assets/footwear/ft-eight.png",
      name: "Nike dunk low",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sports",
    },
    {
      id: 12,
      productImg: "/assets/footwear/ft-nine.png",
      name: "New balance made in USA 990v6",
      ratingIcon: <Five />,
      price: "200,000.00",
      category: "sports",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("sneakers");
  return (
    <div>
      <hr className="w-[60vw] mx-auto" />
      <div className="pt-[15vh] w-[90vw] mx-auto">
        <h2 className="lg:text-[48px] text-[32px] font-bold uppercase">
          categories
        </h2>
        <div className="selector space-x-10 mt-6 lg:flex hidden">
          <button
            onClick={() => setActiveTab("sneakers")}
            className={`${
              activeTab === "sneakers" && "bg-[#000] text-[#fff]"
            } p-2 rounded-lg uppercase transition-all duration-300 ease-in-out`}
          >
            Sneakers
          </button>
          <button
            className={`${
              activeTab === "shoes" && "bg-[#000] text-[#fff]"
            } p-2 rounded-lg uppercase transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab("shoes")}
          >
            Shoes
          </button>
          <button
            className={`${
              activeTab === "sports" && "bg-[#000] text-[#fff]"
            } p-2 rounded-lg uppercase transition-all duration-300 ease-in-out`}
            onClick={() => setActiveTab("sports")}
          >
            Sports
          </button>
        </div>

        <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] space-x-5">
          {items.map(
            (item) =>
              activeTab === item.category && (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex flex-col space-y-1 w-[320px]"
                >
                  <div className="h-[40px] flex lg:hidden mb-10">
                    {item.id === 1 && (
                      <h2 className="text-[16px] font-semibold uppercase bg-[#000] text-[#fff] p-2 rounded-lg">
                        {item.category}
                      </h2>
                    )}
                  </div>
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold uppercase">Hot</p>
                    <div className="shadow-xl rounded-full bg-[#fff] p-1">
                      <Heart />
                    </div>
                  </div>
                  <img
                    src={item.productImg}
                    alt={item.name}
                    className="w-[320px] h-[320px]"
                  />
                  <div className="pt-10 w-[100%]">
                    <button className="bg-[#000] w-[100%] text-[#fff] py-4 rounded-xl">
                      Add to Cart
                    </button>
                  </div>
                  <div className="pt-4">{item.ratingIcon}</div>
                  <h2 className="uppercase text-[14px] pt-2">{item.name}</h2>
                  <p className="flex items-center text-[14px]">
                    <Naira /> {item.price}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="w-[90vw] flex lg:hidden overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] space-x-5">
          {items.map(
            (item) =>
              item.category === "shoes" && (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex flex-col space-y-1 w-[295px]"
                >
                  <div className="h-[40px] flex lg:hidden mb-10">
                    {item.id === 5 && (
                      <h2 className="text-[16px] font-semibold uppercase bg-[#000] text-[#fff] p-2 rounded-lg">
                        {item.category}
                      </h2>
                    )}
                  </div>
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold uppercase">Hot</p>
                    <div className="shadow-xl rounded-full bg-[#fff] p-1">
                      <Heart />
                    </div>
                  </div>
                  <img
                    src={item.productImg}
                    alt={item.name}
                    className="w-[320px] h-[320px]"
                  />
                  <div className="pt-10 w-[100%]">
                    <button className="bg-[#000] w-[100%] text-[#fff] py-4 rounded-xl">
                      Add to Cart
                    </button>
                  </div>
                  <div className="pt-4">{item.ratingIcon}</div>
                  <h2 className="uppercase text-[14px] pt-2">{item.name}</h2>
                  <p className="flex items-center text-[14px]">
                    <Naira /> {item.price}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="w-[90vw] flex lg:hidden overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] space-x-5">
          {items.map(
            (item) =>
              item.category === "sports" && (
                <div
                  key={item.id}
                  className="flex-shrink-0 flex flex-col space-y-1 w-[295px]"
                >
                  <div className="h-[40px] flex lg:hidden mb-10">
                    {item.id === 9 && (
                      <h2 className="text-[16px] font-semibold uppercase bg-[#000] text-[#fff] p-2 rounded-lg">
                        {item.category}
                      </h2>
                    )}
                  </div>
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-bold uppercase">Hot</p>
                    <div className="shadow-xl rounded-full bg-[#fff] p-1">
                      <Heart />
                    </div>
                  </div>
                  <img
                    src={item.productImg}
                    alt={item.name}
                    className="w-[320px] h-[320px]"
                  />
                  <div className="pt-10 w-[100%]">
                    <button className="bg-[#000] w-[100%] text-[#fff] py-4 rounded-xl">
                      Add to Cart
                    </button>
                  </div>
                  <div className="pt-4">{item.ratingIcon}</div>
                  <h2 className="uppercase text-[14px] pt-2">{item.name}</h2>
                  <p className="flex items-center text-[14px]">
                    <Naira /> {item.price}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
