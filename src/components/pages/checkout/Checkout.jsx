import Coupon from "../../common/Coupon";
import CheckoutTop from "./CheckoutTop";
import RaitingContent from "./RaitingContent";
import Order from "./Order";
import Billing from "./Billing";

function Checkout() {
  return (
    <div className="checkout_container">
      <CheckoutTop title="Returning customer?" clickTitle="Click here to login">
        <RaitingContent />
      </CheckoutTop>
      <CheckoutTop
        title="Have a coupon?"
        clickTitle="Click here to enter your code"
      >
        <Coupon />
      </CheckoutTop>

      <div></div>
      <div className="checkout_wrapper">
        <Billing />
        <Order />
      </div>
    </div>
  );
}
export default Checkout;
