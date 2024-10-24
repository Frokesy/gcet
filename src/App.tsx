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

const App = () => {
  const router = createBrowserRouter([
    //footwear template routes
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <FootwearShop /> },
    { path: "/cart", element: <FootwearCart /> },
    { path: "/track-order", element: <TrackOrder /> },

    //wristwatch template routes
    { path: "/tmp-2/home", element: <WristwatchHome /> },
    { path: "/tmp-2/contact", element: <WristwatchContact /> },
    { path: "/tmp-2/shop", element: <WristwatchShop /> },
    { path: "/tmp-2/cart", element: <WristwatchCart /> },

    //furniture template routes
    { path: "/tmp-3/home", element: <FurnitureHome /> },
    { path: "/tmp-3/contact", element: <FurnitureContact /> },
    { path: "/tmp-3/shop", element: <FurnitureShop /> },
    { path: "/tmp-3/cart", element: <FurnitureCart /> },

    //clothes template routes
    { path: "/tmp-4/home", element: <ClothesHome /> },
    { path: "/tmp-4/contact", element: <ClothesContact /> },
    { path: "/tmp-4/shop", element: <ClothesShop /> },
    { path: "/tmp-4/cart", element: <ClothesCart /> },

    //tech template routes
    { path: "/tmp-5/home", element: <TechHome /> },
    { path: "/tmp-5/contact", element: <TechContact /> },
    { path: "/tmp-5/shop", element: <TechShop /> },
    { path: "/tmp-5/cart", element: <TechCart /> },

    //sports template routes
    { path: "/tmp-6/home", element: <SportsHome /> },
    { path: "/tmp-6/contact", element: <SportsContact /> },
    { path: "/tmp-6/shop", element: <SportsShop /> },
    { path: "/tmp-6/cart", element: <SportsCart /> },

  ]);
  return <RouterProvider router={router} />;
};

export default App;
