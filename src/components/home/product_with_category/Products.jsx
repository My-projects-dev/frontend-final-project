import { Link } from "react-router-dom";

function Products({ products }) {
  return (
    <div className="product_container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product__img_container">
            <figure>
              <img src={product.images[0]} alt={product.productName} />
            </figure>
            <div className="product__img_container__shopping">
              <ul>
                <li>
                  <Link to="/cart">
                    <i class="pe-7s-cart"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/compare">
                    <i class="pe-7s-shuffle"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <i class="pe-7s-like"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="product__data_container">
            <Link
              to={"/product/" + product.id}
              className="product__data_container__title"
            >
              {product.productName}
            </Link>
            <p className="product__data_container__price">{product.price}</p>
            <ul>
              {[...Array(product.rating)].map((_, i) => (
                <li>
                  <i key={i} className="pe-7s-star star"></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Products;
