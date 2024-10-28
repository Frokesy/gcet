<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "HomeDropdown",
});
</script>

<template>
  <div class="bg-[#fff] lg:shadow-xl lg:left-[9vw] lg:py-4 lg:fixed">
    <div>
      <div class="space-y-2 lg:text-[15px] text-[14px] flex flex-col px-2">
        <RouterLink
          to="/"
          class="hover:bg-[#000] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 1
        </RouterLink>
        <RouterLink
          to="/tmp-2/home"
          class="hover:bg-[#ff4405] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 2
        </RouterLink>
        <RouterLink
          to="/tmp-3/home"
          class="hover:bg-[#0e9384] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 3
        </RouterLink>
        <RouterLink
          to="/tmp-4/home"
          class="hover:bg-[#553a32] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 4
        </RouterLink>
        <RouterLink
          to="/tmp-5/home"
          class="hover:bg-[#606baf] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 5
        </RouterLink>
        <RouterLink
          to="/tmp-6/home"
          class="hover:bg-[#039855] hover:text-[#fff] lg:pl-3 pr-6 py-2 rounded-md transition-all duration-300 ease-in-out"
        >
          Home Page 6
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any scoped styles here if needed */
</style>
