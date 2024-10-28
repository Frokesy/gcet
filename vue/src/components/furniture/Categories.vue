<template>
    <div class="mt-[15vh] pb-10 w-[90vw] mx-auto">
      <h2 class="lg:text-[48px] text-[24px] font-semibold text-center uppercase">
        Browse By Category
      </h2>
      <div class="mt-6 flex flex-col space-y-4">
        <div class="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div class="lg:w-[43%] lg:h-[289px] h-[205px] rounded-2xl relative overflow-hidden">
            <img
              src="/assets/furniture/fur-four.png"
              alt="img"
              class="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p class="absolute top-0 p-6 text-[#fff] lg:text-[32px]">Living Room</p>
          </div>
  
          <div class="relative lg:w-[55%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-five.png"
              alt="img"
              class="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p class="absolute top-0 p-6 text-[#fff] lg:text-[32px]">Bedroom</p>
          </div>
        </div>
  
        <div class="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
          <div class="relative lg:w-[55%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-six.png"
              alt="img"
              class="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p class="absolute top-0 p-6 text-[#fff] lg:text-[32px]">Commercial</p>
          </div>
  
          <div class="relative lg:w-[43%] lg:h-[289px] h-[205px] rounded-2xl overflow-hidden">
            <img
              src="/assets/furniture/fur-seven.png"
              alt="img"
              class="w-[100%] h-[100%] hover:scale-125 transition-all duration-700 ease-in-out"
            />
            <p class="absolute top-0 p-6 text-[#fff] lg:text-[32px]">Kitchen</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Categories",
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here, if needed */
  </style>
  