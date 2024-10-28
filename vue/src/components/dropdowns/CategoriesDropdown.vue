<template>
    <div>
      <div v-if="active === 'footwear'" class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div class="w-[90vw] mx-auto">
          <div class="w-[60%] grid grid-cols-4">
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Featured</h2>
              <p>Fresh Footwears</p>
              <p>Best Sellers</p>
              <p>Popular collections</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Sneakers</h2>
              <p>Nike Air Force</p>
              <p>New Balance</p>
              <p>Adidas Yeezy</p>
              <p>Nike Air Jordan 1</p>
              <p>Vans Old Skool</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Shoes</h2>
              <p>Loafers</p>
              <p>Oxford</p>
              <p>Brogues</p>
              <p>Derby</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Sports / Athletics</h2>
              <p>Running</p>
              <p>Basketball</p>
              <p>Tennis</p>
              <p>Soccer Cleats</p>
              <p>Hiking Boots</p>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else-if="active === 'wristwatch'" class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div class="w-[90vw] mx-auto">
          <div class="w-[70%] grid grid-cols-4">
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Featured</h2>
              <p>Luxury</p>
              <p>New Arrivals</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Luxury</h2>
              <p>Patek Phillipe</p>
              <p>Richard Mille</p>
              <p>Adidas Yeezy</p>
              <p>Audemars Piguet</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Sports</h2>
              <p>Mike</p>
              <p>Adidas</p>
              <p>G-shock</p>
              <p>Hublot</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Dress</h2>
              <p>Casio</p>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else-if="active === 'clothes'" class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div class="w-[90vw] mx-auto">
          <div class="w-[80%] grid grid-cols-5">
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Featured</h2>
              <p>New Arrivals</p>
              <p>Top selling</p>
              <p>Popular collection</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Casual</h2>
              <p>Jeans</p>
              <p>Blouses</p>
              <p>T-shirts</p>
              <p>Leggings</p>
              <p>Polo Shirts</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Formal</h2>
              <p>Blazers</p>
              <p>Suits</p>
              <p>Sheath Dresses</p>
              <p>Tailored Pantsuits</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Party</h2>
              <p>Statement Jackets</p>
              <p>Cocktail Dresses</p>
              <p>Jumpsuits</p>
              <p>Dress Shirts</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Gym</h2>
              <p>Tank Tops</p>
              <p>Sports Bras</p>
              <p>Athletic Shirts</p>
              <p>Compression Wear</p>
              <p>Shorts or Joggers</p>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else-if="active === 'furniture'" class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div class="w-[90vw] mx-auto">
          <div class="w-[80%] grid grid-cols-5">
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Featured</h2>
              <p>New Arrivals</p>
              <p>Top selling</p>
              <p>Popular collection</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Living Room</h2>
              <p>Sofas</p>
              <p>TV Stands</p>
              <p>Coffee Tables</p>
              <p>Ottomans</p>
              <p>Arm Chairs</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Bedroom</h2>
              <p>Beds/Bedframe</p>
              <p>Wardrobes</p>
              <p>Nightstands</p>
              <p>Armoires</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Kitchen</h2>
              <p>Dining Tables</p>
              <p>Bar Stools</p>
              <p>Kitchen Islands</p>
              <p>Buffets/Sideboards</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Commercial</h2>
              <p>Office Desks</p>
              <p>Conference Tables</p>
              <p>Ergonomic Chairs</p>
              <p>Book Shelves</p>
              <p>Bar Stools</p>
            </div>
          </div>
        </div>
      </div>
  
      <div v-else-if="active === 'tech'" class="bg-[#fff] shadow-xl w-[100%] py-10 fixed">
        <div class="w-[90vw] mx-auto">
          <div class="w-[80%] flex justify-between">
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Featured</h2>
              <p>New Arrivals</p>
              <p>Top selling</p>
              <p>Popular collection</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Phones</h2>
              <p>iPhone</p>
              <p>Samsung</p>
              <p>Oppo</p>
              <p>Xiaomi</p>
              <p>Redmi</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Tablet</h2>
              <p>iPad</p>
              <p>Samsung</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Monitors</h2>
              <p>Apple monitor</p>
              <p>Dell</p>
              <p>Hp</p>
              <p>Toshiba</p>
            </div>
            <div class="space-y-4 text-[14px]">
              <h2 class="font-semibold text-[16px] uppercase">Accessories</h2>
              <p>Power banks</p>
              <p>Wired Earbuds</p>
              <p>Wireless Headphones</p>
              <p>Phone cases</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      active: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any specific styles here if needed */
  </style>
  