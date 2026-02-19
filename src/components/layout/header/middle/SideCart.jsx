import { Link } from "react-router-dom";
import Img from "/dark.webp";

function SideCart({ open, onClose }) {
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
            {[1, 2, 3].map((_, i) => (
              <li key={i}>
                <div className="product">
                  <Link to="/">
                    <figure>
                      <img src={Img} alt="Harmic" />
                    </figure>
                  </Link>

                  <div>
                    <Link to="/">
                      <h4>Black Pepper Grains</h4>
                    </Link>
                    <p>1 x $80.00</p>
                  </div>

                  <i className="pe-7s-close"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="toggle_shopping_total">
          <span>Subtotal</span>
          <span className="toggle_shopping_total__price">$240.00</span>
        </div>

        <div className="side_shop__btn_gropup">
          <Link to="/cart">View Cart</Link>
          <Link to="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default SideCart;
