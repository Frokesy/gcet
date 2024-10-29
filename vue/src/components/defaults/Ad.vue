<template>
  <div class="w-[100%] bg-[#000] text-[#fff] py-3">
    <div class="w-[90vw] lg:text-[15px] text-[12px] mx-auto flex justify-between">
      <div class="lg:block hidden"></div>
      <router-link to="/auth/signup">
        Signup and get 20% off your first order. Sign Up Now
      </router-link>
      <p @click="handleClose" class="cursor-pointer">X</p>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, defineEmits } from "vue";

const emit = defineEmits(['close']);
const handleClose = () => {
  emit('close');
};

</script>