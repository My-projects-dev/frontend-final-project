import { Link } from "react-router-dom";

function ProductListCart({ product }) {
  return (
    <div className="product_list_cart">
      <div className="product_list_cart__img_container">
        <Link to={"/product/" + product?.id}>
          <img src={product?.images[0]} alt={product?.productName} />
        </Link>
        <div className="product_list_cart__img_container__shopping">
          <ul>
            <li>
              <Link to="/cart">
                <i className="pe-7s-cart"></i>
              </Link>
            </li>
            <li>
              <Link to="/compare">
                <i className="pe-7s-shuffle"></i>
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <i className="pe-7s-like"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="product_list_cart__data_container">
        <Link
          to={"/product/" + product?.id}
          className="product_list_cart__data_container__title"
        >
          {product?.productName}
        </Link>
        <p className="product_list_cart__data_container__price">
          ${product?.new_price}
        </p>
        <ul>
          {[...Array(product?.rating)].map((_, i) => (
            <li key={i}>
              <i className="pe-7s-star star"></i>
            </li>
          ))}
        </ul>
        <p className="product_list_cart__data_container__description">
          ${product?.description}
        </p>
      </div>
    </div>
  );
}
export default ProductListCart;
