import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function LoginRegister() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

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
