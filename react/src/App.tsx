import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/footwear/contact";
import FootwearHome from "./pages/footwear/home";
import AccountProfile from "./pages/footwear/profile";
import TrackOrder from "./pages/footwear/track-orders";
import WristwatchHome from "./pages/wristwatch/home";
import FurnitureHome from "./pages/furniture/home";
import ClothesHome from "./pages/clothes/home";
import TechHome from "./pages/tech/home";
import SportsHome from "./pages/sports/home";
import ClothesContact from "./pages/clothes/contact";
import WristwatchContact from "./pages/wristwatch/contact";
import FurnitureContact from "./pages/furniture/contact";
import TechContact from "./pages/tech/contact";
import SportsContact from "./pages/sports/contact";
import FootwearShop from "./pages/footwear/shop";
import WristwatchShop from "./pages/wristwatch/shop";
import FurnitureShop from "./pages/furniture/shop";
import ClothesShop from "./pages/clothes/shop";
import TechShop from "./pages/tech/shop";
import SportsShop from "./pages/sports/shop";
import FootwearCart from "./pages/footwear/cart";
import WristwatchCart from "./pages/wristwatch/cart";
import TechCart from "./pages/tech/cart";
import ClothesCart from "./pages/clothes/cart";
import FurnitureCart from "./pages/furniture/cart";
import SportsCart from "./pages/sports/cart";
import { AnimatePresence } from "framer-motion"
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import TrackWatchOrders from "./pages/wristwatch/track-orders";
import TrackFurnitureOrders from "./pages/furniture/track-orders";
import TrackClothOrders from "./pages/clothes/track-orders/TrackClothOrders";
import TrackTechOrders from "./pages/tech/track-orders";
import TrackSportsOrders from "./pages/sports/track-orders";


const App = () => {
  const router = createBrowserRouter([
    //footwear template routes
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <FootwearShop /> },
    { path: "/cart", element: <FootwearCart /> },
    { path: "/track-order", element: <TrackOrder /> },

    { path: "/auth/signup", element: <Signup /> },
    { path: "/auth/login", element: <Login /> },

    //wristwatch template routes
    { path: "/tmp-2/home", element: <WristwatchHome /> },
    { path: "/tmp-2/contact", element: <WristwatchContact /> },
    { path: "/tmp-2/shop", element: <WristwatchShop /> },
    { path: "/tmp-2/cart", element: <WristwatchCart /> },
    { path: "/tmp-2/track-order", element: <TrackWatchOrders /> },

    //furniture template routes
    { path: "/tmp-3/home", element: <FurnitureHome /> },
    { path: "/tmp-3/contact", element: <FurnitureContact /> },
    { path: "/tmp-3/shop", element: <FurnitureShop /> },
    { path: "/tmp-3/cart", element: <FurnitureCart /> },
    { path: "/tmp-3/track-order", element: <TrackFurnitureOrders /> },

    //clothes template routes
    { path: "/tmp-4/home", element: <ClothesHome /> },
    { path: "/tmp-4/contact", element: <ClothesContact /> },
    { path: "/tmp-4/shop", element: <ClothesShop /> },
    { path: "/tmp-4/cart", element: <ClothesCart /> },
    { path: "/tmp-4/track-order", element: <TrackClothOrders /> },

    //tech template routes
    { path: "/tmp-5/home", element: <TechHome /> },
    { path: "/tmp-5/contact", element: <TechContact /> },
    { path: "/tmp-5/shop", element: <TechShop /> },
    { path: "/tmp-5/cart", element: <TechCart /> },
    { path: "/tmp-5/track-order", element: <TrackTechOrders /> },

    //sports template routes
    { path: "/tmp-6/home", element: <SportsHome /> },
    { path: "/tmp-6/contact", element: <SportsContact /> },
    { path: "/tmp-6/shop", element: <SportsShop /> },
    { path: "/tmp-6/cart", element: <SportsCart /> },
    { path: "/tmp-6/track-order", element: <TrackSportsOrders /> },

  ]);
  return (
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />;
    </AnimatePresence>
  )
};

export default App;
