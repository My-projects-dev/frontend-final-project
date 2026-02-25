import { useState } from "react";
import { useSelector } from "react-redux";
import datas from "../../../Datas";
import Collapse from "../../common/Collapse";

function Order() {
  const [activeCollapse, setActiveCollapse] = useState(null);
  const cart = useSelector((state) => state.cart.items);

  const getProduct = (id) => datas.products.find((p) => p.id === id);

  const totalPrice = cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return total + product.new_price * item.quantity;
  }, 0);

  return (
    <div className="order_area">
      <div>
        <h2>YOUR ORDER</h2>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = getProduct(item.id);
              return (
                <tr key={item.id}>
                  <td>
                    {product.productName} <span>{"× " + item.quantity}</span>
                  </td>
                  <td>{"$" + product.price}</td>
                </tr>
              );
            })}
            <tr>
              <td>
                <h3>Cart Subtotal</h3>
              </td>
              <td>{"$" + totalPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td>
                <h3>Order Total</h3>
              </td>
              <td>
                <h3>{"$" + totalPrice.toFixed(2)}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="collapse_area">
        <Collapse
          title="Direct Bank Transfer."
          isOpen={activeCollapse === 1}
          onClick={() => setActiveCollapse(activeCollapse === 1 ? null : 1)}
        >
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won’t be shipped until
            the funds have cleared in our account.
          </p>
        </Collapse>
        <Collapse
          title="Cheque Payment"
          isOpen={activeCollapse === 2}
          onClick={() => setActiveCollapse(activeCollapse === 2 ? null : 2)}
        >
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won’t be shipped until
            the funds have cleared in our account.
          </p>
        </Collapse>
        <Collapse
          title="PayPal"
          isOpen={activeCollapse === 3}
          onClick={() => setActiveCollapse(activeCollapse === 3 ? null : 3)}
        >
          <p>
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order won’t be shipped until
            the funds have cleared in our account.
          </p>
        </Collapse>
      </div>
      <button>PLACE ORDER</button>
    </div>
  );
}

export default Order;
