<template>
    <div class="bg-[#fff] py-10">
        <h2 class="text-center text-[#667085] font-semibold uppercase">
            Available brands
        </h2>

        <div class="w-[90vw] mx-auto grid grid-cols-2 gap-10 lg:gap-0 place-items-center 
        lg:flex lg:flex-row lg:justify-between justify-center items-center pt-10">
            <LuisVuitton />
            <TagHeuer />
            <RichardMille />
            <Casio />
            <Seiko />
            <Patek />
            <div class="col-span-2">
                <Role />
            </div>
        </div>
    </div>
</template>

<script>
import Casio from "../icons/brandIcons/Casio.vue"
import TagHeuer from "../icons/brandIcons/TagHeuer.vue"
import LuisVuitton from "../icons/brandIcons/LuisVuitton.vue"
import RichardMille from "../icons/brandIcons/RichardMille.vue"
import Seiko from "../icons/brandIcons/Seiko.vue"
import Patek from "../icons/brandIcons/Patek.vue"
import Role from "../icons/brandIcons/Role.vue"

export default {
    name: "Brands",
    components: {
        Casio,
        LuisVuitton,
        Patek,
        RichardMille,
        Role,
        Seiko,
        TagHeuer,
    },
};
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>