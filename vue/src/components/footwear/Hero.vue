<template>
    <div
        class="lg:py-[10vh] w-[90vw] mx-auto pt-2 pb-10 flex lg:flex-row flex-col-reverse justify-between items-center">
        <div class="lg:w-[45%]">
            <h2 class="font-bold lg:text-[64px] text-[32px] uppercase">
                Shop quality <br /> footwears.
            </h2>
            <p class="text-[#808080] lg:mt-10 mt-2">
                Browse through our diverse range of meticulously crafted garments,
                designed to bring out your individuality and cater to your sense of
                style.
            </p>
            <div class="flex lg:justify-start justify-center">
                <router-link to="/shop" class="lg:w-[40%] w-[70%]">
                    <button class="bg-[#000] w-[100%] text-[#fff] lg:mt-6 mt-8 py-2 rounded-lg">
                        Shop Now
                    </button>
                </router-link>
            </div>
        </div>

        <div class="lg:w-[50%] flex lg:justify-end mt-20 overflow-hidden">
            <transition name="fade" mode="out-in">
                <img :key="currentImage" :src="images[currentImage]" :alt="`footwear-${currentImage}`"
                    class="lg:w-[429px] w-[240px] lg:h-[456px] h-[268px] object-cover"
                    v-bind="slideVariants[currentImage]" />
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const images = [
    "/assets/footwear/ft-one.png",
    "/assets/footwear/ft-eleven.png",
    "/assets/footwear/ft-twelve.png",
];

const currentImage = ref(0);

let interval;

onMounted(() => {
    interval = setInterval(() => {
        currentImage.value = (currentImage.value + 1) % images.length;
    }, 3000);
});

onBeforeUnmount(() => {
    clearInterval(interval);
});

// Define slide variants as reactive objects
const slideVariants = {
    initial: { x: '300px', opacity: 0, scale: 0.85 },
    animate: {
        x: '0',
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 10,
            duration: 0.6,
        },
    },
    exit: {
        x: '-300px',
        opacity: 0,
        scale: 0.9,
        transition: {
            type: 'tween',
            ease: 'easeIn',
            duration: 0.2,
        },
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<script>
export default {
    name: 'Hero',
};
</script>