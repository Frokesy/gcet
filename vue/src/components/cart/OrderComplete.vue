<template>
    <div class="lg:w-[50%] w-[90%] mx-auto border border-[#ccc] rounded-xl mt-20 
             bg-[#fff] shadow-xl text-center flex flex-col items-center justify-center py-10">
        <h2 class="text-[#808080]">Thank You!</h2>
        <p class="lg:text-[40px] text-[24px] w-[70%] pb-4">
            Order created and delivery in progress
        </p>

        <div class="mt-6 grid lg:flex flex-row items-center space-x-10 
               grid-cols-2 place-items-center lg:gap-10 gap-16">
            <div v-for="item in items" :key="item.id" class="w-[96px] h-[112px] relative">
                <p class="absolute top-0 right-0 w-[20px] h-[20px] 
                    bg-[#000] text-[#fff] text-[14px] rounded-full">
                    1
                </p>
                <img :src="item.productImg" alt="img" class="w-[100%] h-[100%] object-cover" />
            </div>
        </div>

        <div class="flex flex-col space-y-3">
            <div class="flex w-[100%] justify-between mt-10 items-center">
                <h2 class="text-[#6C7275] text-[14px]">Total:</h2>
                <p class="flex items-center font-semibold text-[15px]">
                    <Naira /> 325,000.00
                </p>
            </div>
            <div class="flex w-[100%] justify-between mt-10 items-center">
                <h2 class="text-[#6C7275] text-[14px]">Payment method:</h2>
                <p class="font-semibold text-[15px]">Credit Card</p>
            </div>
            <div class="flex w-[100%] justify-between mt-10 items-center">
                <h2 class="text-[#6C7275] text-[14px]">Recipient's name:</h2>
                <p class="font-semibold text-[15px]">John Doe</p>
            </div>
            <div class="flex w-[100%] justify-between mt-10 items-center">
                <h2 class="text-[#6C7275] text-[14px]">Date:</h2>
                <p class="font-semibold text-[15px]">October 19, 2023</p>
            </div>
            <div class="flex w-[100%] justify-between lg:space-x-16 space-x-10 mt-10 items-center">
                <h2 class="text-[#6C7275] text-[14px]">Transaction ID:</h2>
                <p class="font-semibold text-[15px]">SH67696959-TY</p>
            </div>
        </div>

        <div class="flex justify-between lg:space-x-16 space-x-10 mt-10">
            <button class="text-[#fff] bg-[#000] py-2 px-4 font-semibold text-[14px] rounded-lg">
                View transaction
            </button>
            <router-link to="/track-order">
                <button class="text-[#fff] bg-[#000] py-2 px-4 font-semibold text-[14px] rounded-lg">
                    Delivery progress
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Naira from "../../components/icons/extras/Naira.vue";

export default defineComponent({
    name: "OrderComplete",
    props: {
        items: {
            type: Array,
            required: true,
        },
    },
    components: {
        Naira
    }
});
</script>

<style scoped>
/* Add any component-specific styles here */
</style>