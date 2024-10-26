

const Trending = () => {
  return (
    <div className="bg-[#faf9f6]">
      <div className="py-[10vh] w-[90vw] mx-auto">
        <h2 className="lg:text-[48px] text-[32px] font-semibold">Trending</h2>

        <div className="flex lg:flex-row flex-col justify-between mt-10">
          <div className="lg:w-[40%]">
            <img
              src="/assets/wristwatch/wt-two.png"
              alt="img"
              className="w-[100%]"
            />
          </div>
          <div className="py-10 lg:px-20 lg:bg-[#fff4ed] lg:w-[60%] space-y-6">
            <h2 className="lg:text-[36px] text-[24px] font-semibold uppercase">
              Richard Mille 35-03
            </h2>
            <p className="lg:text-[24px] font-sans">
              Automatic Winding Rafael Nadal
            </p>
            <p className="lg:text-[20px] font-sans">
              The RM 35 - 03 Automatic Rafael Nadal, the fourth watch in the RM
              035 Collection, inaugurates a new winding mechanism christened the
              &apos;butterfly rotor. This patented invention hands direct
              control over the automatic movement&apos;s winding to the wearer.
              It&apos;s a brand new way to stay in touch with your watch under
              all circumstances.
            </p>

            <div className="flex pt-10 items-center lg:space-x-10 space-x-4">
              <button className="text-[#fff] font-semibold rounded-lg lg:text-[16px] text-[14px] bg-[#ff4405] py-2 lg:px-10 px-6">
                Buy for N200,000.00
              </button>
              <button className="text-[#fff] font-semibold rounded-lg lg:text-[16px] text-[14px] bg-[#ff4405] py-2 lg:px-10 px-6">
                Explore item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
