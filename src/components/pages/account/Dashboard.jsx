import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/login-register");
  };
  return (
    <div>
      <p style={{ marginBottom: "20px" }}>
        Hello <span style={{ fontWeight: "700" }}>{user.first_name}</span> (not
        {" " + user.first_name}? <Link onClick={handleLogout}> Sign out</Link>)
      </p>
      <p>
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses and edit your password and account
        details.
      </p>
    </div>
  );
}

export default Dashboard;
