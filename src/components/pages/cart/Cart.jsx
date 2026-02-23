import { useSelector, useDispatch } from "react-redux";
import datas from "../../../Datas";
import { removeFromCart, updateQuantity } from "../../../store/cartSlice";
import { Link } from "react-router-dom";
import InputNumber from "../../common/InputNumber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const getProduct = (id) => datas.products.find((p) => p.id === id);

  const totalPrice = cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + product.new_price * item.quantity;
  }, 0);

  return (
    <div className="cart_container">
      <div className="cart_table_area">
        <table>
          <thead>
            <tr>
              <th>Remove</th>
              <th>Images</th>
              <th>Product</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = getProduct(item.id);
              return (
                <tr key={item.id}>
                  <td>
                    <FontAwesomeIcon
                      className="delete"
                      icon={faXmark}
                      size="xs"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    />
                  </td>
                  <td>
                    <Link to={"/product/" + product.id}>
                      <figure>
                        <img
                          src={product.images[0]}
                          alt={product.productName}
                        />
                      </figure>
                    </Link>
                  </td>
                  <td>
                    <Link to={"/product/" + product.id}>
                      {product.productName}
                    </Link>
                  </td>
                  <td>${product.new_price}</td>
                  <td>
                    <div className="count">
                      <InputNumber
                        value={item.quantity}
                        onChange={(val) =>
                          dispatch(
                            updateQuantity({ id: item.id, quantity: val }),
                          )
                        }
                      />
                    </div>
                  </td>
                  <td>${(product.new_price * item.quantity).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cart_total_area">
        <h2>Cart totals</h2>
        <div className="total_price_container">
          <p>Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <Link to="/checkout">Proceed To Checkout</Link>
      </div>
    </div>
  );
}
export default Cart;
