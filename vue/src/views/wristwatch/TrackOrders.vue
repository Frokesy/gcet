<template>
    <Header active="wristwatch" />
    <div class="pt-[15vh] pb-10 lg:w-[90vw] mx-auto">
        <div class="flex space-x-6 w-[90vw] mx-auto">
            <router-link to="/tmp-2/home" class="flex items-center cursor-pointer space-x-2">
                <BackIcon />
                <p class="uppercase">Back</p>
            </router-link>
            <div class="flex space-x-1 lg:text-[14px] text-[12px]">
                <p class="underline">Home</p>
                <p>/</p>
                <p class="underline">Tracking</p>
            </div>
        </div>

        <div class="flex lg:flex-row flex-col justify-between">
            <div class="bg-[#f2f4f7] p-6 mt-10 lg:w-[40%]">
                <h2 class="lg:text-[40px] text-[26px] font-semibold">Tracking Details</h2>

                <div class="lg:w-[80%] flex justify-between items-center mt-4">
                    <h2 class="text-[#333]">Status</h2>
                    <button class="bg-[#925f1b] text-[#fff] p-2 rounded-lg">
                        Ongoing Delivery
                    </button>
                </div>

                <div class="flex mt-6 border-l-4 ml-2 relative border-[#039855] pb-10">
                    <div class="absolute -left-4">
                        <WhiteTick />
                    </div>
                    <div class="flex flex-col ml-10">
                        <h2>Payment complete</h2>
                        <p>Order complete and payment confirmed</p>
                    </div>
                </div>

                <div class="flex border-l-4 ml-2 relative border-[#039855] pb-10">
                    <div class="absolute -left-4">
                        <WhiteTick />
                    </div>
                    <div class="flex flex-col ml-10">
                        <h2>Payment complete</h2>
                        <p>Order complete and payment confirmed</p>
                    </div>
                </div>

                <div class="flex border-l-2 ml-2 relative border-[#ccc] pb-10">
                    <div class="absolute -left-5">
                        <DeliveryInProgress />
                    </div>
                    <div class="flex flex-col ml-10">
                        <h2>Payment complete</h2>
                        <p>Order complete and payment confirmed</p>
                    </div>
                </div>

                <div class="flex ml-2 relative pb-10">
                    <div class="absolute -left-4">
                        <DefaultDelivery />
                    </div>
                    <div class="flex flex-col ml-10">
                        <h2>Payment complete</h2>
                        <p>Order complete and payment confirmed</p>
                    </div>
                </div>

                <div class="mt-10">
                    <h2>Order Details</h2>
                    <div class="mt-3 lg:w-[90%] rounded-lg p-3 bg-[#eaecf0] space-y-3">
                        <div v-for="cartItem in cartItems" :key="cartItem.id" class="flex items-center space-x-4">
                            <p
                                class="w-[32px] h-[32px] rounded-full bg-[#000] text-[#fff] text-[14px] flex items-center justify-center">
                                {{ cartItem.quantity }}
                            </p>
                            <div>
                                <p>{{ cartItem.name }}</p>
                                <p class="text-[14px] text-[#808080]">Color: Brown</p>
                            </div>
                        </div>

                        <div class="flex space-x-20 text-[20px] pt-10">
                            <h2>Total</h2>
                            <p class="flex items-center">
                                <Naira /> {{ total }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:w-[60%]">
                <img src="/assets/delivery-map.png" alt="img" class="w-[100%]" />
            </div>
        </div>
    </div>
    <Footer active="wristwatch" />
</template>

<script>
import { ref, onMounted } from "vue";
import BackIcon from "../../components/icons/extras/BackIcon.vue"
import DefaultDelivery from "../../components/icons/extras/DefaultDelivery.vue"
import DeliveryInProgress from "../../components/icons/extras/DeliveryInProgress.vue"
import Naira from "../../components/icons/extras/Naira.vue"
import WhiteTick from "../../components/icons/extras/WhiteTick.vue"
import { getCartItems } from "../../../utils/idbService";
import Header from "../../components/defaults/Header.vue"
import Footer from "../../components/defaults/Footer.vue"

export default {
    setup() {
        const cartItems = ref([]);
        const total = ref(0);

        const fetchCartItems = async () => {
            const items = await getCartItems("wristwatch");
            cartItems.value = items;
        };

        const calculateTotal = () => {
            total.value = cartItems.value.reduce(
                (acc, item) => acc + parseInt(item.price) * item.quantity,
                0
            );
        };

        onMounted(async () => {
            await fetchCartItems();
            calculateTotal();
        });

        return {
            cartItems,
            total,
        };
    },
    components: {
        BackIcon, Naira, DefaultDelivery, DeliveryInProgress, WhiteTick, Header, Footer
    }
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>