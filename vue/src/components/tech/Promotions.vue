<template>
    <div class="bg-[#f7f7f7] py-[10vh]">
      <div class="w-[90vw] mx-auto flex">
        <div class="w-[45%] lg:block hidden">
          <img src="/assets/tech/th-thirteen.png" class="w-[100%]" alt="img" />
        </div>
        <div class="lg:w-[55%] bg-[#f0f0f0] lg:px-10 px-6 lg:py-20 py-10">
          <PromotionIcon />
          <p class="text-[#000] font-bold uppercase lg:text-[16px] text-[12px] font-sans py-6">Promotion</p>
          <h2 class="lg:text-[40px] text-[24px] font-semibold pb-2">Hurry up! 15% OFF</h2>
          <p class="lg:text-[20px] text-[#333] font-sans">Thousands of high tech are waiting for you.</p>
          <p class="py-6 lg:text-[16px] text-[12px]">Offer expires in soon</p>
          <button class="bg-[#fff] py-2 px-6 rounded-xl font-semibold text-[#333] font-sans">Shop Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PromotionIcon from "../icons/extras/PromotionIcon.vue"

  export default {
    components: {
      PromotionIcon,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  