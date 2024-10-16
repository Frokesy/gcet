import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./pages/footwear/contact";
import FootwearHome from "./pages/footwear/home";
import AccountProfile from "./pages/footwear/profile";
import Shop from "./pages/footwear/shop";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <FootwearHome /> },
    { path: "/contact", element: <Contact /> },
    { path: "/profile", element: <AccountProfile /> },
    { path: "/shop", element: <Shop /> }
  ]);
  return <RouterProvider router={router} />;
};

export default App;
