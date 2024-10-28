import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/footwear/Home.vue";
import WristwatchHome from "../views/wristwatch/Home.vue"
import FurnitureHome from "../views/furniture/Home.vue"

const routes = [
    { path: "/", name: "Home", component: Home },

    //wristwatch template routes
    { path: "/tmp-2/home", name: "WristwatchHome", component: WristwatchHome },

    //furniture template routes
    { path: "/tmp-3/home", name: "FurnitureHome", component: FurnitureHome },
    //  //footwear template routes
    //  { path: "/", element: <FootwearHome /> },
    //  { path: "/contact", element: <Contact /> },
    //  { path: "/profile", element: <AccountProfile /> },
    //  { path: "/shop", element: <FootwearShop /> },
    //  { path: "/cart", element: <FootwearCart /> },
    //  { path: "/track-order", element: <TrackOrder /> },

    //  { path: "/auth/signup", element: <Signup /> },
    //  { path: "/auth/login", element: <Login /> },

    //  { path: "/tmp-2/contact", element: <WristwatchContact /> },
    //  { path: "/tmp-2/shop", element: <WristwatchShop /> },
    //  { path: "/tmp-2/cart", element: <WristwatchCart /> },
    //  { path: "/tmp-2/track-order", element: <TrackWatchOrders /> },

    //  { path: "/tmp-3/contact", element: <FurnitureContact /> },
    //  { path: "/tmp-3/shop", element: <FurnitureShop /> },
    //  { path: "/tmp-3/cart", element: <FurnitureCart /> },
    //  { path: "/tmp-3/track-order", element: <TrackFurnitureOrders /> },

    //  //clothes template routes
    //  { path: "/tmp-4/home", element: <ClothesHome /> },
    //  { path: "/tmp-4/contact", element: <ClothesContact /> },
    //  { path: "/tmp-4/shop", element: <ClothesShop /> },
    //  { path: "/tmp-4/cart", element: <ClothesCart /> },
    //  { path: "/tmp-4/track-order", element: <TrackClothOrders /> },

    //  //tech template routes
    //  { path: "/tmp-5/home", element: <TechHome /> },
    //  { path: "/tmp-5/contact", element: <TechContact /> },
    //  { path: "/tmp-5/shop", element: <TechShop /> },
    //  { path: "/tmp-5/cart", element: <TechCart /> },
    //  { path: "/tmp-5/track-order", element: <TrackTechOrders /> },

    //  //sports template routes
    //  { path: "/tmp-6/home", element: <SportsHome /> },
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