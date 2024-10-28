<template>
    <div class="bg-[#f7f7f7] lg:pt-[20vh] pt-[15vh] pb-10">
      <div class="w-[90vw] mx-auto flex lg:flex-row flex-col-reverse justify-between">
        <div class="lg:w-[35%] space-y-4">
          <h2 class="lg:text-[50px] text-[32px] mt-10 lg:mt-0 font-semibold uppercase">
            Take your dress sense to a new level
          </h2>
          <p class="lg:text-[18px] text-[14px] text-[#404040] pb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of style.
          </p>
          <router-link to="/tmp-4/shop">
            <button class="bg-[#553a32] text-[#fff] py-3 rounded-lg w-[40%] lg:text-[16px] text-[14px] font-semibold">
              Shop Now
            </button>
          </router-link>
        </div>
        <div class="lg:w-[60%] flex space-x-4 lg:justify-between lg:items-end bg-[#fff] rounded-[50px]">
          <img
            src="/assets/clothes/cl-one.png"
            alt="img"
            class="lg:h-[256px] lg:w-[20%] w-[100%] h-[432px] hover:scale-110 transition-all duration-1000 ease-in-out"
          />
          <img
            src="/assets/clothes/cl-two.png"
            alt="img"
            class="h-[384px] w-[35%] lg:block hidden hover:scale-110 transition-all duration-1000 ease-in-out"
          />
          <img
            src="/assets/clothes/cl-three.png"
            alt="img"
            class="h-[536px] w-[40%] lg:block hidden hover:scale-110 transition-all duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Hero",
  };
  </script>
  
  <style scoped>
  /* Add any custom styling if needed */
  </style>
  