<template>
    <div class="w-[90vw] mx-auto mt-[15vh]">
        <h2 class="lg:text-[48px] text-[32px] font-bold uppercase">
            best sellers
        </h2>

        <div class="w-[90vw] flex overflow-x-auto mx-auto justify-between py-[10vh] space-x-4">
            <div v-for="item in items" :key="item.id" class="flex-shrink-0 flex flex-col space-y-1 w-[295px]">
                <img :src="item.productImg" :alt="item.name" class="w-[295px] h-[300px]" />
                <h2 class="font-semibold pt-3 text-[20px]">{{ item.name }}</h2>
                <div class="flex items-center space-x-3 text-[14px] text-[#808080] font-semibold">
                    <component :is="item.ratingIcon" />
                    <p>{{ item.rating }}/5</p>
                </div>
                <p class="flex items-center text-[20px] font-semibold">
                    <Naira /> {{ item.price }}
                </p>
            </div>
        </div>

        <div class="flex justify-center">
            <button class="bg-[#000] lg:w-[15%] w-[50%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
                View all
            </button>
        </div>
    </div>
</template>

<script>
import FourandHalf from "../defaults/stars/FourandHalf.vue";
import ThreeandHalf from "../defaults/stars/ThreeandHalf.vue";
import Naira from "../icons/extras/Naira.vue"

export default {
    name: "BestSellers",
    components: {
        FourandHalf,
        ThreeandHalf,
        Naira,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    productImg: "/assets/footwear/ft-two.png",
                    name: "Nike Zoom",
                    rating: 4.5,
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
                {
                    id: 2,
                    productImg: "/assets/footwear/ft-three.png",
                    name: "Dr Martens",
                    rating: 3.5,
                    ratingIcon: "ThreeandHalf",
                    price: "200,000.00",
                    discount: "-20%",
                },
                {
                    id: 3,
                    productImg: "/assets/footwear/ft-four.png",
                    name: "London Loafers",
                    rating: 4.5,
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
                {
                    id: 4,
                    productImg: "/assets/footwear/ft-five.png",
                    name: "Nike Air max 0s",
                    rating: 4.5,
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any scoped CSS here if needed */
</style>