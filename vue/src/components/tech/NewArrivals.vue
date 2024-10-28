<template>
    <div class="py-10 mt-[5vh]">
      <div class="w-[90vw] mx-auto flex justify-between items-center">
        <h2 class="lg:text-[40px] text-[24px] font-semibold text-[#000]">
          New Arrivals
        </h2>
        <p class="text-[#000] underline lg:text-[16px] text-[13px]">
          View More {">"}
        </p>
      </div>
      <div class="w-[90vw] flex overflow-x-auto mx-auto justify-between lg:py-[10vh] py-10 space-x-4">
        <div
          v-for="item in items"
          :key="item.id"
          class="flex-shrink-0 flex flex-col space-y-3 lg:w-[320px] w-[180px]"
        >
          <div class="relative rounded-2xl">
            <p class="absolute lg:top-6 top-3 left-3 bg-[#fff] text-[#000] lg:text-[16px] text-[12px] uppercase py-1 px-4 rounded-lg font-semibold">
              New
            </p>
            <img
              :src="item.productImg"
              :alt="item.name"
              class="lg:w-[320px] lg:h-[445px] w-[174px] h-[242px] object-cover"
            />
          </div>
          <FiveBlackStars />
          <h2 class="lg:text-[16px] text-[12px] text-[#000]">
            {{ item.name }}
          </h2>
          <p class="flex items-center lg:text-[16px] text-[12px]">
            <Naira /> {{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import FiveBlackStars from "../icons/extras/FiveBlackStars.vue";
  import Naira from "../icons/extras/Naira.vue";
  
  export default {
    name: "NewArrivals",
    components: {
      FiveBlackStars,
      Naira,
    },
    data() {
      return {
        items: [
          {
            id: 1,
            productImg: "/assets/tech/th-two.png",
            name: "Skullcandy - Crusher anc 2 wireless headphones",
            price: "200,000.00",
          },
          {
            id: 2,
            productImg: "/assets/tech/th-three.png",
            name: "Skullcandy - Crusher anc 2 wireless headphones",
            price: "200,000.00",
            discount: "-20%",
          },
          {
            id: 3,
            productImg: "/assets/tech/th-four.png",
            name: "Skullcandy - Crusher anc 2 wireless headphones",
            price: "200,000.00",
          },
          {
            id: 4,
            productImg: "/assets/tech/th-five.png",
            name: "Skullcandy - Crusher anc 2 wireless headphones",
            price: "200,000.00",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  