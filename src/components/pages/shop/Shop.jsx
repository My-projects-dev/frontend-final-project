import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../common/Pagination";
import Products from "./Products";
import datas from "../../../Datas";
import ProductTopbar from "./ProductTopbar";

const { products } = datas;

function Shop() {
  const [selected, setSelected] = useState("Sort by Default");
  const [sortedProduct, setSortedProduct] = useState(products);
  const [grid, setGrid] = useState(true);

  const { page } = useParams();
  const currentPage = Number(page) || 1;

  let perPage = 8;
  let end = perPage * currentPage;
  let start = end - perPage;
  let lastPage = Math.ceil(sortedProduct.length / perPage);

  useEffect(() => {
    let temp = [...products];

    switch (selected) {
      case "Sort by Default":
        break;

      case "Sort by Rated":
        temp.sort((a, b) => b.rating - a.rating);
        break;

      case "Sort by Latest":
        temp.sort((a, b) => b.id - a.id);
        break;

      case "Sort by Hight Price":
        temp.sort((a, b) => b.new_price - a.new_price);
        break;

      case "Sort by Low Price":
        temp.sort((a, b) => a.new_price - b.new_price);
        break;
    }

    setSortedProduct(temp);
  }, [selected]);

  return (
    <div className="shop_container">
      <ProductTopbar
        onSelect={setSelected}
        productCount={products.length}
        findProduct={sortedProduct.length}
        cellType={setGrid}
        grid={grid}
      />

      <Products products={sortedProduct.slice(start, end)} grid={grid} />
      <Pagination lastPage={lastPage} />
    </div>
  );
}

export default Shop;
