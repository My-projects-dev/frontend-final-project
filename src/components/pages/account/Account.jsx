import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders";
import Addresses from "./Addresses";
import AccountDetails from "./AccountDetails";
import { useAuth } from "../../../context/AuthContext";

function Account() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [selected, setSelected] = useState("DASHBOARD");

  const handleLogout = async () => {
    await logout();
    navigate("/login-register");
  };

  return (
    <div className="account_container">
      <div className="buttons_area">
        <ul>
          <li
            className={selected === "DASHBOARD" ? "active" : ""}
            onClick={() => setSelected("DASHBOARD")}
          >
            DASHBOARD
          </li>

          <li
            className={selected === "ORDERS" ? "active" : ""}
            onClick={() => setSelected("ORDERS")}
          >
            ORDERS
          </li>

          <li
            className={selected === "ADDRESSES" ? "active" : ""}
            onClick={() => setSelected("ADDRESSES")}
          >
            ADDRESSES
          </li>

          <li
            className={selected === "ACCOUNT_DETAILS" ? "active" : ""}
            onClick={() => setSelected("ACCOUNT_DETAILS")}
          >
            ACCOUNT DETAILS
          </li>

          <li onClick={handleLogout}>LOGOUT</li>
        </ul>
      </div>

      <div className="content_area">
        {selected === "DASHBOARD" && <Dashboard />}
        {selected === "ORDERS" && <Orders />}
        {selected === "ADDRESSES" && <Addresses />}
        {selected === "ACCOUNT_DETAILS" && <AccountDetails />}
      </div>
    </div>
  );
}

export default Account;
