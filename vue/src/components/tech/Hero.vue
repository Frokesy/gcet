<template>
    <div class="pt-[10vh] relative lg:bg-[url('/assets/tech/th-one.png')] bg-no-repeat lg:min-h-screen w-[100%] pb-10">
      <div class="w-[90vw] mx-auto lg:hidden">
        <img src="/assets/tech/th-one.png" alt="img" />
      </div>
      <div class="lg:bg-[#000] lg:absolute lg:top-0 lg:left-0 w-[100%] h-[100%] lg:bg-opacity-60">
        <div class="lg:pt-[10vh] w-[90vw] mx-auto">
          <div class="lg:w-[35%] lg:mt-20 lg:text-[#fff] mt-4 space-y-4">
            <h2 class="lg:text-[64px] text-[32px] font-semibold">
              Stay in touch with the latest Tech
            </h2>
            <p class="lg:text-[20px] text-[14px] pb-6">
              FRIEZA Gadgets, your ultimate destination for the latest and
              greatest gadgets, where cutting-edge technology meets unbeatable
              prices.
            </p>
            <router-link to="/tmp-5/shop">
              <button class="bg-[#3e4784] text-[#fff] py-3 rounded-lg w-[40%] lg:text-[16px] text-[14px] font-semibold">
                Shop Now
              </button>
            </router-link>
          </div>
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
  /* Add any custom styles if needed */
  </style>
  