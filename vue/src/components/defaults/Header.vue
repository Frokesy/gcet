<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

// Icons
import AccountIcon from "../icons/AccountIcon.vue";
import CartIcon from "../icons/CartIcon.vue";
import CaretDown from "../icons/CaretDown.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import ShopIcon from "../icons/ShopIcon.vue";
import MobileHamburger from "../icons/MobileHamburger.vue";

import CategoriesDropdown from '../dropdowns/CategoriesDropdown.vue';
import BrandDropdown from '../dropdowns/BrandDropdown.vue';
import HomeDropdown from '../dropdowns/HomeDropdown.vue';
import Drawer from './Drawer.vue';
import Ad from './Ad.vue';

// Props
const props = defineProps({
  active: {
    type: String,
    required: true
  }
});

// State management
const revealCategoryDropdown = ref(false);
const revealBrandDropdown = ref(false);
const revealHomeDropdown = ref(false);
const openDrawer = ref(false);
const closeAd = ref(false);

// Router instance
const router = useRouter();

// Toggle functions
function toggleDropdown(target) {
  revealHomeDropdown.value = target === 'home' ? !revealHomeDropdown.value : false;
  revealCategoryDropdown.value = target === 'category' ? !revealCategoryDropdown.value : false;
  revealBrandDropdown.value = target === 'brand' ? !revealBrandDropdown.value : false;
}

console.log(props.active)

</script>

<template>
  <div class="border-b-2 border-[#ccc] shadow-md fixed w-full z-50 bg-white">
    <Ad v-if="!closeAd" @close="closeAd = true" />

    <div class="w-[90vw] mx-auto py-3 flex justify-between items-center">
      <!-- Logo and Links -->
      <div class="flex items-center space-x-10">
        <router-link to="/">
          <img src="/assets/logo.png" alt="logo" class="max-w-[48px] max-h-[48px]" />
        </router-link>

        <!-- Desktop Dropdown Links -->
        <div class="lg:flex hidden space-x-8">
          <div @click="toggleDropdown('home')"
            class="flex items-center space-x-2 cursor-pointer hover:text-[#363f72] hover:font-semibold">
            <h2>Home</h2>
            <CaretDown />
          </div>

          <div @click="toggleDropdown('category')"
            class="flex items-center space-x-2 cursor-pointer hover:text-[#363f72] hover:font-semibold">
            <h2>Categories</h2>
            <CaretDown />
          </div>

          <div @click="toggleDropdown('brand')"
            class="flex items-center space-x-2 cursor-pointer hover:text-[#363f72] hover:font-semibold">
            <h2>Brands</h2>
            <CaretDown />
          </div>

          <router-link v-if="props.active === 'footwear'" to="/footwear/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
          <router-link v-if="props.active === 'wristwatch'" to="/wristwatch/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
          <router-link v-if="props.active === 'furniture'" to="/furniture/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
          <router-link v-if="props.active === 'clothes'" to="/clothes/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
          <router-link v-if="props.active === 'tech'" to="/tech/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
          <router-link v-if="props.active === 'sports'" to="/sports/contact"
            class="hover:text-[#363f72] hover:font-semibold">
            Contact Us
          </router-link>
        </div>
      </div>

      <!-- Mobile Hamburger Icon -->
      <div class="lg:hidden block" @click="openDrawer = true">
        <MobileHamburger />
      </div>

      <!-- Desktop Icons -->
      <div class="lg:flex hidden items-center space-x-8">
        <div class="input border flex items-center rounded-full py-1.5 px-5 space-x-3">
          <SearchIcon />
          <input type="text" placeholder="Search" class="border-none outline-none placeholder:text-[#333] bg-inherit" />
        </div>

        <router-link v-if="props.active === 'footwear'" to="/shop">
          <ShopIcon />
        </router-link>
        <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/shop">
          <ShopIcon />
        </router-link>
        <router-link v-if="props.active === 'furniture'" to="/tmp-3/shop">
          <ShopIcon />
        </router-link>
        <router-link v-if="props.active === 'clothes'" to="/tmp-4/shop">
          <ShopIcon />
        </router-link>
        <router-link v-if="props.active === 'tech'" to="/tmp-5/shop">
          <ShopIcon />
        </router-link>
        <router-link v-if="props.active === 'sports'" to="/tmp-6/shop">
          <ShopIcon />
        </router-link>

        <router-link v-if="props.active === 'footwear'" to="/cart">
          <CartIcon />
        </router-link>
        <router-link v-if="props.active === 'wristwatch'" to="/tmp-2/cart">
          <CartIcon />
        </router-link>
        <router-link v-if="props.active === 'furniture'" to="/tmp-3/cart">
          <CartIcon />
        </router-link>
        <router-link v-if="props.active === 'clothes'" to="/tmp-4/cart">
          <CartIcon />
        </router-link>
        <router-link v-if="props.active === 'tech'" to="/tmp-5/cart">
          <CartIcon />
        </router-link>
        <router-link v-if="props.active === 'sports'" to="/tmp-6/cart">
          <CartIcon />
        </router-link>

        <router-link to="/profile">
          <AccountIcon />
        </router-link>
      </div>
    </div>

    <!-- Dropdowns -->
    <transition name="fade" mode="out-in">
      <HomeDropdown v-if="revealHomeDropdown" />
    </transition>
    <transition name="fade" mode="out-in">
      <CategoriesDropdown v-if="revealCategoryDropdown" :active="props.active" />
    </transition>
    <transition name="fade" mode="out-in">
      <BrandDropdown v-if="revealBrandDropdown" :active="props.active" />
    </transition>

    <!-- Drawer -->
    <Drawer v-if="openDrawer" :active="props.active" @close="openDrawer = false" :isDrawerOpen="openDrawer" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s, transform 0.6s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
