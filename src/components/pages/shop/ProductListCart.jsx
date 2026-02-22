import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/wishlistSlice";

function ProductListCart({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
  };
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
              <i
                className={`pe-7s-like ${isLiked ? "liked" : ""}`}
                onClick={handleWishlist}
              ></i>
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
          {product?.description}
        </p>
      </div>
    </div>
  );
}
export default ProductListCart;
