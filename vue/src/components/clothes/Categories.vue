<template>
    <div class="bg-[#f7f7f7] pt-[7vh] pb-10">
      <div class="w-[90vw] mx-auto bg-[#f0f0f0] rounded-3xl pt-[8vh]">
        <h2 class="lg:text-[48px] text-[24px] font-semibold text-center uppercase">
          Browse By Dress Style
        </h2>
        <div class="mt-16 flex flex-col space-y-6">
          <div class="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
            <div
              class="lg:w-[43%] bg-[url('/assets/clothes/cl-twelve.png')] bg-no-repeat bg-cover lg:h-[350px] h-[205px] rounded-2xl relative"
            >
              <h2 class="p-6 text-[20px] font-semibold">Casual</h2>
            </div>
            <div
              class="relative lg:w-[55%] bg-[url('/assets/clothes/cl-thirteen.png')] bg-no-repeat bg-cover lg:h-[350px] h-[205px] rounded-2xl"
            >
              <h2 class="p-6 text-[20px] font-semibold">Formal</h2>
            </div>
          </div>
          <div class="flex lg:flex-row flex-col justify-between space-y-4 lg:space-y-0">
            <div
              class="relative lg:w-[55%] bg-[url('/assets/clothes/cl-fourteen.png')] bg-no-repeat bg-cover lg:h-[350px] h-[205px] rounded-2xl"
            >
              <h2 class="p-6 text-[20px] font-semibold">Party</h2>
            </div>
            <div
              class="relative lg:w-[43%] bg-[url('/assets/clothes/cl-fifteen.png')] bg-no-repeat bg-cover lg:h-[350px] h-[205px] rounded-2xl"
            >
              <h2 class="p-6 text-[20px] font-semibold">Gym</h2>
            </div>
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
  /* Add any custom styles if needed */
  </style>
  