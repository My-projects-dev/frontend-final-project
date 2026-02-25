import Dropdown from "../../common/Dropdown";
import Datas from "../../../Datas";

const { country } = Datas;

function BillingDetails() {
  return (
    <div className="billing_details">
      <div className="country_area">
        <label>Country *</label>
        <Dropdown options={country} className="country" />
      </div>

      <div className="fullname">
        <div className="first_name_container">
          <label htmlFor="first_name">First Name *</label>
          <input type="text" id="first_name" />
        </div>
        <div className="last_name_container">
          <label htmlFor="last_name">Last Name *</label>
          <input type="text" id="last_name" />
        </div>
      </div>

      <div className="company_name_container">
        <label htmlFor="company_name">Company Name</label>
        <input type="text" id="company_name" />
      </div>

      <div className="address">
        <label htmlFor="address" className="label">
          Address *
        </label>
        <input type="text" id="address" placeholder="Street address" />
      </div>

      <div className="address">
        <input
          type="text"
          placeholder="Apartment, suite, unit etc. (optional)"
        />
      </div>

      <div className="address">
        <label htmlFor="town" className="label">
          Town / City *
        </label>
        <input type="text" id="town" />
      </div>

      <div className="state_area">
        <div className="state_container">
          <label htmlFor="state">State / County *</label>
          <input type="text" id="state" />
        </div>
        <div className="zip_container">
          <label htmlFor="postcode">Postcode / Zip *</label>
          <input type="text" id="postcode" />
        </div>
      </div>

      <div className="email_area">
        <div className="email_container">
          <label htmlFor="email">Email Address *</label>
          <input type="email" id="email" />
        </div>
        <div className="phone_container">
          <label htmlFor="phone">Phone *</label>
          <input type="phone" id="phone" />
        </div>
      </div>
    </div>
  );
}
export default BillingDetails;
