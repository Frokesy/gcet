import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/footwear/contact";
import FootwearHome from "./pages/footwear/home";
import AccountProfile from "./pages/footwear/profile";
import Shop from "./pages/footwear/shop";
import Cart from "./pages/footwear/cart";
import TrackOrder from "./pages/footwear/track-orders";
import WristwatchHome from "./pages/wristwatch/home";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <Shop /> },
    { path: "/cart", element: <Cart /> },
    { path: "/track-order", element: <TrackOrder /> },
    { path: "/tmp-2/home", element: <WristwatchHome /> }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
