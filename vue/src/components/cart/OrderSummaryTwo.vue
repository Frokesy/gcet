<template>
    <div class="lg:w-[30%] w-[90%] mx-auto lg:mx-0 mt-10 border border-[#ccc] rounded-2xl bg-[#f9fafb] p-6">
        <h2 class="text-[24px] font-semibold">Order Summary</h2>

        <div class="flex flex-col space-y-10 mt-10">
            <div v-for="item in items" :key="item.id" class="flex justify-between border-b-2 border-[#ccc] pb-4">
                <div class="flex items-center space-x-6">
                    <img :src="item.productImg" :alt="item.name" class="w-[80px] h-[57px] object-cover" />
                    <div class="flex flex-col space-y-3">
                        <h2 class="lg:text-[16px] text-[12px]">{{ item.name }}</h2>
                        <p class="lg:text-[16px] text-[12px]">Color: white</p>
                        <div class="flex items-center space-x-4">
                            <p @click="decrementItem(item.id)"
                                class="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full cursor-pointer flex justify-center items-center bg-[#000] text-[#fff]">
                                -
                            </p>
                            <p class="lg:text-[16px] text-[12px]">{{ item.quantity }}</p>
                            <p @click="incrementItem(item.id)"
                                class="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full cursor-pointer flex justify-center items-center bg-[#000] text-[#fff]">
                                +
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex lg:flex-col flex-col-reverse justify-between items-end">
                    <p @click="removeItem(item.id)" class="cursor-pointer">x</p>
                    <p class="flex items-center font-semibold space-x-2 text-[14px]">
                        <Naira />
                        {{ parseInt(item.price) * item.quantity }}
                    </p>
                </div>
            </div>
        </div>
        <hr />
        <div class="border-b-2 mt-6 border-[#ccc] py-6 flex justify-between items-center">
            <div class="flex items-center space-x-3">
                <CouponIcon />
                <p>Promo discount</p>
            </div>
            <p class="text-[#912018]">Not available</p>
        </div>
        <div class="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
            <p>Delivery Fee</p>
            <p class="font-semibold">Free</p>
        </div>
        <div class="border-b-2 border-[#ccc] py-6 flex justify-between items-center">
            <p>Subtotal</p>
            <p class="font-semibold flex items-center">
                <Naira /> {{ total }}
            </p>
        </div>
        <div class="border-b-2 border-[#ccc] py-6 flex justify-between items-center text-[20px]">
            <p>Total</p>
            <p class="font-semibold flex items-center">
                <Naira /> {{ total + 5000 }}
            </p>
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { removeItemFromCart, updateItemQuantity } from '../../../utils/idbService';
import Naira from "../icons/extras/Naira.vue"
import CouponIcon from "../icons/extras/CouponIcon.vue"


export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
    },
    components: {
        Naira, CouponIcon
    },
    setup(props) {
        const items = ref([...props.items]);
        const total = ref(props.total);

        const incrementItem = async (id) => {
            const item = items.value.find((item) => item.id === id);
            if (item) {
                item.quantity += 1;
                await updateItemQuantity(id, item.quantity);
                calculateTotal();
            }
        };

        const decrementItem = async (id) => {
            const updatedItems = items.value
                .map((item) =>
                    item.id === id && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0);
            items.value = updatedItems;

            const item = updatedItems.find((item) => item.id === id);
            if (item) {
                await updateItemQuantity(id, item.quantity);
                calculateTotal();
            }
        };

        const removeItem = (id) => {
            items.value = items.value.filter((item) => item.id !== id);
            removeItemFromCart(id);
            calculateTotal();
        };

        const calculateTotal = () => {
            total.value = items.value.reduce(
                (acc, item) => acc + item.quantity * parseInt(item.price),
                0
            );
        };

        watch(
            () => props.items,
            (newItems) => {
                items.value = [...newItems];
            }
        );

        onMounted(() => {
            if (props.items.length > 0) {
                items.value = [...props.items];
            }
        });

        return {
            items,
            total,
            incrementItem,
            decrementItem,
            removeItem,
        };
    },
};
</script>

<style scoped>
/* Add any relevant styles if necessary */
</style>