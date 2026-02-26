function Addresses() {
  return (
    <div className="account_addresses">
      <div className="account_addresses__head">
        <p>
          The following addresses will be used on the checkout page by default.
        </p>
      </div>
      <div className="account_addresses__foot">
        <div className="billing_address">
          <h2>BILLING ADDRESS</h2>
          <p>1234 Heaven Stress, Beverly Hill OldYork</p>
          <p>UnitedState of Lorem</p>
        </div>
        <div className="shippind_address">
          <h2>SHIPPING ADDRESS</h2>
          <p>1234 Heaven Stress, Beverly Hill OldYork</p>
          <p>UnitedState of Lorem</p>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
