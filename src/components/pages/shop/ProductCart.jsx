import { Link } from "react-router-dom";

function ProductCart({ product }) {
  return (
    <div className="product">
      <div className="product__img_container">
        <figure>
          <img src={product?.images[0]} alt={product?.productName} />
        </figure>
        <div className="product__img_container__shopping">
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
      <div className="product__data_container">
        <Link
          to={"/product/" + product?.id}
          className="product__data_container__title"
        >
          {product?.productName}
        </Link>
        <p className="product__data_container__price">${product?.new_price}</p>
        <ul>
          {[...Array(product?.rating)].map((_, i) => (
            <li key={i}>
              <i className="pe-7s-star star"></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default ProductCart;
