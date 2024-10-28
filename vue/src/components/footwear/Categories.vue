<template>
    <div>
        <hr class="w-[60vw] mx-auto" />
        <div class="pt-[15vh] w-[90vw] mx-auto">
            <h2 class="lg:text-[48px] text-[32px] font-bold uppercase">categories</h2>

            <div class="selector space-x-10 mt-6 lg:flex hidden">
                <button v-for="tab in tabs" :key="tab" @click="setActiveTab(tab)" :class="{
                    'bg-[#000] text-[#fff]': activeTab === tab,
                }" class="p-2 rounded-lg uppercase transition-all duration-300 ease-in-out">
                    {{ tab }}
                </button>
            </div>

            <div class="w-[90vw] flex overflow-x-auto mx-auto justify-between py-10 lg:py-[10vh] space-x-5">
                <div v-for="item in filteredItems" :key="item.id"
                    class="flex-shrink-0 flex flex-col space-y-1 w-[320px]">
                    <div v-if="item.id === 1" class="h-[40px] flex lg:hidden mb-10">
                        <h2 class="text-[16px] font-semibold uppercase bg-[#000] text-[#fff] p-2 rounded-lg">
                            {{ item.category }}
                        </h2>
                    </div>

                    <div class="flex items-center justify-between pb-4">
                        <p class="font-bold uppercase">Hot</p>
                        <div class="shadow-xl rounded-full bg-[#fff] p-1">
                            <Heart />
                        </div>
                    </div>

                    <img :src="item.productImg" :alt="item.name" class="w-[320px] h-[320px]" />

                    <div class="pt-10 w-[100%]">
                        <button class="bg-[#000] w-[100%] text-[#fff] py-4 rounded-xl">
                            Add to Cart
                        </button>
                    </div>

                    <div class="pt-4">
                        <Five />
                    </div>

                    <h2 class="uppercase text-[14px] pt-2">{{ item.name }}</h2>
                    <p class="flex items-center text-[14px]">
                        <Naira /> {{ item.price }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Five from '../../components/defaults/stars/Five.vue'
import Heart from '../icons/extras/Heart.vue'
import Naira from '../icons/extras/Naira.vue'

const tabs = ['sneakers', 'shoes', 'sports'];
const activeTab = ref('sneakers');

const items = [
    {
        id: 1,
        productImg: '/assets/footwear/ft-six.png',
        name: 'Nike air monarch iv',
        category: 'sneakers',
        price: '200,000.00',
    },
    {
        id: 2,
        productImg: '/assets/footwear/ft-seven.png',
        name: 'New balance 1906R',
        category: 'sneakers',
        price: '200,000.00',
    },
    {
        id: 3,
        productImg: "/assets/footwear/ft-eight.png",
        name: "Nike dunk low",
        price: "200,000.00",
        category: "sneakers",
    },
    {
        id: 4,
        productImg: "/assets/footwear/ft-nine.png",
        name: "New balance made in USA 990v6",
        price: "200,000.00",
        category: "sneakers",
    },
    {
        id: 5,
        productImg: "/assets/footwear/ft-six.png",
        name: "Nike air monarch iv",
        price: "200,000.00",
        category: "shoes",
    },
    {
        id: 6,
        productImg: "/assets/footwear/ft-seven.png",
        name: "New balance 1906R",
        price: "200,000.00",
        category: "shoes",
    },
    {
        id: 7,
        productImg: "/assets/footwear/ft-eight.png",
        name: "Nike dunk low",
        price: "200,000.00",
        category: "shoes",
    },
    {
        id: 8,
        productImg: "/assets/footwear/ft-nine.png",
        name: "New balance made in USA 990v6",
        price: "200,000.00",
        category: "shoes",
    },
    {
        id: 9,
        productImg: "/assets/footwear/ft-six.png",
        name: "Nike air monarch iv",
        price: "200,000.00",
        category: "sports",
    },
    {
        id: 10,
        productImg: "/assets/footwear/ft-seven.png",
        name: "New balance 1906R",
        price: "200,000.00",
        category: "sports",
    },
    {
        id: 11,
        productImg: "/assets/footwear/ft-eight.png",
        name: "Nike dunk low",
        price: "200,000.00",
        category: "sports",
    },
    {
        id: 12,
        productImg: "/assets/footwear/ft-nine.png",
        name: "New balance made in USA 990v6",
        price: "200,000.00",
        category: "sports",
    },
];

const setActiveTab = (tab) => {
    activeTab.value = tab;
};

const filteredItems = computed(() =>
    items.filter((item) => item.category === activeTab.value)
);
</script>

<style scoped>
/* Add any custom styles here */
</style>