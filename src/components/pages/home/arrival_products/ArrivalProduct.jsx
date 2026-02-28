import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../../../store/cartSlice";

function ArrivalProduct({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="arrival_product_container">
      <div className="arrival_product_container__img">
        <img src={product.images[0]} alt={product.productName} />
      </div>
      <div className="arrival_product_container__data">
        <h4>
          <Link to={"/product/" + product.id}>{product.productName}</Link>
        </h4>
        <p>${product.new_price}</p>
        <ul className="stars">
          {[...Array(product?.rating)].map((_, i) => (
            <li key={i}>
              <i className="pe-7s-star star"></i>
            </li>
          ))}
        </ul>
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
          <i className="pe-7s-cart cart"></i>
        </Link>
      </div>
    </div>
  );
}
export default ArrivalProduct;
