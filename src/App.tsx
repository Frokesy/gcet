import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/footwear/contact";
import FootwearHome from "./pages/footwear/home";
import AccountProfile from "./pages/footwear/profile";
import Shop from "./pages/footwear/shop";
import Cart from "./pages/footwear/cart";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <Shop /> },
    { path: "/cart", element: <Cart /> }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
