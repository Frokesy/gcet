<template>
    <div class="fixed top-0 h-screen font-serif z-50 w-screen">
        <div>
            <transition name="slide">
                <div v-if="isDrawerOpen"
                    class="flex flex-col space-y-[30px] bg-[#fff] h-screen w-[100%] pt-6 px-6 text-[18px] text-[#000]">
                    <div class="flex justify-end text-[14px]">
                        <p @click="handleClose"
                            class="border border-[#808080] flex items-center justify-center h-6 w-6 rounded-full">
                            x
                        </p>
                    </div>
                    <div class="space-y-4">
                        <div @click="handleClick" class="flex justify-between items-center">
                            <p>Home</p>
                            <div :class="['transition-transform duration-300', isRotated ? 'rotate-0' : '-rotate-90']">
                                <ArrowDown />
                            </div>
                        </div>
                        <transition name="fade">
                            <HomeDropdown v-if="revealHomeDropdown" />
                        </transition>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>Categories</p>
                        <div class="-rotate-90">
                            <ArrowDown />
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <p>Brands</p>
                        <div class="-rotate-90">
                            <ArrowDown />
                        </div>
                    </div>
                    <router-link v-if="props.active === 'footwear'" to="/shop">
                        Shop
                    </router-link>
                    <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/shop">
                        Shop
                    </router-link>
                    <router-link v-if="props.active === 'furniture'" to="/tmp-3/shop">
                        Shop
                    </router-link>
                    <router-link v-if="props.active === 'clothes'" to="/tmp-4/shop">
                        Shop
                    </router-link>
                    <router-link v-if="props.active === 'tech'" to="/tmp-5/shop">
                        Shop
                    </router-link>
                    <router-link v-if="props.active === 'sports'" to="/tmp-6/shop">
                        Shop
                    </router-link>

                    <router-link v-if="props.active === 'footwear'" to="/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'furniture'" to="/tmp-3/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'clothes'" to="/tmp-4/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'tech'" to="/tmp-5/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'sports'" to="/tmp-6/cart">
                        Cart
                    </router-link>
                    <router-link v-if="props.active === 'footwear'" to="/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>
                    <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>
                    <router-link v-if="props.active === 'furniture'" to="/tmp-3/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>
                    <router-link v-if="props.active === 'clothes'" to="/tmp-4/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>
                    <router-link v-if="props.active === 'tech'" to="/tmp-5/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>
                    <router-link v-if="props.active === 'sports'" to="/tmp-6/contact"
                        class="hover:text-[#363f72] hover:font-semibold">
                        Contact Us
                    </router-link>

                    <router-link v-if="props.active === 'footwear'" to="/track-order">
                        Track Delivery
                    </router-link>
                    <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/track-order">
                        Track Delivery
                    </router-link>
                    <router-link v-if="props.active === 'furniture'" to="/tmp-3/track-order"> Track Delivery
                    </router-link>
                    <router-link v-if="props.active === 'clothes'" to="/tmp-4/track-order">
                        Track Delivery
                    </router-link>
                    <router-link v-if="props.active === 'tech'" to="/tmp-5/track-order">
                        Track Delivery
                    </router-link>
                    <router-link v-if="props.active === 'sports'" to="/tmp-6/track-order">
                        Track Delivery
                    </router-link>
                    <router-link to="/profile">Profile</router-link>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import HomeDropdown from '../dropdowns/HomeDropdown.vue';
import ArrowDown from "../icons/extras/ArrowDown.vue";

import { defineEmits } from 'vue';

// Define the emits for your component
const emit = defineEmits(['close']);

// Method to handle close action
const handleClose = () => {
    emit('close'); // Emit the close event
};

// Props from parent component
const props = defineProps({
    setOpenDrawer: Function,
    active: String,
    isDrawerOpen: Boolean,
});

// Reactive state variables
const revealHomeDropdown = ref(false);
const isRotated = ref(false);

// Categories
const categories = ['footwear', 'wristwatch', 'furniture', 'clothes', 'tech', 'sports'];

// Get the correct path
const getPath = (base, activeCategory) => {
    return `/${activeCategory}/${base}`;
};

// Click handler for Home dropdown
const handleClick = () => {
    revealHomeDropdown.value = !revealHomeDropdown.value;
    isRotated.value = !isRotated.value;
};

// Watch the drawer open state
watch(() => props.isDrawerOpen, (newValue) => {
    isDrawerOpen.value = newValue;
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>