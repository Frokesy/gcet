<template>
  <div>
    <div class="mt-6 flex lg:flex-row flex-col justify-between">
      <div class="lg:w-[40%] w-[90%] lg:mx-0 mx-auto flex flex-col space-y-10">
        <div class="w-[100%] h-[458px]">
          <img :src="product.productImg" :alt="product.name" class="w-[100%] h-[100%] object-cover" />
        </div>
        <div class="lg:grid hidden grid-cols-3 gap-6">
          <img :src="product.productImg" :alt="product.name" class="w-[100%] h-[100%] object-cover" />
          <img :src="product.productImg" :alt="product.name" class="w-[100%] h-[100%] object-cover" />
          <img :src="product.productImg" :alt="product.name" class="w-[100%] h-[100%] object-cover" />
        </div>
      </div>
      <div class="lg:w-[55%] lg:mx-0 w-[90%] mx-auto space-y-3">
        <h2 class="lg:text-[40px] text-[24px] mt-4 lg:mt-0 font-semibold uppercase">
          {{ product.name }}
        </h2>
        <div class="flex items-center space-x-3 text-[14px]">
          <component :is="product.ratingIcon" />
          <p>4.5/5</p>
        </div>
        <p class="lg:text-[32px] text-[20px] font-semibold flex items-center pb-6">
          <Naira /> {{ product.price }}
        </p>
        <hr />
        <div class="color">
          <h2 class="lg:text-[20px] mt-6 font-semibold">Color</h2>
          <div class="grid grid-cols-4 mt-3 gap-6 lg:w-[25%] w-[30%] pb-6">
            <div
              class="bg-[#E8E7E3] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center">
              <Tick />
            </div>
            <div
              class="bg-[#15E3BE] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center">
            </div>
            <div
              class="bg-[#31344F] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center">
            </div>
            <div
              class="bg-[#7a0000] lg:w-[37px] lg:h-[37px] h-[20px] w-[20px] rounded-full flex items-center justify-center">
            </div>
          </div>
        </div>
        <hr />

        <div class="size">
          <h2 class="lg:text-[20px] mt-6 font-semibold">Size</h2>
          <div class="grid lg:grid-cols-6 grid-cols-3 gap-6 mt-3 pb-6 lg:text-[16px] text-[14px]">
            <p v-for="size in sizes" :key="size" class="border border-[#808080] text-center rounded-lg py-1">
              {{ size }}
            </p>
          </div>
        </div>
        <hr />

        <div class="flex justify-between pt-3 pb-6">
          <h2 class="font-semibold">Description</h2>
          <ArrowDown />
        </div>
        <hr />
        <div class="flex justify-between pt-3 pb-6">
          <h2 class="font-semibold">Details</h2>
          <ArrowDown />
        </div>
        <div class="flex justify-between">
          <div class="flex items-center space-x-4">
            <p class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
              @click="decrementQuantity">
              -
            </p>
            <p>{{ quantity }}</p>
            <p class="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
              @click="incrementQuantity">
              +
            </p>
          </div>

          <button @click="handleAddToCart"
            class="w-[65%] flex items-center space-x-3 justify-center py-3 bg-[#000] text-[#fff] rounded-lg font-semibold">
            <span>Add to Cart</span>
            <GreenTick v-if="addedToCart" />
          </button>
        </div>
      </div>
    </div>

    <div class="flex justify-between lg:flex-row flex-col-reverse mt-6">
      <div class="lg:w-[45%] lg:mx-0 w-[90%] mx-auto">
        <h2 class="pb-3">Ratings & Review</h2>
        <hr />
        <div class="flex justify-between lg:justify-normal space-x-8 mt-6">
          <div class="flex items-center space-x-2 underline">
            <h2 class="text-[20px] font-semibold">All Reviews</h2>
            <p class="text-[#404040]">(451)</p>
          </div>
          <div class="lg:flex hidden items-center space-x-2">
            <h2 class="text-[20px] font-semibold">High Reviews</h2>
            <p class="text-[#404040]">(400)</p>
          </div>
          <div class="lg:flex hidden items-center space-x-2">
            <h2 class="text-[20px] font-semibold">Low Reviews</h2>
            <p class="text-[#404040]">(51)</p>
          </div>
          <Menu />
        </div>

        <div class="flex flex-col space-y-10 mt-10">
          <div v-for="review in reviews" :key="review.id" class="border border-[#808080] rounded-xl p-4">
            <div class="flex items-center justify-between pb-2">
              <component :is="review.ratingIcon" />
              <div class="">...</div>
            </div>
            <h2 class="text-[20px] font-semibold pb-2">{{ review.name }}</h2>
            <p class="text-[#808080]">"{{ review.review }}"</p>

            <p class="text-[#808080] pt-6">
              Posted on September, 2024.
            </p>
          </div>
        </div>
      </div>
      <div class="lg:w-[50%]">
        <div class="w-[70%] mx-auto mt-6">
          <router-link :to="cartLink">
            <button class="w-[100%] py-4 bg-[#000] text-[#fff] rounded-lg font-semibold">
              View Cart
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { addItemToCart } from "../../../utils/idbService";
import Five from "../defaults/stars/Five.vue";
import FourandHalf from "../defaults/stars/FourandHalf.vue";
import ThreeandHalf from "../defaults/stars/ThreeandHalf.vue";
import ArrowDown from "../icons/extras/ArrowDown.vue"
import GreenTick from "../icons/extras/GreenTick.vue"
import Menu from "../icons/extras/Menu.vue"
import Naira from "../icons/extras/Naira.vue"
import Tick from "../icons/extras/Tick.vue"

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
    active: {
      type: String,
      required: true,
    },
  },
  components: {
    Five,
    FourandHalf,
    ThreeandHalf,
    ArrowDown,
    GreenTick,
    Menu,
    Tick,
    Naira,
  },
  setup(props) {
    const addedToCart = ref(false);
    const quantity = ref(props.product.quantity);
    const reviews = [
      {
        id: 1,
        name: "Samantha D.",
        review:
          "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        ratingIcon: Five,
      },
      {
        id: 2,
        name: "Ethan R.",
        review:
          "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        ratingIcon: FourandHalf,
      },
      {
        id: 3,
        name: "Liam K.",
        review:
          "I recently got the New Balance 9060 sneakers, and they are incredible! The comfort level is unmatched; it's like walking on clouds. The design is sleek and modern, making them perfect for both casual wear and light workouts. I love the support they provide, especially around the arch and heel. The quality of the materials is top-notch, and they feel very durable. Overall, I’m extremely satisfied with this purchase and highly recommend these sneakers to anyone looking for comfort and style.",
        ratingIcon: ThreeandHalf,
      },
    ];

    const sizes = [41, 42, 43, 44, 45, 46, 47, 48];

    const incrementQuantity = () => {
      quantity.value++;
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const handleAddToCart = async () => {
      if (quantity.value < 1) return;
      const newItem = {
      id: Math.floor(1000000000 + Math.random() * 9000000000),
      name: props.product.name,
      price: props.product.price,
      productImg: props.product.productImg,
      quantity: quantity.value,
      templateId: props.active,
    };

    console.log(newItem)
      await addItemToCart(newItem);
      addedToCart.value = true;
      setTimeout(() => {
        addedToCart.value = false;
      }, 2000);
    };

    const cartLink = "/cart";

    return {
      addedToCart,
      quantity,
      reviews,
      sizes,
      incrementQuantity,
      decrementQuantity,
      handleAddToCart,
      cartLink,
    };
  },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>