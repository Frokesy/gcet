<template>
    <div class="w-[100%] bg-[#000] text-[#fff] py-3">
      <div class="w-[90vw] lg:text-[15px] text-[12px] mx-auto flex justify-between">
        <div class="lg:block hidden"></div>
        <router-link to="/auth/signup">
          Signup and get 20% off your first order. Sign Up Now
        </router-link>
        <p @click="setCloseAd(false)" class="cursor-pointer">X</p>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props: {
      setCloseAd: {
        type: Function,
        required: true,
      },
    },
  });
  </script>
  