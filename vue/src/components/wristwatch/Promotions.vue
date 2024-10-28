<template>
    <div class="bg-[#faf9f6] py-[10vh]">
        <div class="w-[90vw] mx-auto flex">
            <div class="lg:w-[55%] bg-[#ffd6ae] lg:px-10 px-6 lg:py-20 py-10">
                <PromotionIcon />
                <p class="text-[#771A0D] font-bold uppercase lg:text-[16px] text-[12px] font-sans py-6">Promotion</p>
                <h2 class="lg:text-[40px] text-[24px] font-semibold pb-2">Hurry up! 30% OFF</h2>
                <p class="lg:text-[20px] text-[#333] font-sans">Thousands of high tech are waiting for you.</p>
                <p class="py-6 lg:text-[16px] text-[12px]">Offer expires in soon</p>
                <button class="bg-[#fff] py-2 px-6 rounded-xl font-semibold text-[#333] font-sans">Shop Now</button>
            </div>
            <div class="w-[45%] lg:block hidden">
                <img src="/assets/wristwatch/wt-nine.png" class="w-[100%]" alt="img" />
            </div>
        </div>
    </div>
</template>

<script>
import PromotionIcon from "../icons/extras/PromotionIcon.vue"

export default {
    name: "Promotions",
    components: {
        PromotionIcon,
    },
};
</script>

<style scoped>
/* Add any specific styles for this component if needed */
</style>