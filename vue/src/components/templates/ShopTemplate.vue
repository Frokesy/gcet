<template>
    <div class="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
        <div class="flex space-x-6 w-[90vw] mx-auto">
            <div v-if="product" @click="resetProduct" class="flex items-center cursor-pointer space-x-2">
                <BackIcon />
                <p class="uppercase">Back</p>
            </div>
            <div v-else>
                <router-link :to="getBackLink(active)" class="flex items-center cursor-pointer space-x-2">
                    <BackIcon />
                    <p class="uppercase">Back</p>
                </router-link>
            </div>

            <div class="flex space-x-1 lg:text-[14px] text-[12px]">
                <p class="underline">Home</p>
                <p>/</p>
                <p class="underline">Men</p>
                <p v-if="product?.category" class="underline">/</p>
                <p v-if="product?.category" class="underline capitalize">{{ product.category }}</p>
                <p v-if="product?.category" class="underline">/</p>
                <p v-if="product?.name" class="underline">{{ product.name.slice(0, 10) }}...</p>
            </div>
        </div>

        <div v-if="!product">
            <div v-if="active === 'footwear'">
                <h2 class="lg:text-[64px] text-[30px] font-semibold px-6 lg:px-0 uppercase mt-10">
                    Men Shoes
                </h2>
                <div class="flex justify-between items-center">
                    <div
                        class="lg:w-[40%] mt-6 lg:mt-0 px-6 lg:px-0 lg:block pb-4 flex flex-col justify-end lg:bg-none bg-[url('/assets/footwear/ft-ten.png')] bg-cover lg:min-h-0 min-h-[410px]">
                        <h2 class="text-[40px] lg:block hidden font-semibold">
                            Shop our latest men's <br /> wear
                        </h2>
                        <h2 class="text-[32px] block lg:hidden font-semibold">
                            Shop our latest men's wear
                        </h2>
                        <p class="lg:text-[18px]">
                            Sign up for deals, new products and promotions
                        </p>
                    </div>
                    <div class="lg:block hidden w-[50%]">
                        <img src="/assets/footwear/ft-ten.png" alt="shop-img" />
                    </div>
                </div>
            </div>

            <div v-else-if="active === 'wristwatch'">
                <img src="/assets/wristwatch/cover.png" alt="shop-img"
                    class="w-[100%] lg:h-[470px] object-cover mt-10" />
            </div>

            <div v-else-if="active === 'furniture'">
                <img src="/assets/furniture/cover.png" alt="shop-img"
                    class="w-[100%] lg:h-[470px] object-cover mt-10" />
            </div>

            <div v-else-if="active === 'clothes'">
                <img src="/assets/clothes/cover.png" alt="shop-img" class="w-[100%] lg:h-[470px] object-cover mt-10" />
            </div>

            <div v-else-if="active === 'tech'">
                <img src="/assets/tech/th-one.png" alt="shop-img" class="w-[100%] lg:h-[470px] object-cover mt-10" />
            </div>

            <div v-else-if="active === 'sports'">
                <img src="/assets/sports/st-one.png" alt="shop-img" class="w-[100%] lg:h-[470px] object-cover mt-10" />
            </div>

            <div class="mt-10 w-[90vw] mx-auto">
                <!-- Desktop selector -->
                <div class="lg:flex hidden justify-between items-center">
                    <div class="flex items-center justify-between w-[15%]">
                        <p>Hide Filters</p>
                        <FilterIcon />
                    </div>
                    <div
                        class="input border border-[#ccc] flex items-center rounded-full py-1.5 px-5 w-[30%] bg-[#eee] space-x-3">
                        <SearchIcon />
                        <input type="text" placeholder="Search"
                            class="border-none outline-none placeholder:text-[#333] bg-inherit" />
                    </div>
                    <div class="flex items-center justify-between border border-[#808080] p-2 rounded-lg w-[15%]">
                        <p>Sort By</p>
                        <ArrowDown />
                    </div>
                </div>

                <!-- Mobile selector -->
                <div class="flex lg:hidden flex-col justify-between items-center">
                    <div class="flex items-center justify-between w-[100%]">
                        <p>Hide Filters</p>
                        <FilterIcon />
                    </div>
                    <div class="flex justify-between w-[100%] mt-6">
                        <div class="input flex items-center rounded-lg py-1 px-2 w-[45%] bg-[#eee] space-x-3">
                            <SearchIcon />
                            <input type="text" placeholder="Search"
                                class="border-none outline-none placeholder:text-[#333] bg-inherit w-[100%]" />
                        </div>
                        <div class="flex items-center justify-between p-1 rounded-lg w-[45%]">
                            <p>Sort By</p>
                            <ArrowDown />
                        </div>
                    </div>
                </div>

                <div class="flex justify-between lg:space-x-16 mt-10">
                    <div class="lg:flex hidden flex-col w-[15%]">
                        <h2>Selected filters</h2>
                        <button :style="{ backgroundColor: themeColor }"
                            class="p-2 w-12 text-[#fff] uppercase mt-3 mb-6">
                            All
                        </button>
                        <div class="space-y-8 mt-6 w-[100%]">
                            <div class="flex items-center justify-between">
                                <p>Gender</p>
                                <ArrowDown />
                            </div>
                            <div class="flex items-center justify-between">
                                <p>Type</p>
                                <ArrowDown />
                            </div>
                            <div class="flex items-center justify-between">
                                <p>Color</p>
                                <ArrowDown />
                            </div>
                            <div class="flex items-center justify-between">
                                <p>Brand</p>
                                <ArrowDown />
                            </div>
                            <div class="flex items-center justify-between">
                                <p>Collections</p>
                                <ArrowDown />
                            </div>
                            <PriceRangeSlider :min="0" :max="1000" @change="handlePriceChange" />
                        </div>
                    </div>

                    <div class="lg:w-[85%]">
                        <ShopCatalog :setProduct="setProduct" :items="products" />
                    </div>
                </div>
            </div>
        </div>

        <Product v-if="product" :active="active" :product="product" />
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import ArrowDown from "../icons/extras/ArrowDown.vue"
import SearchIcon from "../icons/SearchIcon.vue"
import BackIcon from "../icons/extras/BackIcon.vue"
import FilterIcon from "../icons/extras/FilterIcon.vue"
import PriceRangeSlider from '../shop/PriceRangeSlider.vue';
import ShopCatalog from '../shop/ShopCatalog.vue';
import Product from '../shop/Product.vue';

export default defineComponent({
    props: {
        products: {
            type: Array,
            required: true,
        },
        active: {
            type: String,
            required: true,
        },
        themeColor: {
            type: String,
            required: true,
        },
    },
    components: {
        ArrowDown, BackIcon, FilterIcon, PriceRangeSlider, ShopCatalog, Product, SearchIcon
    },
    setup(props) {
        const product = ref(undefined);
        const priceRange = ref({ min: 0, max: 1000 });

        const handlePriceChange = (min, max) => {
            priceRange.value = { min, max };
        };

        const resetProduct = () => {
            product.value = undefined;
        };

        const setProduct = (tab) => {
            product.value = tab;
        };

        const getBackLink = (active) => {
            const links = {
                footwear: '/',
                wristwatch: '/tmp-2/home',
                furniture: '/tmp-3/home',
                clothes: '/tmp-4/home',
                tech: '/tmp-5/home',
                sports: '/tmp-6/home',
            };
            return links[active] || '/';
        };

        return {
            product,
            priceRange,
            handlePriceChange,
            resetProduct,
            setProduct,
            getBackLink,
            props,
        };
    },
});
</script>

<style scoped>
/* Add any styles here if necessary */
</style>