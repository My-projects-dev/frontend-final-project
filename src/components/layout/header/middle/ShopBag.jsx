import { Link } from "react-router-dom";
import useToggle from "../../../../hooks/useToggle";
import Img from "/dark.webp";

function ShopBag() {
  const { value, toggle } = useToggle();
  return (
    <div className="shopping_container">
      <div className="shop_icon_container">
        <i className="pe-7s-shopbag" onClick={toggle}></i>
        <span className="basket_product_count">3</span>
      </div>

      <div
        className={`toggle_shop_wrp ${value ? "toggle_shop_wrp--active" : ""}`}
        onClick={toggle}
      >
        <div
          className={`side_shop ${value ? "side_shop--open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="side_shop__head">
            <h2>Shopping Cart</h2>
            <i className="pe-7s-close" onClick={toggle}></i>
          </div>

          <div className="toggle_shopping_cart">
            <ul>
              <li>
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
              <li>
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
              <li>
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
    </div>
  );
}

export default ShopBag;
