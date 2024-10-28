<template>
    <div class="w-[90vw] mx-auto py-[10vh]">
        <h2 class="lg:text-[48px] text-[32px] font-semibold text-center text-[#194185]">
            Shop by Categories
        </h2>

        <div class="flex items-center space-x-6 justify-between overflow-x-auto">
            <div v-for="item in items" :key="item.id" class="space-y-3 flex flex-col items-center mt-10 flex-shrink-0">
                <img :src="item.img" alt="img" class="rounded-full w-[251px] h-[251px] object-cover" />
                <p>{{ item.name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, name: "Football", img: "/assets/sports/st-nine.png" },
                { id: 2, name: "Tennis", img: "/assets/sports/st-ten.png" },
                { id: 3, name: "Gym", img: "/assets/sports/st-eight.png" },
                { id: 4, name: "Basketball", img: "/assets/sports/st-four.png" },
                { id: 5, name: "Boxing", img: "/assets/sports/st-eight.png" },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any custom styles if needed */
</style>