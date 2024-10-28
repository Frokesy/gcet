<script>
import Acer from "../icons/brandIcons/Acer.vue";
import Adidas from "../icons/brandIcons/Adidas.vue";
import Apple from "../icons/brandIcons/Apple.vue";
import Casio from "../icons/brandIcons/Casio.vue";
import Dell from "../icons/brandIcons/Dell.vue";
import DrMartens from "../icons/brandIcons/DrMartens.vue";
import Gucci from "../icons/brandIcons/Gucci.vue";
import Helm from "../icons/brandIcons/Helm.vue";
import Hermes from "../icons/brandIcons/Hermes.vue";
import Hp from "../icons/brandIcons/Hp.vue";
import Huawei from "../icons/brandIcons/Huawei.vue";
import Ikea from "../icons/brandIcons/Ikea.vue";
import Knoll from "../icons/brandIcons/Knoll.vue";
import LuisVuitton from "../icons/brandIcons/LuisVuitton.vue";
import NewBalance from "../icons/brandIcons/NewBalance.vue";
import Nike from "../icons/brandIcons/Nike.vue";
import Patek from "../icons/brandIcons/Patek.vue";
import Pb from "../icons/brandIcons/Pb.vue";
import Prada from "../icons/brandIcons/Prada.vue";
import Puma from "../icons/brandIcons/Puma.vue";
import Red from "../icons/brandIcons/Red.vue";
import Reebok from "../icons/brandIcons/Reebok.vue";
import RichardMille from "../icons/brandIcons/RichardMille.vue";
import Role from "../icons/brandIcons/Role.vue";
import Samsung from "../icons/brandIcons/Samsung.vue";
import Seiko from "../icons/brandIcons/Seiko.vue";
import Sony from "../icons/brandIcons/Sony.vue";
import TagHeuer from "../icons/brandIcons/TagHeuer.vue";
// import WayFair from "../icons/brandIcons/WayFair.vue";
import Zara from "../icons/brandIcons/Zara.vue";


export default {
    name: "BrandDropdown",
    props: {
        active: {
            type: String,
            required: true,
        },
    },
    components: {
        Acer,
        Adidas,
        Apple,
        Casio,
        Dell,
        DrMartens,
        Gucci,
        Helm,
        Hermes,
        Hp,
        Huawei,
        Ikea,
        Knoll,
        LuisVuitton,
        NewBalance,
        Nike,
        Patek,
        Pb,
        Prada,
        Puma,
        Red,
        Reebok,
        RichardMille,
        Role,
        Samsung,
        Seiko,
        Sony,
        TagHeuer,
        // WayFair,
        Zara,
    },
};
</script>

<template>
    <div class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div v-if="active === 'footwear'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <Nike />
                <Adidas />
                <Puma />
                <DrMartens />
                <NewBalance />
                <Reebok />
                <Hermes />
            </div>
        </div>

        <div v-else-if="active === 'wristwatch'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <LuisVuitton />
                <TagHeuer />
                <RichardMille />
                <Casio />
                <Seiko />
                <Patek />
                <Role />
            </div>
        </div>

        <div v-else-if="active === 'furniture'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <Knoll />
                <Red />
                <Helm />
                <Ikea />
                <!-- <WayFair /> -->
                <Pb />
            </div>
        </div>

        <div v-else-if="active === 'clothes'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <Nike />
                <Prada />
                <Gucci />
                <Zara />
            </div>
        </div>

        <div v-else-if="active === 'tech'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <Hp />
                <Apple />
                <Samsung />
                <Huawei />
                <Sony />
                <Dell />
                <Acer />
            </div>
        </div>

        <div v-else-if="active === 'sports'" class="w-[90vw] mx-auto">
            <h2 class="uppercase font-semibold">Brands</h2>
            <div class="flex items-center justify-between mt-4">
                <Nike />
                <Adidas />
                <Puma />
                <DrMartens />
                <NewBalance />
                <Reebok />
                <Hermes />
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add any specific styles here if needed */
</style>