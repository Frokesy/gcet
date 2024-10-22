const Categories = () => {
  return (
    <div className="mt-[15vh] pb-10 w-[90vw] mx-auto">
      <h2 className="lg:text-[48px] text-[24px] font-semibold text-center uppercase">
        Browse By category
      </h2>
      <div className="mt-6 flex flex-col space-y-4">
        <div className="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div className="lg:w-[43%] bg-[url('/assets/furniture/fur-four.png')] lg:h-[289px] h-[205px] rounded-2xl relative">
            <div className="absolute top-0 left-0 rounded-2xl bg-[#000] text-[#fff] w-[100%] h-[100%] bg-opacity-40 p-6 lg:text-[32px]">
              <h2>Living room</h2>
            </div>
          </div>
          <div className="relative lg:w-[55%] bg-[url('/assets/furniture/fur-five.png')] lg:h-[289px] h-[205px] rounded-2xl">
            <div className="absolute top-0 left-0 rounded-2xl bg-[#000] text-[#fff] w-[100%] h-[100%] bg-opacity-40 p-6 lg:text-[32px]">
              <h2>Bedroom</h2>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div className="relative lg:w-[55%] bg-[url('/assets/furniture/fur-six.png')] lg:h-[289px] h-[205px] rounded-2xl">
            <div className="absolute top-0 left-0 rounded-2xl bg-[#000] text-[#fff] w-[100%] h-[100%] bg-opacity-40 p-6 lg:text-[32px]">
              <h2>Commercial</h2>
            </div>
          </div>
          <div className="relative lg:w-[43%] bg-[url('/assets/furniture/fur-seven.png')] lg:h-[289px] h-[205px] rounded-2xl">
            <div className="absolute top-0 left-0 rounded-2xl bg-[#000] text-[#fff] w-[100%] h-[100%] bg-opacity-40 p-6 lg:text-[32px]">
              <h2>Kitchen</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
