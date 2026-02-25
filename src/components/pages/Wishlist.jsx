import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../store/wishlistSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/cartSlice";
import { toast } from "react-toastify";

function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div className="wishlist">
      <table>
        <thead>
          <tr>
            <th>Remove</th>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Stock stock</th>
            <th>Add To Cart</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id}>
              <td>
                <FontAwesomeIcon
                  className="delete"
                  icon={faXmark}
                  size="xs"
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                />
              </td>
              <td>
                <Link to={"/product/" + item.id}>
                  <figure>
                    <img src={item.images[0]} alt={item.productName} />
                  </figure>
                </Link>
              </td>
              <td>
                <Link to={"/product/" + item.id}>{item.productName}</Link>
              </td>
              <td>{item.new_price}</td>
              <td className={item.stock == "Out Stock" ? "out_stock" : ""}>
                {item.stock}
              </td>
              <td>
                <Link
                  className="button"
                  to="/cart"
                  onClick={(e) => {
                    if (item.stock === "Out Stock") {
                      e.preventDefault();
                      toast.error("This product is out of stock!");
                      return;
                    }

                    dispatch(
                      addToCart({
                        id: item.id,
                        quantity: 1,
                      }),
                    );

                    toast.success("Product added to cart!");
                  }}
                >
                  ADD TO CART
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Wishlist;
