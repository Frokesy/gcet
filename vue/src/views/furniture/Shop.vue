<template>
    <Header active="furniture" />
    <ShopTemplate :products="items" themeColor="#0e9384" active="furniture" />
    <Footer active="furniture" />
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
                    productImg: "/assets/furniture/fur-three.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 2,
                    productImg: "/assets/furniture/fur-four.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 3,
                    productImg: "/assets/furniture/fur-five.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 4,
                    productImg: "/assets/furniture/fur-six.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 5,
                    productImg: "/assets/furniture/fur-seven.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 6,
                    productImg: "/assets/furniture/fur-eight.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 7,
                    productImg: "/assets/furniture/fur-nine.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 8,
                    productImg: "/assets/furniture/fur-ten.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 9,
                    productImg: "/assets/furniture/fur-eleven.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 10,
                    productImg: "/assets/furniture/fur-twelve.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 11,
                    productImg: "/assets/furniture/fur-thirteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 12,
                    productImg: "/assets/furniture/fur-fourteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 13,
                    productImg: "/assets/furniture/fur-fifteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 14,
                    productImg: "/assets/furniture/fur-sixteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 15,
                    productImg: "/assets/furniture/fur-seventeen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 16,
                    productImg: "/assets/furniture/fur-eighteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 17,
                    productImg: "/assets/furniture/fur-nineteen.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 18,
                    productImg: "/assets/furniture/fur-twenty.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 19,
                    productImg: "/assets/furniture/fur-twenty-one.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
                    quantity: 1,
                },
                {
                    id: 20,
                    productImg: "/assets/furniture/fur-twenty-two.png",
                    name: "Wooden Couch",
                    ratingIcon: Five,
                    price: "200,000.00",
                    category: "furniture",
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