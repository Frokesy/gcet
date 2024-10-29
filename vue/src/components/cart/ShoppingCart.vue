<template>
    <div class="flex flex-col space-y-10 mt-10">
        <div v-if="loading">
            <h2>Loading Cart Items...</h2>
        </div>
        <div v-if="items.length > 0">
            <div v-for="item in items" :key="item.id" class="flex justify-between border-b-2 border-[#ccc] pb-4 px-6 pt-4">
                <div class="flex items-center space-x-6">
                    <img :src="item.productImg" :alt="item.name"
                        class="lg:w-[160px] w-[80px] lg:h-[115px] h-[57px] object-cover" />
                    <div class="flex flex-col space-y-3">
                        <h2 class="lg:text-[16px] text-[12px]">{{ item.name }}</h2>
                        <p class="lg:text-[16px] text-[12px]">Color: white</p>
                        <div class="flex items-center space-x-4">
                            <p class="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                                @click="decrementItem(item.id)">
                                -
                            </p>
                            <p class="lg:text-[16px] text-[12px]">{{ item.quantity }}</p>
                            <p class="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] text-[14px] rounded-full flex justify-center items-center bg-[#000] text-[#fff] cursor-pointer"
                                @click="incrementItem(item.id)">
                                +
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex lg:flex-col flex-col-reverse justify-between items-end">
                    <div @click="removeItem(item.id)" class="cursor-pointer">
                        <Bin />
                    </div>
                    <p class="flex items-center font-semibold space-x-2 text-[14px]">
                        <Naira />
                        {{ parseInt(item.price) * item.quantity }}
                    </p>
                </div>
            </div>
        </div>
        <div v-else class="flex flex-col items-center justify-center space-y-4 mt-6">
            <EmptyCart />
            <p class="text-center text-lg font-serif">Your Cart is empty</p>
        </div>
    </div>
</template>

<script>
import { ref, watch, onMounted } from "vue";
import { removeItemFromCart, updateItemQuantity } from "../../../utils/idbService";
import Naira from "../icons/extras/Naira.vue"
import EmptyCart from "../icons/extras/EmptyCart.vue"
import Bin from "../icons/extras/Bin.vue"

export default {
    props: {
        items: {
            type: Array,
            required: true,
        },
        onUpdateTotal: {
            type: Function,
            required: true,
        },
    },
    components: {
        Naira, EmptyCart, Bin
    },
    setup(props) {
        const items = ref([]);
        const loading = ref(true); // Set loading to true initially

        const calculateTotal = () => {
            const total = items.value.reduce(
                (acc, item) => acc + parseInt(item.price) * item.quantity,
                0
            );
            props.onUpdateTotal(total);
        };

        const incrementItem = async (id) => {
            const item = items.value.find((item) => item.id === id);
            if (item) {
                item.quantity += 1;
                await updateItemQuantity(id, item.quantity);
            }
        };

        const decrementItem = async (id) => {
            const updatedItems = items.value.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter((item) => item.quantity > 0);

            items.value = updatedItems;

            const item = updatedItems.find((item) => item.id === id);
            if (item) {
                await updateItemQuantity(id, item.quantity);
            }
        };

        const removeItem = (id) => {
            items.value = items.value.filter((item) => item.id !== id);
            removeItemFromCart(id);
        };

        onMounted(() => {
            if (props.items.length > 0) {
                items.value = props.items;
            }
            loading.value = false;
        });

        watch(items, calculateTotal, { deep: true });

        return {
            items,
            loading,
            incrementItem,
            decrementItem,
            removeItem,
        };
    },
};
</script>
