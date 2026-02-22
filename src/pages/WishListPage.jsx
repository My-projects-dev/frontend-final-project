import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/wishlistSlice";
import BreadCrumb from "../components/common/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function WishListPage() {
  const wishlist = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <>
      <BreadCrumb page="Wishlist" title="Product Related" />

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
                    icon={faXmark}
                    size="xs"
                    onClick={() => dispatch(removeFromWishlist(item.id))}
                  />
                </td>
                <td>
                  <figure>
                    <img src={item.images[0]} alt={item.productName} />
                  </figure>
                </td>
                <td>{item.productName}</td>
                <td>{item.new_price}</td>
                <td className={item.stock == "Out Stock" ? "out_stock" : ""}>
                  {item.stock}
                </td>
                <td>
                  <button>ADD TO CART</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WishListPage;
