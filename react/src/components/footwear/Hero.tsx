import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { NavLink } from "react-router-dom";

const images = [
  "/assets/footwear/ft-one.png",
  "/assets/footwear/ft-eleven.png",
  "/assets/footwear/ft-twelve.png",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { x: 300, opacity: 0, scale: 0.85 },
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.6,
      },
    },
    exit: {
      x: -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        type: "tween",
        ease: "easeIn",
        duration: 0.2,
      },
    },
  };

  return (
    <div className="lg:py-[10vh] w-[90vw] mx-auto pt-2 pb-10 flex lg:flex-row flex-col-reverse justify-between items-center">
      <div className="lg:w-[45%]">
        <h2 className="font-bold lg:text-[64px] text-[32px] uppercase">
          Shop quality <br /> footwears.
        </h2>
        <p className="text-[#808080] lg:mt-10 mt-2">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <NavLink to="/shop" className="flex lg:justify-start justify-center">
          <button className="bg-[#000] lg:w-[40%] w-[70%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
            Shop Now
          </button>
        </NavLink>
      </div>

      <div className="lg:w-[50%] flex lg:justify-end mt-20 overflow-hidden">
        <AnimatePresence>
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`footwear-${currentImage}`}
            className="lg:w-[429px] w-[240px] lg:h-[456px] h-[268px] object-cover"
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Hero;
