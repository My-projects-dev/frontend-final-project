import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Addresses from "./Addresses";
import AccountDetails from "./AccountDetails";

function Account() {
  const [selected, setSelected] = useState("DASHBOARD");
  return (
    <div className="account_container">
      <div className="buttons_area">
        <ul>
          <li
            className={selected == "DASHBOARD" ? "active" : ""}
            onClick={() => setSelected("DASHBOARD")}
          >
            DASHBOARD
          </li>
          <li
            className={selected == "ORDERS" ? "active" : ""}
            onClick={() => setSelected("ORDERS")}
          >
            ORDERS
          </li>
          <li
            className={selected == "ADDRESSES" ? "active" : ""}
            onClick={() => setSelected("ADDRESSES")}
          >
            ADDRESSES
          </li>
          <li
            className={selected == "ACCOUNT DETAILS" ? "active" : ""}
            onClick={() => setSelected("ACCOUNT DETAILS")}
          >
            ACCOUNT DETAILS
          </li>
          <li>
            <Link
              to="/login-register"
              onClick={() => {
                localStorage.removeItem("accessToken");
              }}
            >
              LOGOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="content_area">
        {selected === "DASHBOARD" && <Dashboard />}
        {selected === "ORDERS" && <Orders />}
        {selected === "ADDRESSES" && <Addresses />}
        {selected === "ACCOUNT DETAILS" && <AccountDetails />}
      </div>
    </div>
  );
}
export default Account;
