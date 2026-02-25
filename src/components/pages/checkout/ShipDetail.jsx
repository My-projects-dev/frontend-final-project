import Dropdown from "../../common/Dropdown";
import Datas from "../../../Datas";

const { country } = Datas;

function ShipDetail() {
  return (
    <div className="billing_details">
      <div className="country_area">
        <label>Country *</label>
        <Dropdown options={country} className="country" />
      </div>

      <div className="ship_first_name_container">
        <label htmlFor="ship_first_name">First Name *</label>
        <input type="text" id="ship_first_name" />
      </div>

      <div className="ship_last_name_container">
        <label htmlFor="ship_last_name">Last Name *</label>
        <input type="text" id="ship_last_name" />
      </div>

      <div className="ship_company_name_container">
        <label htmlFor="ship_company_name">Company Name</label>
        <input type="text" id="ship_company_name" />
      </div>

      <div className="ship_address">
        <label htmlFor="ship_address" className="label">
          Address *
        </label>
        <input type="text" id="ship_address" placeholder="Street address" />
      </div>

      <div className="ship_address">
        <input
          type="text"
          placeholder="Apartment, suite, unit etc. (optional)"
        />
      </div>

      <div className="ship_address">
        <label htmlFor="town" className="label">
          Town / City *
        </label>
        <input type="text" id="ship_town" />
      </div>

      <div className="state_container">
        <label htmlFor="state">State / County *</label>
        <input type="text" id="ship_state" />
      </div>

      <div className="ship_zip_container">
        <label htmlFor="ship_postcode">Postcode / Zip *</label>
        <input type="text" id="ship_postcode" />
      </div>

      <div className="email_container">
        <label htmlFor="ship_email">Email Address *</label>
        <input type="email" id="ship_email" />
      </div>

      <div className="ship_phone_container">
        <label htmlFor="ship_phone">Phone *</label>
        <input type="phone" id="ship_phone" />
      </div>
    </div>
  );
}
export default ShipDetail;
