import Login from "./Login";
import Register from "./Register";

function LoginRegister() {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-register">
      <div className="login_area">
        <Login />
      </div>
      <div className="regisrer_area">
        <Register />
      </div>
    </div>
  );
}

export default LoginRegister;
