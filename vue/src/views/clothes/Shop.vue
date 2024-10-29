<template>
    <Header active="clothes" />
    <ShopTemplate :products="items" themeColor="#553a32" active="clothes" />
    <Footer active="clothes" />
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
                    productImg: "/assets/clothes/cl-one.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 2,
                    productImg: "/assets/clothes/cl-two.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 3,
                    productImg: "/assets/clothes/cl-three.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 4,
                    productImg: "/assets/clothes/cl-four.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 5,
                    productImg: "/assets/clothes/cl-five.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 6,
                    productImg: "/assets/clothes/cl-six.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 7,
                    productImg: "/assets/clothes/cl-seven.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 8,
                    productImg: "/assets/clothes/cl-eight.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 9,
                    productImg: "/assets/clothes/cl-nine.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 10,
                    productImg: "/assets/clothes/cl-ten.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 11,
                    productImg: "/assets/clothes/cl-eleven.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 12,
                    productImg: "/assets/clothes/cl-sixteen.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 13,
                    productImg: "/assets/clothes/cl-seventeen.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 14,
                    productImg: "/assets/clothes/cl-eighteen.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 15,
                    productImg: "/assets/clothes/cl-nineteen.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 16,
                    productImg: "/assets/clothes/cl-twenty.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 17,
                    productImg: "/assets/clothes/cl-twenty-one.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 18,
                    productImg: "/assets/clothes/cl-twenty-two.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 19,
                    productImg: "/assets/clothes/cl-twenty-three.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
                    quantity: 1,
                },
                {
                    id: 20,
                    productImg: "/assets/clothes/cl-twenty-four.png",
                    name: "T-shirt with Tape Details",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "clothes",
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