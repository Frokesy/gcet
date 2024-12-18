
import { Dispatch, FC, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

interface AdProps {
  setCloseAd: Dispatch<SetStateAction<boolean>>;
}

const Ad: FC<AdProps> = ({ setCloseAd }) => {
  return (
    <div className="w-[100%] bg-[#000] text-[rgb(255,255,255)] py-2">
      <div className="w-[90vw] lg:text-[13px] text-[12px] mx-auto flex justify-between">
        <div className="lg:block hidden"></div>
        <NavLink to="/auth/signup" className="">
          Signup and get 20% off your first order. Sign Up Now
        </NavLink>
        <p onClick={() => setCloseAd(true)} className="cursor-pointer">
          X
        </p>
      </div>
    </div>
  );
};

export default Ad;
