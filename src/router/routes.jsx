import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import WishListPage from "../pages/WishListPage";
import LoginRegisterPage from "../pages/LoginRegisterPage";
import AccountPage from "../pages/AccountPage";
import ContactPage from "../pages/ContactPage";
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
  { path: "/account", element: <AccountPage />, title: "Account" },
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
  {
    path: "/login-register",
    element: <LoginRegisterPage />,
    title: "Login | Register",
  },
  { path: "*", element: <NotFound />, title: "404" },
];
export default routes;
