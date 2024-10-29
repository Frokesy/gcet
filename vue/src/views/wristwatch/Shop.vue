<template>
    <Header active="wristwatch" />
    <ShopTemplate :products="items" themeColor="#ff4405" active="wristwatch" />
    <Footer active="wristwatch" />
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
                    productImg: "/assets/wristwatch/wt-two.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 2,
                    productImg: "/assets/wristwatch/wt-four.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 3,
                    productImg: "/assets/wristwatch/wt-five.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 4,
                    productImg: "/assets/wristwatch/wt-six.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 5,
                    productImg: "/assets/wristwatch/wt-seven.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 6,
                    productImg: "/assets/wristwatch/wt-eight.jpeg",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 7,
                    productImg: "/assets/wristwatch/wt-ten.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 8,
                    productImg: "/assets/wristwatch/wt-eleven.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 9,
                    productImg: "/assets/wristwatch/wt-twelve.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 10,
                    productImg: "/assets/wristwatch/wt-thirteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 11,
                    productImg: "/assets/wristwatch/wt-fourteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 12,
                    productImg: "/assets/wristwatch/wt-fifteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 13,
                    productImg: "/assets/wristwatch/wt-sixteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 14,
                    productImg: "/assets/wristwatch/wt-seventeen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 15,
                    productImg: "/assets/wristwatch/wt-eighteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 16,
                    productImg: "/assets/wristwatch/wt-nineteen.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 17,
                    productImg: "/assets/wristwatch/wt-twenty.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 18,
                    productImg: "/assets/wristwatch/wt-twenty-one.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 19,
                    productImg: "/assets/wristwatch/wt-twenty-two.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
                    quantity: 1,
                },
                {
                    id: 20,
                    productImg: "/assets/wristwatch/wt-one.png",
                    name: "Richard Mille E4",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "watch",
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