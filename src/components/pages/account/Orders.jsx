import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import datas from "../../../Datas";

function Orders() {
  const cart = useSelector((state) => state.cart.items);
  const getProduct = (id) => datas.products.find((p) => p.id === id);

  return (
    <div className="account_ordes">
      <h2>MY ORDERS</h2>
      <div className="account_ordes__table_container">
        <table>
          <thead>
            <tr>
              <th>ORDER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th>TOTAL</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const product = getProduct(item.id);
              return (
                <tr key={item.id}>
                  <td>#{item.id * 999}</td>
                  <td>Mar 27, 2019</td>
                  <td>On Hold</td>
                  <td>
                    ${product.new_price} for {item.quantity} items
                  </td>
                  <td>
                    <Link to={"/product/" + item.id}>View</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;
