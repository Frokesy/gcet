<template>
    <div class="lg:pt-[15vh] pt-20 pb-10 w-[90vw] mx-auto lg:block flex flex-col-reverse">
        <div class="flex lg:flex-row flex-col justify-between lg:items-center">
            <h2 class="text-[#194185] lg:text-[64px] text-[28px] pt-6 lg:pt-0 font-semibold lg:w-[70%]">
                Get your favorite sports <br /> wears and equipment
            </h2>
            <div class="lg:w-[30%] pt-6 lg:pt-0 space-y-6">
                <p class="lg:text-[19px] text-[14px] text-[#161C2D]">
                    With SIKO PIECES, shop for your type of time piece, be it the
                    casual, sporty or luxurious piece. SIKO is here for you!
                </p>
                <router-link to="/tmp-6/shop">
                    <button
                        class="bg-[#039855] text-[#fff] py-3 rounded-lg lg:w-[40%] w-[100%] lg:text-[16px] text-[14px] font-semibold">
                        Shop Now
                    </button>
                </router-link>
            </div>
        </div>
        <div class="w-[100%] mt-10">
            <img src="/assets/sports/st-one.png" alt="img" class="w-[100%]" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Hero",
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>