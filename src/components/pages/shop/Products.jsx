import ProductCart from "./ProductCart";
import ProductListCart from "./ProductListCart";

function Products({ products = [], grid = true }) {
  return (
    <div className="product_container">
      {grid
        ? products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))
        : products.map((product) => (
            <ProductListCart key={product.id} product={product} />
          ))}
    </div>
  );
}
export default Products;
