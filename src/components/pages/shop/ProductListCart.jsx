import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../store/wishlistSlice";
import { addToCart } from "../../../store/cartSlice";

function ProductListCart({ product }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  const isLiked = wishlist.some((item) => item.id === product.id);

  const handleWishlist = () => {
    if (isLiked) {
      dispatch(removeFromWishlist(product.id));
      toast.warning("Product removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Product added to wishlist");
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
              <Link
                to="/cart"
                onClick={(e) => {
                  if (product.stock === "Out Stock") {
                    e.preventDefault();
                    toast.error("This product is out of stock!");
                    return;
                  }

                  dispatch(
                    addToCart({
                      id: product.id,
                      quantity: 1,
                    }),
                  );
                  toast.success("Product added to cart!");
                }}
              >
                <i className="pe-7s-cart"></i>
              </Link>
            </li>
            <li>
              <Link to={`/compare/${product?.id}`}>
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
