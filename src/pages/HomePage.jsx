import Features from "../components/home/Features";
import ProductCategory from "../components/home/product_with_category/ProductCategory";
import Slider from "../components/home/Slider";

function HomePage() {
  return (
    <>
      <Slider />
      <Features />
      <ProductCategory />
    </>
  );
}

export default HomePage;
