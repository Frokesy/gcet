import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/footwear/Home.vue";
import WristwatchHome from "../views/wristwatch/Home.vue";
import FurnitureHome from "../views/furniture/Home.vue";
import ClothesHome from "../views/clothes/Home.vue";
import TechHome from "../views/tech/Home.vue"
import SportsHome from "../views/sports/Home.vue"

//cart components
import FootwearCart from "../views/footwear/Cart.vue"
import WristwatchCart from "../views/wristwatch/Cart.vue"
import FurnitureCart from "../views/furniture/Cart.vue"
import ClothesCart from "../views/clothes/Cart.vue"
import TechCart from "../views/tech/Cart.vue"
import SportsCart from "../views/sports/Cart.vue"

//shop components
import FootwearShop from "../views/footwear/Shop.vue"
import WristwatchShop from "../views/wristwatch/Shop.vue"
import FurnitureShop from "../views/furniture/Shop.vue"
import ClothesShop from "../views/clothes/Shop.vue"
import TechShop from "../views/tech/Shop.vue"
import SportsShop from "../views/sports/Shop.vue"


const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/cart", name: "FootwearCart", component: FootwearCart },
    { path: "/shop", name: "FootwearShop", component: FootwearShop },

    //wristwatch template routes
    { path: "/tmp-2/home", name: "WristwatchHome", component: WristwatchHome },
    { path: "/tmp-2/cart", name: "WristwatchCart", component: WristwatchCart },
    { path: "/tmp-2/shop", name: "WristwatchShop", component: WristwatchShop },


    //furniture template routes
    { path: "/tmp-3/home", name: "FurnitureHome", component: FurnitureHome },
    { path: "/tmp-3/cart", name: "FurnitureCart", component: FurnitureCart },
    { path: "/tmp-3/shop", name: "FootwearFurnitureShopShop", component: FurnitureShop },


    //clothes template routes
    { path: "/tmp-4/home", name: "ClothesHome", component: ClothesHome },
    { path: "/tmp-4/cart", name: "ClothesCart", component: ClothesCart },
    { path: "/tmp-4/shop", name: "ClothesShop", component: ClothesShop },


    //tech template routes
    { path: "/tmp-5/home", name: "TechHome", component: TechHome },
    { path: "/tmp-5/cart", name: "TechCart", component: TechCart },
    { path: "/tmp-5/shop", name: "TechShop", component: TechShop },


    //sports template routes
    { path: "/tmp-6/home", name: "SportsHome", component: SportsHome },
    { path: "/tmp-6/cart", name: "SportsCart", component: SportsCart },
    { path: "/tmp-6/shop", name: "SportsShop", component: SportsShop },



    //  //footwear template routes
    //  { path: "/", element: <FootwearHome /> },
    //  { path: "/contact", element: <Contact /> },
    //  { path: "/profile", element: <AccountProfile /> },
    //  { path: "/track-order", element: <TrackOrder /> },

    //  { path: "/auth/signup", element: <Signup /> },
    //  { path: "/auth/login", element: <Login /> },

    //  { path: "/tmp-2/contact", element: <WristwatchContact /> },
    //  { path: "/tmp-2/shop", element: <WristwatchShop /> },
    //  { path: "/tmp-2/track-order", element: <TrackWatchOrders /> },

    //  { path: "/tmp-3/contact", element: <FurnitureContact /> },
    //  { path: "/tmp-3/shop", element: <FurnitureShop /> },
    //  { path: "/tmp-3/cart", element: <FurnitureCart /> },
    //  { path: "/tmp-3/track-order", element: <TrackFurnitureOrders /> },

    //  { path: "/tmp-4/contact", element: <ClothesContact /> },
    //  { path: "/tmp-4/shop", element: <ClothesShop /> },
    //  { path: "/tmp-4/cart", element: <ClothesCart /> },
    //  { path: "/tmp-4/track-order", element: <TrackClothOrders /> },

    //  { path: "/tmp-5/contact", element: <TechContact /> },
    //  { path: "/tmp-5/shop", element: <TechShop /> },
    //  { path: "/tmp-5/cart", element: <TechCart /> },
    //  { path: "/tmp-5/track-order", element: <TrackTechOrders /> },

    //  { path: "/tmp-6/contact", element: <SportsContact /> },
    //  { path: "/tmp-6/shop", element: <SportsShop /> },
    //  { path: "/tmp-6/cart", element: <SportsCart /> },
    //  { path: "/tmp-6/track-order", element: <TrackSportsOrders /> },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;