import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <p style={{ marginBottom: "20px" }}>
        Hello <span style={{ fontWeight: "700" }}>Harmic</span> (not Harmic?
        <Link to="login-register">Sign out</Link>)
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
