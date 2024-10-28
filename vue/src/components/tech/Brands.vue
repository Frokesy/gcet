<template>
    <div class="bg-[#fff] py-10">
      <h2 class="text-center text-[#667085] font-semibold uppercase">
        Available brands
      </h2>
  
      <div class="w-[90vw] mx-auto grid grid-cols-3 gap-6 lg:gap-0 place-items-center lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
        <Hp />
        <Apple />
        <Samsung />
        <Huawei />
        <Sony />
        <Dell />
        <div class="col-span-3">
          <Acer />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Hp from "../icons/brandIcons/Hp.vue";
  import Apple from "../icons/brandIcons/Apple.vue";
  import Samsung from "../icons/brandIcons/Samsung.vue";
  import Huawei from "../icons/brandIcons/Huawei.vue";
  import Sony from "../icons/brandIcons/Sony.vue";
  import Dell from "../icons/brandIcons/Dell.vue";
  import Acer from "../icons/brandIcons/Acer.vue";
  
  export default {
    name: "Brands",
    components: {
      Hp,
      Apple,
      Samsung,
      Huawei,
      Sony,
      Dell,
      Acer,
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if needed */
  </style>
  