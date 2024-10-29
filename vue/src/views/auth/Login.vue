<template>
    <div class="bg-[#eaecf0] min-h-screen relative flex lg:items-center lg:justify-center">
      <router-link to="/" class="absolute top-4 right-10">X</router-link>
      
      <div class="bg-[#fff] lg:min-w-[30%] min-w-[100%] lg:p-10 p-6">
        <div class="flex flex-col items-center justify-center">
          <img src="/assets/logo.png" alt="logo" />
          <h2 class="text-[30px] font-semibold py-6">Log in to your account</h2>
          <p class="text-[#808080]">Welcome back! Please enter your details</p>
        </div>
  
        <div class="space-y-6 mt-6">
          <!-- Email Input -->
          <div class="flex flex-col space-y-2 w-[100%]">
            <label for="email" class="text-[#333] text-[14px]">Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              class="py-2 px-6 border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
  
          <!-- Password Input -->
          <div class="flex flex-col space-y-2 w-[100%]">
            <label for="password" class="text-[#333] text-[14px]">Password *</label>
            <input
              type="password"
              placeholder="Enter your password"
              class="py-2 px-6 border border-[#ccc] outline-none w-[100%] text-[14px] rounded-lg shadow-sm"
            />
          </div>
  
          <!-- Remember Checkbox -->
          <div class="flex items-center space-x-3 w-[100%]">
            <input type="checkbox" id="remember" />
            <label for="remember" class="text-[#333] text-[14px]">
              Remember for 30 days
            </label>
          </div>
  
          <p class="text-[#6941C6]">Forgot Password?</p>
  
          <!-- Get Started Button -->
          <button class="bg-[#000] w-[100%] text-[#fff] lg:mt-6 mt-8 py-3 rounded-lg">
            Get Started
          </button>
  
          <!-- Sign in With Google Button -->
          <button
            class="border-[#ccc] border w-[100%] text-[#000] lg:mt-6 mt-8 py-2 rounded-lg flex items-center justify-center space-x-3"
          >
            <Google /> <span>Sign in With Google</span>
          </button>
  
          <!-- Signup Link -->
          <div class="flex space-x-3 text-[14px] justify-center">
            <p class="text-[#404040]">Don't have an account?</p>
            <router-link to="/auth/signup" class="text-[#6941C6]">Sign up</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Google from "../../components/icons/extras/Google.vue";
  
  export default {
    name: "Login",
    components: {
      Google,
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Scoped styles for this component */
  </style>
  