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


const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/cart", name: "FootwearCart", component: FootwearCart },

    //wristwatch template routes
    { path: "/tmp-2/home", name: "WristwatchHome", component: WristwatchHome },
    { path: "/tmp-2/cart", name: "WristwatchCart", component: WristwatchCart },

    //furniture template routes
    { path: "/tmp-3/home", name: "FurnitureHome", component: FurnitureHome },
    { path: "/tmp-3/cart", name: "FurnitureCart", component: FurnitureCart },

    //clothes template routes
    { path: "/tmp-4/home", name: "ClothesHome", component: ClothesHome },
    { path: "/tmp-4/cart", name: "ClothesCart", component: ClothesCart },

    //tech template routes
    { path: "/tmp-5/home", name: "TechHome", component: TechHome },
    { path: "/tmp-5/cart", name: "TechCart", component: TechCart },

    //sports template routes
    { path: "/tmp-6/home", name: "SportsHome", component: SportsHome },
    { path: "/tmp-6/cart", name: "SportsCart", component: SportsCart },


    //  //footwear template routes
    //  { path: "/", element: <FootwearHome /> },
    //  { path: "/contact", element: <Contact /> },
    //  { path: "/profile", element: <AccountProfile /> },
    //  { path: "/shop", element: <FootwearShop /> },
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