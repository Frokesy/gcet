<template>
    <div>
      <div class="w-[100%] grid lg:grid-cols-4 grid-cols-2 gap-6 mx-auto">
        <div
          v-for="item in items"
          :key="item.id"
          @click="setProduct(item)"
          class="flex-shrink-0 flex flex-col space-y-1 cursor-pointer lg:w-[248px] w-[176px]"
        >
          <img
            :src="item.productImg"
            :alt="item.name"
            class="lg:w-[248px] lg:h-[250px] w-[176px] h-[176px]"
          />
          <h2 class="font-semibold pt-3 lg:text-[16px] text-[14px]">
            {{ item.name }}
          </h2>
          <div class="flex items-center space-x-3 text-[14px] text-[#808080] font-semibold">
            <span v-html="item.ratingIcon"></span>
            <p>5/5</p>
          </div>
          <p class="flex items-center lg:text-[16px] text-[14px] font-semibold">
            <Naira /> {{ item.price }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Naira from '../icons/extras/Naira.vue';
  
  export default {
    name: 'ShopCatalog',
    components: {
      Naira,
    },
    props: {
      setProduct: {
        type: Function,
        required: true,
      },
      items: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any necessary styles here */
  </style>
  