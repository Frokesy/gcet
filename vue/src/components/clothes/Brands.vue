<template>
    <div class="bg-[#fff] py-10">
        <h2 class="text-center text-[#667085] font-semibold uppercase">
            Available brands
        </h2>

        <div class="w-[90vw] mx-auto grid grid-cols-2 gap-6 lg:gap-0 place-items-center 
        lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
            <Nike />
            <div class="lg:scale-100 scale-75">
                <Prada />
            </div>
            <div class="lg:scale-100 scale-75">
                <Gucci />
            </div>
            <Zara />
        </div>
    </div>
</template>

<script>
import Nike from "../icons/brandIcons/Nike.vue"
import Prada from "../icons/brandIcons/Prada.vue"
import Gucci from "../icons/brandIcons/Gucci.vue"
import Zara from "../icons/brandIcons/Zara.vue"

export default {
    name: "Brands",
    components: {
        Nike,
        Prada,
        Gucci,
        Zara,
    },
};
</script>

<style scoped>
/* Add any specific styles if needed */
</style>