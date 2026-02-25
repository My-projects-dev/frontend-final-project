import BillingDetails from "./BillingDatails";
import CreateAccaunt from "./CreateAccaunt";
import Ship from "./Ship";

function Billing() {
  return (
    <div className="billing_area">
      <h2>BILLING DETAILS</h2>
      <BillingDetails />
      <CreateAccaunt />
      <Ship />
      <div className="order_notes_container">
        <label htmlFor="order_notes">Order Notes</label>
        <textarea
          rows="5"
          id="order_notes"
          placeholder="Notes about your, e.g. special notes for delivery."
        ></textarea>
      </div>
    </div>
  );
}
export default Billing;
