import useToggle from "../../../../hooks/useToggle";
import SideCart from "./SideCart";

function ShopBag() {
  const { value, toggle } = useToggle();

  return (
    <div className="shopping_container">
      <div className="shop_icon_container">
        <i className="pe-7s-shopbag" onClick={toggle}></i>
        <span className="basket_product_count">3</span>
      </div>

      <SideCart open={value} onClose={toggle} />
    </div>
  );
}

export default ShopBag;
