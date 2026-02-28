import ArrivalProducts from "../components/pages/home/arrival_products/ArrivalProducts";
import Blogs from "../components/pages/home/blogs/Blogs";
import Features from "../components/pages/home/feature/Features";
import LastOffer from "../components/pages/home/LastOffer";
import Offers from "../components/pages/home/offer/Offers";
import ProductCategory from "../components/pages/home/product_with_category/ProductCategory";
import ProductsWithScrool from "../components/pages/home/ProductsWithScrool";
import Slider from "../components/pages/home/Slider";

function HomePage() {
  return (
    <>
      <Slider />
      <Features />
      <ProductCategory />
      <Offers />
      <ProductsWithScrool title="See Our Latest" subtitle="Arrival Products" />
      <LastOffer />
      <ArrivalProducts />
      <Blogs />
    </>
  );
}

export default HomePage;
