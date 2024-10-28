<template>
    <div class="bg-[#000] mt-[15vh] text-[#fff] pt-[10vh]">
        <h2 class="lg:text-[48px] text-[32px] font-bold w-[90vw] mx-auto uppercase">
            reviews
        </h2>

        <div class="flex overflow-x-auto justify-between py-[10vh] space-x-14 lg:px-20 px-6">
            <div v-for="item in items" :key="item.id"
                class="flex-shrink-0 flex flex-col space-y-1 lg:w-[400px] w-[250px]">
                <component :is="item.rating" />
                <div class="flex items-center space-x-2 pt-3">
                    <h2 class="font-semibold text-[20px]">{{ item.name }}</h2>
                    <Greentick />
                </div>
                <p class="pt-3 lg:text-[15px] text-[14px]">{{ item.comment }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import Three from "../defaults/stars/Three.vue";
import Five from "../defaults/stars/Five.vue";
import FourandHalf from "../defaults/stars/FourandHalf.vue";
import ThreeandHalf from "../defaults/stars/ThreeandHalf.vue";
import Greentick from "../icons/extras/GreenTick.vue"

export default {
    name: "Reviews",
    components: {
        Five,
        FourandHalf,
        Three,
        ThreeandHalf,
        Greentick,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: "Yewande Jegede",
                    comment:
                        "The sneakers I ordered were exactly as described, and the fit is perfect. They’re stylish and comfortable, but my issue was with the delivery time. I’ll give them another try because the shoes are great.",
                    rating: "Five",
                },
                {
                    id: 2,
                    name: "Tobiloba Olanrewaju",
                    comment:
                        "I bought a pair of running shoes from this website, and I couldn’t be happier! Delivery was fast, and the customer service was responsive when I had questions about sizing. Definitely shopping here again!",
                    rating: "Five",
                },
                {
                    id: 3,
                    name: "Ruth Uzo",
                    comment:
                        "I ordered a pair of casual loafers. While the shoes are comfortable and stylish, If you’re willing to spend a little more, this is a good place to shop, but it might not be the best value.",
                    rating: "Three",
                },
                {
                    id: 4,
                    name: "Moon Gray",
                    comment:
                        "I ordered a pair of casual loafers. While the shoes are comfortable and stylish, If you’re willing to spend a little more, this is a good place to shop, but it might not be the best value.",
                    rating: "ThreeandHalf",
                },
                {
                    id: 5,
                    name: "Tobiloba Olanrewaju",
                    comment:
                        "I bought a pair of running shoes from this website, and I couldn’t be happier! Delivery was fast, and the customer service was responsive when I had questions about sizing. Definitely shopping here again!",
                    rating: "FourandHalf",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>