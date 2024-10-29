<template>
    <Header active="tech" />
    <ShopTemplate :products="items" themeColor="#3e4784" active="tech" />
    <Footer active="tech" />
</template>

<script>
import Five from "../../components/defaults/stars/Five.vue";
import ShopTemplate from "../../components/templates/ShopTemplate.vue";
import Header from "../../components/defaults/Header.vue"
import Footer from "../../components/defaults/Footer.vue"

export default {
    name: "FootwearShop",
    components: {
        Header,
        Footer,
        Five,
        ShopTemplate,
    },
    data() {
        return {
            items: this.getProducts(),
        };
    },
    methods: {
        getProducts() {
            return [
                {
                    id: 1,
                    productImg: "/assets/tech/th-two.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 2,
                    productImg: "/assets/tech/th-three.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 3,
                    productImg: "/assets/tech/th-four.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 4,
                    productImg: "/assets/tech/th-five.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 5,
                    productImg: "/assets/tech/th-six.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 6,
                    productImg: "/assets/tech/th-seven.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 7,
                    productImg: "/assets/tech/th-eight.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 8,
                    productImg: "/assets/tech/th-nine.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 9,
                    productImg: "/assets/tech/th-ten.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 10,
                    productImg: "/assets/tech/th-eleven.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 11,
                    productImg: "/assets/tech/th-twelve.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 12,
                    productImg: "/assets/tech/th-two.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 13,
                    productImg: "/assets/tech/th-three.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 14,
                    productImg: "/assets/tech/th-four.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 15,
                    productImg: "/assets/tech/th-five.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 16,
                    productImg: "/assets/tech/th-six.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 17,
                    productImg: "/assets/tech/th-seven.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 18,
                    productImg: "/assets/tech/th-eight.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 19,
                    productImg: "/assets/tech/th-nine.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
                {
                    id: 20,
                    productImg: "/assets/tech/th-ten.png",
                    name: "Skullcandy - Crusher anc 2 wireless headphones",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "gadgets",
                    quantity: 1,
                },
            ];
        },
    },
};
</script>

<style scoped>
/* Add any styles specific to this component here */
</style>