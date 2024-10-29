<template>
    <div class="flex flex-col">
      <div class="flex justify-between">
        <div class="flex items-center">
          <Naira />
          {{ minValue }}
        </div>
        <div class="flex items-center">
          <Naira />
          {{ maxValue }}
        </div>
      </div>
      <div class="flex justify-between">
        <input
          type="range"
          :min="min"
          :max="max"
          :value="minValue"
          @input="handleMinChange"
          class="range-slider min-range"
        />
        <input
          type="range"
          :min="min"
          :max="max"
          :value="maxValue"
          @input="handleMaxChange"
          class="range-slider max-range"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, watch } from 'vue';
  import Naira from "../icons/extras/Naira.vue"
  
  export default defineComponent({
    name: 'PriceRangeSlider',
    props: {
      min: {
        type: Number,
        required: true,
      },
      max: {
        type: Number,
        required: true,
      },
      onChange: {
        type: Function,
        required: true,
      },
    },
    components: {
      Naira
    },
    setup(props) {
      const minValue = ref(props.min);
      const maxValue = ref(props.max);
  
      const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxValue.value);
        minValue.value = value;
        props.onChange(value, maxValue.value);
      };
  
      const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minValue.value);
        maxValue.value = value;
        props.onChange(minValue.value, value);
      };
  
      // Optional: Watch for changes in props.min and props.max to update internal state
      watch(
        () => props.min,
        (newValue) => {
          minValue.value = newValue;
        }
      );
  
      watch(
        () => props.max,
        (newValue) => {
          maxValue.value = newValue;
        }
      );
  
      return {
        minValue,
        maxValue,
        handleMinChange,
        handleMaxChange,
      };
    },
  });
  </script>
  
  <style scoped>
  /* Add your styles here if necessary */
  </style>
  