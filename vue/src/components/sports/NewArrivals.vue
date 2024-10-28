<template>
    <div>
        <hr class="w-[90vw] mx-auto" />
        <div class="lg:pt-[15vh] pt-14 w-[90vw] mx-auto">
            <h2 class="lg:text-[48px] text-[32px] text-[#194185]">New Arrivals</h2>

            <div
                class="w-[90vw] flex overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] lg:space-x-5 space-x-8">
                <div v-for="item in items" :key="item.id"
                    class="flex-shrink-0 flex flex-col relative space-y-1 lg:w-[320px] w-[174px]">
                    <div class="flex items-center justify-between w-[100%] absolute p-4">
                        <p
                            class="bg-[#fff] text-[#000] lg:text-[16px] text-[12px] uppercase py-1 px-4 rounded-lg font-semibold">
                            Hot
                        </p>
                        <div class="shadow-xl rounded-full bg-[#fff] p-1">
                            <Heart />
                        </div>
                    </div>
                    <img :src="item.productImg" :alt="item.name"
                        class="lg:w-[320px] w-[174px] lg:h-[445px] h-[270px]" />
                    <div class="pt-10 w-[100%]">
                        <button class="bg-[#039855] w-[100%] text-[#fff] lg:py-4 py-3 lg:rounded-xl rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                    <div class="pt-4">
                        <component :is="item.ratingIcon" />
                    </div>
                    <h2 class="uppercase lg:text-[14px] text-[10px] pt-2">{{ item.name }}</h2>
                    <p class="flex items-center lg:text-[14px] text-[10px]">
                        <Naira /> {{ item.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FiveBlueStars from "../../components/icons/extras/FiveBlueStars.vue"
import Heart from "../../components/icons/extras/Heart.vue"
import Naira from "../../components/icons/extras/Naira.vue"

export default {
    components: {
        FiveBlueStars,
        Heart,
        Naira,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    productImg: "/assets/sports/st-two.png",
                    name: "Arsenal Away Jersey 2024/2025",
                    ratingIcon: "FiveBlueStars",
                    price: "200,000.00",
                },
                {
                    id: 2,
                    productImg: "/assets/sports/st-three.png",
                    name: "Nike Predator Boots",
                    ratingIcon: "FiveBlueStars",
                    price: "200,000.00",
                },
                {
                    id: 3,
                    productImg: "/assets/sports/st-four.png",
                    name: "Wilson Basketball",
                    ratingIcon: "FiveBlueStars",
                    price: "200,000.00",
                },
                {
                    id: 4,
                    productImg: "/assets/sports/st-five.png",
                    name: "Nike Pegasus Trail 5 Gore-tex",
                    ratingIcon: "FiveBlueStars",
                    price: "200,000.00",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>