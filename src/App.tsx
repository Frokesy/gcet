import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/footwear/contact";
import FootwearHome from "./pages/footwear/home";
import AccountProfile from "./pages/footwear/profile";
import Shop from "./pages/footwear/shop";
import Cart from "./pages/footwear/cart";
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

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <Shop /> },
    { path: "/cart", element: <Cart /> },
    { path: "/track-order", element: <TrackOrder /> },


    { path: "/tmp-2/home", element: <WristwatchHome /> },
    { path: "/tmp-2/contact", element: <WristwatchContact /> },

    { path: "/tmp-3/home", element: <FurnitureHome /> },
    { path: "/tmp-3/contact", element: <FurnitureContact /> },


    { path: "/tmp-4/home", element: <ClothesHome /> },
    { path: "/tmp-4/contact", element: <ClothesContact /> },


    { path: "/tmp-5/home", element: <TechHome /> },
    { path: "/tmp-5/contact", element: <TechContact /> },

    
    { path: "/tmp-6/home", element: <SportsHome /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
