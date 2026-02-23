import useToggle from "../../../../hooks/useToggle";
import SideCart from "./SideCart";
import { useSelector } from "react-redux";

function ShopBag() {
  const { value, toggle } = useToggle();
  const productCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="shopping_container">
      <div className="shop_icon_container">
        <i className="pe-7s-shopbag" onClick={toggle}></i>
        <span className="basket_product_count">{productCount}</span>
      </div>

      <SideCart open={value} onClose={toggle} />
    </div>
  );
}

export default ShopBag;
