<template>
  <div class="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
    <div class="flex space-x-6 w-[90vw] mx-auto">
      <router-link v-if="active === 'footwear'" to="/" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <router-link v-if="active === 'wristwatch'" to="/tmp-2/home" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <router-link v-if="active === 'furniture'" to="/tmp-3/home" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <router-link v-if="active === 'clothes'" to="/tmp-4/home" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <router-link v-if="active === 'tech'" to="/tmp-5/home" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <router-link v-if="active === 'sports'" to="/tmp-6/home" class="flex items-center cursor-pointer space-x-2">
        <BackIcon />
        <p class="uppercase">Back</p>
      </router-link>

      <div class="flex space-x-1 lg:text-[14px] text-[12px]">
        <p class="underline">Home</p>
        <p>/</p>
        <p class="underline">Cart</p>
        <p v-if="activeTab !== 'cart'">/</p>
        <p v-if="activeTab !== 'cart'" class="underline">Checkout</p>
      </div>
    </div>

    <h2 class="lg:text-[40px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
      {{ activeTab === 'order-complete' ? 'Order' : 'Your Cart' }}
    </h2>

    <div :class="`flex lg:flex-row flex-col ${activeTab !== 'order-complete' ? 'justify-between' : ''}`">
      <div :class="`${activeTab !== 'order-complete' ? 'lg:w-[60%]' : 'lg:w-[100%] lg:mx-auto'}`">
        <div class="lg:grid grid-cols-3 flex overflow-x-auto gap-6 mt-6 px-6 lg:px-0">
          <div @click="activeTab = 'cart'"
            class="flex items-center space-x-3 cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold"
            :class="activeTab !== 'cart' ? 'border-b-4 border-[#039855]' : 'border-b-2 border-[#333]'">
            <template v-if="activeTab !== 'cart'">
              <GreenTick />
            </template>
            <template v-else>
              <p class="w-[35px] h-[35px] bg-[#000] text-[#fff] flex justify-center items-center rounded-full">1</p>
            </template>
            <p>Shopping Cart</p>
          </div>

          <div @click="activeTab = 'checkout'"
            class="flex items-center space-x-3 cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold" :class="{
        'border-b-2 border-[#333]': activeTab === 'checkout',
        'border-b-4 border-[#039855]': activeTab === 'order-complete'
      }">
            <template v-if="activeTab === 'order-complete'">
              <GreenTick />
            </template>
            <template v-else>
              <p
                :class="`w-[38px] h-[38px] ${activeTab === 'checkout' ? 'bg-[#000]' : 'bg-[#808080]'} text-[#fff] flex justify-center items-center rounded-full`">
                2
              </p>
            </template>
            <p :class="{ 'text-[#000]': activeTab === 'checkout', 'text-[#808080]': activeTab !== 'checkout' }">Checkout
              Details</p>
          </div>

          <div @click="activeTab = 'order-complete'"
            class="flex items-center space-x-3 cursor-pointer flex-shrink-0 w-[256px] pb-3 font-semibold">
            <p class="w-[38px] h-[38px] bg-[#808080] text-[#fff] flex justify-center items-center rounded-full">3</p>
            <p class="text-[#808080]">Order complete</p>
          </div>
        </div>

        <ShoppingCart v-if="activeTab === 'cart' && !loading" :items="cartItems" @updateTotal="handleTotalUpdate" />
        <CheckoutDetails v-if="activeTab === 'checkout'" :setActiveTab="setActiveTab" />
        <OrderComplete v-if="activeTab === 'order-complete'" :items="cartItems" />
      </div>

      <OrderSummaryOne v-if="activeTab === 'cart'" :total="total" :themeColor="themeColor"
        :setActiveTab="setActiveTab" />
      <OrderSummaryTwo v-if="activeTab === 'checkout'" :items="cartItems" :total="total" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import BackIcon from "../icons/extras/BackIcon.vue"
import GreenTick from "../icons/extras/GreenTick.vue"
import ShoppingCart from "../cart/ShoppingCart.vue"
import CheckoutDetails from '../cart/CheckoutDetails.vue'
import OrderComplete from '../cart/OrderComplete.vue'
import OrderSummaryOne from '../cart/OrderSummaryOne.vue'
import OrderSummaryTwo from '../cart/OrderSummaryTwo.vue'
import { getCartItems } from '../../../utils/idbService'

export default {
  props: {
    active: {
      type: String,
      required: true
    },
    themeColor: {
      type: String,
      required: true
    }
  },
  components: {
    BackIcon,
    GreenTick,
    ShoppingCart,
    CheckoutDetails,
    OrderComplete,
    OrderSummaryOne,
    OrderSummaryTwo
  },
  setup(props) {
    const activeTab = ref('cart');
    const total = ref(0);
    const cartItems = ref([]);
    const loading = ref(true);

    const handleTotalUpdate = (newTotal) => {
      total.value = newTotal;
    };

    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };

    onMounted(async () => {
      const items = await getCartItems(props.active);
      cartItems.value = items;
      loading.value = false;
    });

    return {
      activeTab,
      total,
      cartItems,
      loading,
      handleTotalUpdate,
      setActiveTab
    };
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>