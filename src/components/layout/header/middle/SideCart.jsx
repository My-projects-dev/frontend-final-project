import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../../../store/cartSlice";
import datas from "../../../../Datas";

function SideCart({ open, onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const getProduct = (id) => datas.products.find((p) => p.id === id);

  const totalPrice = cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + product.new_price * item.quantity;
  }, 0);

  return (
    <div
      className={`toggle_shop_wrp ${open ? "toggle_shop_wrp--active" : ""}`}
      onClick={onClose}
    >
      <div
        className={`side_shop ${open ? "side_shop--open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="side_shop__head">
          <h2>Shopping Cart</h2>
          <i className="pe-7s-close" onClick={onClose}></i>
        </div>

        <div className="toggle_shopping_cart">
          <ul>
            {cart.map((item) => {
              const product = getProduct(item.id);
              return (
                <li key={item.id}>
                  <div className="product">
                    <Link to="/">
                      <figure>
                        <img
                          src={product.images[0]}
                          alt={product.productName}
                        />
                      </figure>
                    </Link>

                    <div>
                      <Link to="/">
                        <h4>{product.productName}</h4>
                      </Link>
                      <p>
                        {item.quantity} x {product.new_price}
                      </p>
                    </div>

                    <i
                      className="pe-7s-close"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    ></i>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="toggle_shopping_total">
          <span>Total</span>
          <span className="toggle_shopping_total__price">${totalPrice}</span>
        </div>

        <div className="side_shop__btn_gropup">
          <Link to="/cart" onClick={onClose}>
            View Cart
          </Link>
          <Link to="/checkout" onClick={onClose}>
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
