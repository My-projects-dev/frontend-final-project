import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import WishListPage from "./pages/WishListPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import LikePage from "./pages/LikePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, title: "Home" },
  { path: "/shop", element: <ShopPage />, title: "Shop" },
  { path: "/wishlist", element: <WishListPage />, title: "WishList" },
  { path: "/contact", element: <ContactPage />, title: "Contact" },
  { path: "/login", element: <LoginPage />, title: "Login" },
  { path: "/login", element: <RegisterPage />, title: "Register" },
  { path: "/like", element: <LikePage />, title: "Like" },
  { path: "/cart", element: <CartPage />, title: "Cart" },
  { path: "/checkout", element: <CheckoutPage />, title: "Checkout" },
  { path: "*", element: <NotFound />, title: "404" },
];

const languages = ["English", "French", "Italian", "Spanish"];

const currency = ["USD", "GPV", "ISO"];

const categories = [
  "All Category",
  "Product Item",
  "Product Item 02",
  "Product Item 03",
  "Product Item 04",
  "Product Item 05",
];

var delivery_price = "$200";

export default { routes, languages, currency, categories, delivery_price };
