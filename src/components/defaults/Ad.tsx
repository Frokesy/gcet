import { Dispatch, FC, SetStateAction } from "react"

interface AdProps {
    setCloseAd: Dispatch<SetStateAction<boolean>>
}

const Ad: FC<AdProps> = ({ setCloseAd }) => {
  return (
    <div className="w-[100%] bg-[#000] text-[#fff] py-3">
        <div className="w-[90vw] lg:text-[15px] text-[12px] mx-auto flex justify-between">
            <div className="lg:block hidden"></div>
            <p className="">Signup and get 20% off your first order. Sign Up Now</p>
            <p onClick={() => setCloseAd(true)} className="cursor-pointer">X</p>
        </div>
    </div>
  )
}

export default Ad
