<template>
    <div class="bg-gradient-to-r from-[#3e4784] to-[#0e101e] text-[#fff]">
      <div class="w-[90vw] mx-auto py-10">
        <div class="flex justify-between">
          <h2 class="lg:text-[40px] text-[24px] font-semibold">Featured Categories</h2>
          <button class="bg-[#606baf] p-2 rounded-xl text-[#fff] text-[14px] font-semibold lg:hidden">
            Phones
          </button>
          <div class="lg:flex hidden items-center space-x-10 font-bold">
            <button class="bg-[#606baf] p-2 rounded-xl text-[#fff]">Phones</button>
            <button class="border border-[#727684] hover:bg-[#606baf] hover:text-[#fff] transition-all duration-300 ease-in-out p-2 rounded-xl text-[#98A2B3]">
              Laptops
            </button>
            <button class="border border-[#727684] p-2 rounded-xl text-[#98A2B3] hover:bg-[#606baf] hover:text-[#fff] transition-all duration-300 ease-in-out">
              Monitors
            </button>
            <button class="border border-[#727684] p-2 rounded-xl text-[#98A2B3] hover:bg-[#606baf] hover:text-[#fff] transition-all duration-300 ease-in-out">
              Tablets
            </button>
            <button class="border border-[#727684] p-2 rounded-xl text-[#98A2B3] hover:bg-[#606baf] hover:text-[#fff] transition-all duration-300 ease-in-out">
              Headphones
            </button>
            <button class="border border-[#727684] p-2 rounded-xl text-[#98A2B3] hover:bg-[#606baf] hover:text-[#fff] transition-all duration-300 ease-in-out">
              See All
            </button>
          </div>
        </div>
  
        <div class="my-10 flex lg:flex-row flex-col lg:text-[24px] text-[14px] justify-between lg:space-x-6">
          <div class="lg:w-[50%] space-y-6">
            <div class="lg:py-16 py-12 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex items-center lg:space-x-10 justify-between">
              <img
                src="/assets/tech/th-two.png"
                alt="img"
                class="lg:w-[274px] w-[157px] lg:h-[354px] h-[204px]"
              />
              <div class="space-y-2">
                <FiveBlackStars />
                <h2 class="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p class="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
            <div class="lg:py-8 py-6 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex items-center lg:space-x-10 justify-between">
              <img
                src="/assets/tech/th-six.png"
                alt="img"
                class="lg:w-[202px] w-[116px] lg:h-[258px] h-[148px]"
              />
              <div class="space-y-2">
                <FiveBlackStars />
                <h2 class="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p class="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
          </div>
  
          <div class="lg:w-[50%] space-y-6 pt-6 lg:pt-0">
            <div class="lg:py-8 py-6 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex flex-row-reverse justify-between items-center lg:space-x-10">
              <img
                src="/assets/tech/th-six.png"
                alt="img"
                class="lg:w-[202px] w-[102px] lg:h-[258px] h-[130px]"
              />
              <div class="space-y-2">
                <FiveBlackStars />
                <h2 class="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p class="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
  
            <div class="lg:py-16 py-12 lg:px-10 px-4 bg-[#fff] text-[#000] lg:rounded-xl rounded-lg flex flex-row-reverse justify-between items-center lg:space-x-10">
              <img
                src="/assets/tech/th-two.png"
                alt="img"
                class="lg:w-[274px] w-[138px] lg:h-[354px] h-[179px]"
              />
              <div class="space-y-2">
                <FiveBlackStars />
                <h2 class="uppercase">Iphone 15 Pro Max</h2>
                <p>128GB</p>
                <p class="flex items-center lg:text-[16px] text-[12px]">
                  <Naira /> 200,000.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FiveBlackStars from "../icons/extras/FiveBlackStars.vue";
  import Naira from "../icons/extras/Naira.vue";
  
  export default {
    components: {
      FiveBlackStars,
      Naira,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  