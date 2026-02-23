import BreadCrumb from "../components/common/BreadCrumb";
import Cart from "../components/pages/Cart/Cart";

function CartPage() {
  return (
    <>
      <BreadCrumb page="Cart" title="Product Related" />
      <Cart />
    </>
  );
}
export default CartPage;
