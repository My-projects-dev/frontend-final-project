import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import WishListPage from "../pages/WishListPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import LikePage from "../pages/LikePage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ComparePage from "../pages/ComparePage";
import SingleProductPage from "../pages/SingleProductPage";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, title: "Home" },
  { path: "/shop/1", element: <ShopPage />, title: "Shop" },
  { path: "/wishlist", element: <WishListPage />, title: "WishList" },
  { path: "/contact", element: <ContactPage />, title: "Contact" },
  { path: "/login", element: <LoginPage />, title: "Login" },
  { path: "/register", element: <RegisterPage />, title: "Register" },
  { path: "/like", element: <LikePage />, title: "Like" },
  { path: "/cart", element: <CartPage />, title: "Cart" },
  { path: "/checkout", element: <CheckoutPage />, title: "Checkout" },
  { path: "/shop/:page", element: <ShopPage />, title: "Shop" },
  { path: "/shop", element: <Navigate to="/shop/1" replace /> },
  { path: "/compare/:id", element: <ComparePage />, title: "Compare" },
  {
    path: "/product/:id",
    element: <SingleProductPage />,
    title: "SingleProduct",
  },
  { path: "*", element: <NotFound />, title: "404" },
];
export default routes;
