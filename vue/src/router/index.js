import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/footwear/Home.vue";
import WristwatchHome from "../views/wristwatch/Home.vue";
import FurnitureHome from "../views/furniture/Home.vue";
import ClothesHome from "../views/clothes/Home.vue";
import TechHome from "../views/tech/Home.vue";
import SportsHome from "../views/sports/Home.vue";

//cart components
import FootwearCart from "../views/footwear/Cart.vue";
import WristwatchCart from "../views/wristwatch/Cart.vue";
import FurnitureCart from "../views/furniture/Cart.vue";
import ClothesCart from "../views/clothes/Cart.vue";
import TechCart from "../views/tech/Cart.vue";
import SportsCart from "../views/sports/Cart.vue";

//shop components
import FootwearShop from "../views/footwear/Shop.vue";
import WristwatchShop from "../views/wristwatch/Shop.vue";
import FurnitureShop from "../views/furniture/Shop.vue";
import ClothesShop from "../views/clothes/Shop.vue";
import TechShop from "../views/tech/Shop.vue";
import SportsShop from "../views/sports/Shop.vue";

//contact components
import SportsContact from "../views/sports/Contact.vue";
import TechContact from "../views/tech/Contact.vue";
import ClothesContact from "../views/clothes/Contact.vue";
import FurnitureContact from "../views/furniture/Contact.vue";
import FootwearContact from "../views/footwear/Contact.vue";
import WristwatchContact from "../views/wristwatch/Contact.vue";

//track delivery components
import TrackClothOrders from "../views/clothes/TrackOrders.vue";
import TrackOrder from "../views/footwear/TrackOrders.vue";
import TrackFurnitureOrders from "../views/furniture/TrackOrders.vue";
import TrackSportsOrders from "../views/sports/TrackOrders.vue";
import TrackTechOrders from "../views/tech/TrackOrders.vue";
import TrackWatchOrders from "../views/wristwatch/TrackOrders.vue";

import AccountProfile from "../views/profile/AccountProfile.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/cart", name: "FootwearCart", component: FootwearCart },
    { path: "/shop", name: "FootwearShop", component: FootwearShop },
    { path: "/contact", name: "FootwearContact", component: FootwearContact },
    { path: "/track-order", name: "TrackOrder", component: TrackOrder },

    //wristwatch template routes
    { path: "/tmp-2/home", name: "WristwatchHome", component: WristwatchHome },
    { path: "/tmp-2/cart", name: "WristwatchCart", component: WristwatchCart },
    { path: "/tmp-2/shop", name: "WristwatchShop", component: WristwatchShop },
    {
        path: "/tmp-2/contact",
        name: "WristwatchContact",
        component: WristwatchContact,
    },
    {
        path: "/tmp-2/track-order",
        name: "TrackWatchOrders",
        component: TrackWatchOrders,
    },

    //furniture template routes
    { path: "/tmp-3/home", name: "FurnitureHome", component: FurnitureHome },
    { path: "/tmp-3/cart", name: "FurnitureCart", component: FurnitureCart },
    {
        path: "/tmp-3/shop",
        name: "FootwearFurnitureShopShop",
        component: FurnitureShop,
    },
    {
        path: "/tmp-3/contact",
        name: "FurnitureContact",
        component: FurnitureContact,
    },
    {
        path: "/tmp-3/track-order",
        name: "TrackFurnitureOrders",
        component: TrackFurnitureOrders,
    },

    //clothes template routes
    { path: "/tmp-4/home", name: "ClothesHome", component: ClothesHome },
    { path: "/tmp-4/cart", name: "ClothesCart", component: ClothesCart },
    { path: "/tmp-4/shop", name: "ClothesShop", component: ClothesShop },
    { path: "/tmp-4/contact", name: "ClothesContact", component: ClothesContact },
    {
        path: "/tmp-4/track-order",
        name: "TrackClothOrders",
        component: TrackClothOrders,
    },

    //tech template routes
    { path: "/tmp-5/home", name: "TechHome", component: TechHome },
    { path: "/tmp-5/cart", name: "TechCart", component: TechCart },
    { path: "/tmp-5/shop", name: "TechShop", component: TechShop },
    { path: "/tmp-5/contact", name: "TechContact", component: TechContact },
    {
        path: "/tmp-5/track-order",
        name: "TrackTechOrders",
        component: TrackTechOrders,
    },

    //sports template routes
    { path: "/tmp-6/home", name: "SportsHome", component: SportsHome },
    { path: "/tmp-6/cart", name: "SportsCart", component: SportsCart },
    { path: "/tmp-6/shop", name: "SportsShop", component: SportsShop },
    { path: "/tmp-6/contact", name: "SportsContact", component: SportsContact },
    {
        path: "/tmp-6/track-order",
        name: "TrackSportsOrders",
        component: TrackSportsOrders,
    },

    { path: "/profile", name: "AccountProfile", component: AccountProfile },

    //  { path: "/auth/signup", element: <Signup /> },
    //  { path: "/auth/login", element: <Login /> },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;