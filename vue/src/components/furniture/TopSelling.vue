<template>
    <div class="py-10 mt-[10vh]">
        <h2 class="lg:text-[40px] text-[24px] text-center font-semibold text-[#000]">
            Top Selling
        </h2>

        <div class="w-[90vw] flex overflow-x-auto mx-auto justify-between lg:py-[10vh] py-10 space-x-4">
            <div v-for="item in items" :key="item.id"
                class="flex-shrink-0 flex flex-col space-y-3 lg:w-[262px] w-[180px]">
                <div
                    class="bg-[#fff] relative lg:w-[262px] w-[180px] flex flex-col lg:space-y-16 space-y-[15vh] items-center justify-center rounded-2xl">
                    <p
                        class="absolute top-6 left-3 bg-[#fee4e2] text-[#000] lg:text-[16px] text-[12px] uppercase py-1 px-4 rounded-lg font-semibold">
                        New
                    </p>
                    <img :src="item.productImg" :alt="item.name"
                        class="lg:w-[200px] lg:h-[300px] w-[110px] h-[146px] object-cover" />
                </div>

                <button class="bg-[#0e9384] text-[#fff] py-3 rounded-xl font-semibold">
                    Add to Cart
                </button>

                <component :is="item.ratingIcon" />

                <h2 class="lg:text-[16px] text-[12px] text-[#000]">{{ item.name }}</h2>

                <p class="flex items-center lg:text-[16px] text-[12px] text-[#000]">
                    N{{ item.price }}
                </p>
            </div>
        </div>

        <p class="flex justify-end w-[90vw] mx-auto underline items-center font-semibold lg:text-[18px]">
            More Products &gt;
        </p>
    </div>
</template>

<script>
import FourandHalf from "../defaults/stars/FourandHalf.vue"
import ThreeandHalf from "../defaults/stars/ThreeandHalf.vue"

export default {
    name: "TopSelling",
    components: {
        FourandHalf,
        ThreeandHalf,
    },
    data() {
        return {
            items: [
                {
                    id: 1,
                    productImg: "/assets/furniture/fur-eight.png",
                    name: "Wooden Chair",
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
                {
                    id: 2,
                    productImg: "/assets/furniture/fur-nine.png",
                    name: "Interior Chair",
                    ratingIcon: "ThreeandHalf",
                    price: "200,000.00",
                    discount: "-20%",
                },
                {
                    id: 3,
                    productImg: "/assets/furniture/fur-ten.png",
                    name: "Bamboo basket",
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
                {
                    id: 4,
                    productImg: "/assets/furniture/fur-eleven.png",
                    name: "Loveseat Sofa",
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
                {
                    id: 5,
                    productImg: "/assets/furniture/fur-twelve.png",
                    name: "Arm Chair",
                    ratingIcon: "FourandHalf",
                    price: "200,000.00",
                },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>