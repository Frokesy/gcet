<template>
    <Header active="sports" />
    <ShopTemplate :products="items" themeColor="#039855" active="sports" />
    <Footer active="sports" />
</template>

<script>
import FiveBlueStars from "../../components/icons/extras/FiveBlueStars.vue";
import ShopTemplate from "../../components/templates/ShopTemplate.vue";
import Header from "../../components/defaults/Header.vue"
import Footer from "../../components/defaults/Footer.vue"

export default {
    name: "FootwearShop",
    components: {
        Header,
        Footer,
        FiveBlueStars,
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
                    productImg: "/assets/sports/st-two.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 2,
                    productImg: "/assets/sports/st-three.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 3,
                    productImg: "/assets/sports/st-four.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 4,
                    productImg: "/assets/sports/st-five.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 5,
                    productImg: "/assets/sports/st-six.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 6,
                    productImg: "/assets/sports/st-seven.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 7,
                    productImg: "/assets/sports/st-eight.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 8,
                    productImg: "/assets/sports/st-nine.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 9,
                    productImg: "/assets/sports/st-ten.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 10,
                    productImg: "/assets/sports/st-two.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 11,
                    productImg: "/assets/sports/st-four.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 12,
                    productImg: "/assets/sports/st-six.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 13,
                    productImg: "/assets/sports/st-three.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 14,
                    productImg: "/assets/sports/st-five.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 15,
                    productImg: "/assets/sports/st-ten.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 16,
                    productImg: "/assets/sports/st-eight.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 17,
                    productImg: "/assets/sports/st-nine.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 18,
                    productImg: "/assets/sports/st-seven.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 19,
                    productImg: "/assets/sports/st-four.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
                    quantity: 1,
                },
                {
                    id: 20,
                    productImg: "/assets/sports/st-ten.png",
                    name: "Sports Equipment",
                    ratingIcon: FiveBlueStars,
                    price: "200,000.00",
                    category: "sports",
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