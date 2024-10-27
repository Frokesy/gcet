import { FC, useState } from "react";
import { ProductProps } from "./ShopCatalog";
import { ArrowDown, Greentick, Menu, Naira, Tick } from "../svgs/extras";
import Five from "../stars/Five";
import FourandHalf from "../stars/FourandHalf";
import ThreeandHalf from "../stars/ThreeandHalf";
import { addItemToCart } from "../../../utils/idbService";
import { NavLink } from "react-router-dom";

interface SingleProductProps {
  product: ProductProps;
  active: string;
}

const Product: FC<SingleProductProps> = ({ product, active }) => {
  const [addedtoCart, setAddedToCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState(product.quantity);
  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
      ratingIcon: <Five />,
    },
    {
      id: 2,
      name: "Ethan R.",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
      ratingIcon: <FourandHalf />,
    },
    {
      id: 3,
      name: "Liam K.",
      review:
        "I recently got the New Balance 9060 sneakers, and they are incredible! The comfort level is unmatched; it's like walking on clouds. The design is sleek and modern, making them perfect for both casual wear and light workouts. I love the support they provide, especially around the arch and heel. The quality of the materials is top-notch, and they feel very durable. Overall, I’m extremely satisfied with this purchase and highly recommend these sneakers to anyone looking for comfort and style.",
      ratingIcon: <ThreeandHalf />,
    },
  ];

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

  const incrementQuantity = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementQuantity = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    const newItem = {
      id: Math.floor(1000000000 + Math.random() * 9000000000),
      name: product.name,
      price: product.price,
      productImg: product.productImg,
      quantity: quantity,
      templateId: active,
    };

    await addItemToCart(newItem);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1000);
  };

  return (
    <div>
      <div className="mt-6 flex lg:flex-row flex-col justify-between">
        <div className="lg:w-[40%] w-[90%] lg:mx-0 mx-auto flex flex-col space-y-10">
          <div className="w-[100%] h-[458px]">
            <img
              src={product.productImg}
              alt={product.name}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="lg:grid hidden grid-cols-3 gap-6">
            <img
              src={product.productImg}
              alt={product.name}
              className="w-[100%] h-[100%] object-cover"
            />
            <img
              src={product.productImg}
              alt={product.name}
              className="w-[100%] h-[100%] object-cover"
            />
            <img
              src={product.productImg}
              alt={product.name}
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
        <div className="lg:w-[55%] lg:mx-0 w-[90%] mx-auto space-y-3">
          <h2 className="lg:text-[40px] text-[24px] mt-4 lg:mt-0 font-semibold uppercase">
            {product.name}
          </h2>
          <div className="flex items-center space-x-3 text-[14px]">
            {product.ratingIcon}
            <p>4.5/5</p>
          </div>
          <p className="lg:text-[32px] text-[20px] font-semibold flex items-center pb-6">
            <Naira /> {product.price}
          </p>
          <hr />
          <div className="color">
            <h2 className="lg:text-[20px] mt-6 font-semibold">Color</h2>
            <div className="grid grid-cols-4 mt-3 gap-6 lg:w-[25%] w-[30%] pb-6">
              <div className="bg-[#E8E7E3] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center">
                <Tick />
              </div>
              <div className="bg-[#15E3BE] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center"></div>
              <div className="bg-[#31344F] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center"></div>
              <div className="bg-[#7a0000] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center"></div>
            </div>
          </div>
          <hr />

          <div className="size">
            <h2 className="lg:text-[20px] mt-6 font-semibold">Size</h2>
            <div className="grid lg:grid-cols-6 grid-cols-3 gap-6 mt-3 pb-6 lg:text-[16px] text-[14px]">
              <p className="border border-[#808080] text-center rounded-lg py-1">
                41
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                42
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                43
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                44
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                45
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                46
              </p>
              <p className="border border-[#808080] text-center rounded-lg py-1">
                47
              </p>
            </div>
          </div>
          <hr />

          <div className="flex justify-between pt-3 pb-6">
            <h2 className="font-semibold">Description</h2>
            <ArrowDown />
          </div>
          <hr />
          <div className="flex justify-between pt-3 pb-6">
            <h2 className="font-semibold">Details</h2>
            <ArrowDown />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-4">
              <p
                className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                onClick={decrementQuantity}
              >
                -
              </p>
              <p>{quantity}</p>
              <p
                className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                onClick={incrementQuantity}
              >
                +
              </p>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-[65%] flex items-center space-x-3 justify-center py-3 bg-[#000] text-[#fff] rounded-lg font-semibold"
            >
              <span>Add to Cart</span>
              {addedtoCart && <Greentick />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-between lg:flex-row flex-col-reverse mt-6">
        <div className="lg:w-[45%] lg:mx-0 w-[90%] mx-auto">
          <h2 className="pb-3">Ratings & Review</h2>
          <hr />
          <div className="flex justify-between lg:justify-normal space-x-8 mt-6">
            <div className="flex items-center space-x-2 underline">
              <h2 className="text-[20px] font-semibold">All Reviews</h2>
              <p className="text-[#404040]">(451)</p>
            </div>
            <div className="lg:flex hidden items-center space-x-2">
              <h2 className="text-[20px] font-semibold">High Reviews</h2>
              <p className="text-[#404040]">(400)</p>
            </div>
            <div className="lg:flex hidden items-center space-x-2">
              <h2 className="text-[20px] font-semibold">Low Reviews</h2>
              <p className="text-[#404040]">(51)</p>
            </div>
            <Menu />
          </div>

          <div className="flex flex-col space-y-10 mt-10">
            {reviews.map((review) => (
              <div
                className="border border-[#808080] rounded-xl p-4"
                key={review.id}
              >
                <div className="flex items-center justify-between pb-2">
                  {review.ratingIcon}
                  <div className="">...</div>
                </div>
                <h2 className="text-[20px] font-semibold pb-2">
                  {review.name}
                </h2>
                <p className="text-[#808080]">"{review.review}"</p>

                <p className="text-[#808080] pt-6">
                  Posted on September, 2024.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[50%]">
          <div className="w-[70%] mx-auto mt-6">
            {active === "footwear" && (
              <NavLink to="/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
            {active === "wristwatch" && (
              <NavLink to="/tmp-2/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
            {active === "furniture" && (
              <NavLink to="/tmp-3/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
            {active === "clothes" && (
              <NavLink to="/tmp-4/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
            {active === "tech" && (
              <NavLink to="/tmp-5/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
            {active === "sports" && (
              <NavLink to="/tmp-6/cart">
                <button className="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
                  View Cart
                </button>
              </NavLink>
            )}
          </div>
          <div className="bg-[#f9fafb] p-3 rounded-xl mt-14">
            <h2 className="text-[24px] font-semibold">Write a review</h2>
            <textarea
              name=""
              id=""
              placeholder="Give your opinion on the product"
              className="w-[100%] min-h-[200px] outline-none p-3 mt-6 border border-[#808080] rounded-xl"
            ></textarea>
            <div className="flex justify-end mt-20">
              <button className="text-[#fff] bg-[#000] px-10 py-3 font-semibold rounded-full">
                Write a review
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[15vh]">
        <h2 className="lg:text-[48px] text-[32px] font-semibold text-center">
          You may also like
        </h2>
        <div className="w-[90vw] flex overflow-x-auto mx-auto justify-between py-10 space-x-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 flex flex-col space-y-1 w-[295px]"
            >
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
      </div>
    </div>
  );
};

export default Product;
