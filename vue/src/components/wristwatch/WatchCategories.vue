<template>
    <div class="bg-[#faf9f6] py-[10vh]">
      <h2 class="lg:text-[48px] text-[32px] font-semibold lg:text-center px-6 lg:px-0">
        Shop by Categories
      </h2>
  
      <div class="w-[90vw] mx-auto flex lg:flex-row flex-col lg:space-x-4 mt-10">
        <!-- Luxury Watches Section -->
        <div class="p-6 bg-[#ffe6d5] space-y-4 rounded-lg lg:w-[50%]">
          <img 
            src="/assets/wristwatch/wt-three.png" 
            class="w-[100%] lg:h-[543px] h-[293px] object-cover" 
            alt="img" 
          />
          <h2 class="font-sans text-[24px] font-semibold">Luxury Watches</h2>
          <button 
            class="flex items-center font-sans bg-[#ff4405] font-semibold py-2 px-3 
            text-[14px] rounded-xl text-[#fff] space-x-3"
          >
            <span>Shop Category</span> 
            <CaretRight />
          </button>
        </div>
  
        <!-- Sports Watches Section -->
        <div class="lg:w-[50%] flex flex-col lg:space-y-4 space-y-10 lg:mt-0 mt-10">
          <div 
            class="p-6 bg-[#ffe6d5] flex lg:flex-row flex-col-reverse 
            justify-between rounded-lg"
          >
            <div class="flex flex-col lg:justify-end space-y-3">
              <h2 class="font-sans text-[24px] font-semibold">Sports Watches</h2>
              <div>
                <button 
                  class="flex items-center font-sans bg-[#ff4405] font-semibold py-2 px-3 
                  text-[14px] rounded-xl text-[#fff] space-x-3"
                >
                  <span>Shop Category</span> 
                  <CaretRight />
                </button>
              </div>
            </div>
            <img 
              src="/assets/wristwatch/wt-three.png" 
              class="lg:w-[255px] h-[296px] object-cover" 
              alt="img" 
            />
          </div>
  
          <!-- Duplicate Sports Watches Section -->
          <div 
            class="p-6 bg-[#ffe6d5] flex lg:flex-row flex-col-reverse 
            justify-between rounded-lg"
          >
            <div class="flex flex-col lg:justify-end space-y-3">
              <h2 class="font-sans text-[24px] font-semibold">Sports Watches</h2>
              <div>
                <button 
                  class="flex items-center font-sans bg-[#ff4405] font-semibold py-2 px-3 
                  text-[14px] rounded-xl text-[#fff] space-x-3"
                >
                  <span>Shop Category</span> 
                  <CaretRight />
                </button>
              </div>
            </div>
            <img 
              src="/assets/wristwatch/wt-three.png" 
              class="lg:w-[255px] h-[296px] object-cover" 
              alt="img" 
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import CaretRight from "../icons/extras/CaretRight.vue"
  
  export default {
    name: "WatchCategories",
    components: {
      CaretRight,
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles specific to this component here if needed */
  </style>
  