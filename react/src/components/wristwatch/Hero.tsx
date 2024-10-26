
import { NavLink } from "react-router-dom";
import { PlayIcon } from "../svgs/wristwatch/icons";

const Hero = () => {
  return (
    <div className="pt-[15vh] pb-10 bg-[#faf9f6] mx-auto flex flex-col items-center">
      <img
        src="/assets/wristwatch/wt-one.png"
        alt="hero-img"
        className="lg:w-[480px] w-[340px] lg:h-[480px] h-[340px]"
      />
      <p className="text-[#3E4784] uppercase text-[13px] py-2">Siko pieces</p>
      <h2 className="lg:text-[60px] text-[32px] font-bold">
        The <span className="text-[#ff4405] uppercase"> time</span> is now!
      </h2>
      <p className="lg:text-[19px] text-[#161C2D] lg:w-[40%] px-6 lg:px-0 mt-3 text-center">
        With SIKO PIECES, shop for your type of time piece, be it the casual,
        sporty or luxurious piece. SIKO is here for you!
      </p>
      <NavLink to="/tmp-2/shop" className="bg-[#ff4405] text-[#fff] py-2 px-10 mt-10 rounded-2xl font-semibold">
        Find your piece
      </NavLink>

      <div className="mt-10 flex items-center space-x-4">
        <PlayIcon />
        <h2 className="uppercase font-semibold">Watch in action</h2>
      </div>
    </div>
  );
};

export default Hero;
