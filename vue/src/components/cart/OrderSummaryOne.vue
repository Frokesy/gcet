<template>
    <div class="lg:w-[30%] border border-[#ccc] lg:rounded-2xl p-6">
        <h2 class="text-[24px] font-semibold">Order Summary</h2>

        <div class="flex flex-col space-y-6 mt-6">
            <div class="flex justify-between p-3 rounded-lg border border-[#333]">
                <h2>Subtotal</h2>
                <p class="flex items-center font-semibold space-x-2 text-[14px]">
                    <Naira />
                    {{ total }}
                </p>
            </div>

            <div class="flex justify-between p-3 rounded-lg border border-[#333]">
                <div class="flex items-center space-x-3">
                    <input type="radio" v-model="selectedDelivery" value="deliveryFee" />
                    <h2>Delivery Fee</h2>
                </div>
                <p class="flex items-center font-semibold space-x-2 text-[14px]">
                    <Naira />
                    5,000.00
                </p>
            </div>

            <div class="flex justify-between p-3 rounded-lg border border-[#333]">
                <div class="flex items-center space-x-3">
                    <input type="radio" v-model="selectedDelivery" value="pickup" />
                    <h2>Pickup</h2>
                </div>
                <p class="flex items-center font-semibold space-x-2 text-[14px]">
                    <Naira />
                    5,000.00
                </p>
            </div>

            <hr />

            <div class="flex justify-between">
                <h2>Total</h2>
                <p class="flex items-center font-semibold space-x-2 text-[14px]">
                    <Naira />
                    {{ total + 5000 }}
                </p>
            </div>

            <div class="flex items-center justify-between">
                <div class="w-[65%] bg-[#ccc] flex items-center p-3 space-x-3 rounded-lg">
                    <CouponIcon />
                    <input type="text" placeholder="Add promo code" class="border-none outline-none bg-inherit w-[100%]"
                        v-model="promoCode" />
                </div>
                <div class="cursor-pointer w-[30%] text-[14px] text-center text-[#fff] p-2 rounded-lg"
                    :style="{ backgroundColor: themeColor }" @click="applyCoupon">
                    Apply Coupon
                </div>
            </div>

            <button
                class="lg:py-6 py-4 w-[100%] text-[#fff] space-x-3 flex items-center rounded-lg justify-center font-semibold"
                :style="{ backgroundColor: themeColor }" @click="proceedToCheckout">
                <p>Proceed to Checkout</p>
                <CheckoutIcon />
            </button>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import Naira from "../icons/extras/Naira.vue"
import CouponIcon from "../icons/extras/CouponIcon.vue"
import CheckoutIcon from "../icons/extras/CheckoutIcon.vue"

export default {
    props: {
        themeColor: {
            type: String,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
        setActiveTab: {
            type: Function,
            required: true,
        },
    },
    components: {
        Naira, CouponIcon, CheckoutIcon
    },
    setup(props) {
        const selectedDelivery = ref("deliveryFee");
        const promoCode = ref("");

        const applyCoupon = () => {
            console.log("Applying coupon:", promoCode.value);
        };

        const proceedToCheckout = () => {
            props.setActiveTab("checkout");
        };

        return { selectedDelivery, promoCode, applyCoupon, proceedToCheckout };
    },
};
</script>

<style scoped>
/* Add any specific styles here */
</style>