import BreadCrumb from "../components/common/BreadCrumb";
import Checkout from "../components/pages/checkout/checkout";

function CheckoutPage() {
  return (
    <>
      <BreadCrumb page="Checkout" title="Product Related" />
      <Checkout />
    </>
  );
}

export default CheckoutPage;
