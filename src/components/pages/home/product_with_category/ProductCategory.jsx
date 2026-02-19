import { useState } from "react";
import ProductCategoryItem from "./ProductCategoryItem";
import Products from "../../shop/Products";
import datas from "../../../../Datas";

const { products } = datas;

function ProductCategory() {
  const [selectedProduct, setSelectedProduct] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All Items");

  const uniqueCategories = products.filter(
    (item, index, self) =>
      index === self.findIndex((p) => p.category === item.category),
  );

  function selectProductWithCategory(categoryName) {
    const pr = products.filter((item) => item.category === categoryName);
    setSelectedProduct(pr);
  }

  return (
    <section className="product_category_section">
      <div className="product_categories">
        <ProductCategoryItem
          categoryName="All Items"
          className={activeCategory === "All Items" ? "active" : ""}
          onClick={() => {
            setSelectedProduct(products);
            setActiveCategory("All Items");
          }}
        />
        {uniqueCategories.map((item) => (
          <ProductCategoryItem
            key={item.id}
            categoryName={item.category}
            img={item.categoryImage}
            className={activeCategory === item.category ? "active" : ""}
            onClick={() => {
              selectProductWithCategory(item.category);
              setActiveCategory(item.category);
            }}
          />
        ))}
      </div>
      <Products products={selectedProduct.slice(0, 8)} />
    </section>
  );
}

export default ProductCategory;
