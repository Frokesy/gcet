<template>
    <div class="w-[90vw] mx-auto py-[10vh] flex lg:flex-row flex-col space-y-6 lg:space-y-0 items-center lg:space-x-6">
      <div class="bg-[#f3f5f7] py-10 px-6 lg:w-[25%] w-[100%] flex flex-col space-y-4 rounded-md">
        <Van />
        <h2 class="text-[20px]">Free Shipping</h2>
        <p class="text-[#6C7275] text-[14px]">Order above $200</p>
      </div>
      <div class="bg-[#f3f5f7] py-10 px-6 lg:w-[25%] w-[100%] flex flex-col space-y-4 rounded-md">
        <MoneyIcon />
        <h2 class="text-[20px]">Money-back</h2>
        <p class="text-[#6C7275] text-[14px]">30 days guarantee</p>
      </div>
      <div class="bg-[#f3f5f7] py-10 px-6 lg:w-[25%] w-[100%] flex flex-col space-y-4 rounded-md">
        <Padlock />
        <h2 class="text-[20px]">Secure Payments</h2>
        <p class="text-[#6C7275] text-[14px]">Secured by Stripe</p>
      </div>
      <div class="bg-[#f3f5f7] py-10 px-6 lg:w-[25%] w-[100%] flex flex-col space-y-4 rounded-md">
        <PhoneIcon />
        <h2 class="text-[20px]">24/7 Support</h2>
        <p class="text-[#6C7275] text-[14px]">Phone and email support</p>
      </div>
    </div>
  </template>
  
  <script>

import MoneyIcon from "../icons/extras/MoneyIcon.vue"
import Padlock from "../icons/extras/Padlock.vue"
import PhoneIcon from "../icons/extras/PhoneIcon.vue"
import Van from "../icons/extras/Van.vue"
export default {
    components: {
      MoneyIcon,
      Padlock,
      PhoneIcon,
      Van,
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  