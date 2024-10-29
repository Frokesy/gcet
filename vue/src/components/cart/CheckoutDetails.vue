<template>
    <div class="mt-10 px-6 lg:px-0">
      <h2 class="text-[24px] font-semibold">Checkout Details</h2>
  
      <div class="mt-10 flex flex-col space-y-6">
        <h2 class="text-[20px]">Contact Information</h2>
        <div class="flex justify-between">
          <div class="flex flex-col space-y-2 w-[45%]">
            <label for="firstname" class="uppercase font-semibold text-[12px]">First name</label>
            <input
              type="text"
              placeholder="First name"
              class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
            />
          </div>
          <div class="flex flex-col space-y-2 w-[45%]">
            <label for="lastname" class="uppercase font-semibold text-[12px]">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div class="flex flex-col space-y-2 w-[100%]">
          <label for="phone" class="uppercase font-semibold text-[12px]">Phone Number</label>
          <input
            type="text"
            placeholder="Phone number"
            class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div class="flex flex-col space-y-2 w-[100%]">
          <label for="email" class="uppercase font-semibold text-[12px]">Email Address</label>
          <input
            type="email"
            placeholder="your email"
            class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div class="flex flex-col space-y-2 w-[100%]">
          <label for="country" class="uppercase font-semibold text-[12px]">Country *</label>
          <input
            type="text"
            placeholder="Country"
            class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div class="flex flex-col space-y-2 w-[100%]">
          <label for="street address" class="uppercase font-semibold text-[12px]">Street Address *</label>
          <input
            type="text"
            placeholder="Street Address"
            class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div class="flex flex-col space-y-2 w-[100%]">
          <label for="town/city" class="uppercase font-semibold text-[12px]">Town / City *</label>
          <input
            type="text"
            placeholder="Town / City"
            class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
          />
        </div>
        <div class="flex justify-between">
          <div class="flex flex-col space-y-2 w-[45%]">
            <label for="state" class="uppercase font-semibold text-[12px]">State</label>
            <input
              type="text"
              placeholder="state"
              class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
            />
          </div>
          <div class="flex flex-col space-y-2 w-[45%]">
            <label for="zip code" class="uppercase font-semibold text-[12px]">Zip Code</label>
            <input
              type="number"
              placeholder="Zip Code"
              class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <input type="checkbox" name="saveAddress" id="saveAddress" />
          <p class="uppercase text-[12px] font-semibold text-[#808080]">save this address</p>
        </div>
  
        <div class="bg-[#f9fafb] border border-[#808080] py-10 px-6 rounded-lg flex flex-col space-y-6">
          <h2 class="text-[20px] font-semibold">Payment Method</h2>
          <div class="flex justify-between py-3 px-6 bg-[#fff] border border-[#808080] rounded-lg">
            <div class="flex items-center space-x-3">
              <input type="radio" name="creditCard" id="creditCard" />
              <label for="creditCard" class="text-[12px] font-semibold uppercase">Pay by credit card</label>
            </div>
            <CreditCardIcon />
          </div>
          <div class="flex items-center space-x-3 bg-[#fff] border border-[#808080] py-3 px-6 rounded-lg">
            <input type="radio" name="paypal" id="paypal" />
            <label for="paypal" class="text-[12px] font-semibold uppercase">PayPal</label>
          </div>
          <hr />
          <div class="flex flex-col space-y-2 w-[100%]">
            <label for="card number" class="uppercase font-semibold text-[12px]">Card Number</label>
            <input
              type="number"
              placeholder="1234 1234 1234 1234"
              class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col space-y-2 w-[45%]">
              <label for="expiration date" class="uppercase font-semibold text-[12px]">Expiration Date</label>
              <input
                type="number"
                placeholder="MM/YY"
                class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none text-[14px] w-[100%] rounded-lg shadow-sm"
              />
            </div>
            <div class="flex flex-col space-y-2 w-[45%]">
              <label for="cvc" class="uppercase font-semibold text-[12px]">cvc</label>
              <input
                type="number"
                placeholder="cvc code"
                class="py-2 px-6 placeholder:uppercase border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
  
        <button
          @click="setActiveTab('cart')"
          class="bg-[#667085] text-[#fff] py-4 font-semibold rounded-lg"
        >
          Place Order
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import CreditCardIcon from "../../components/icons/extras/CreditCardIcon.vue"; // Adjust the path as necessary
  
  export default {
    components: {
      CreditCardIcon,
    },
    props: {
      setActiveTab: {
        type: Function,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  