import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";

function Login() {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Swal.fire("Success", data.message, "success");
        setUser(data.user);
        navigate("/");
      } else {
        Swal.fire("Error", data.error || "Login failed", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Server error", "error");
    }
  };

  return (
    <div className="login_container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <InputLabel
          id="login_email"
          name="email"
          type="text"
          placeholder="Email Address"
          onChange={handleChange}
        >
          Email Address*
        </InputLabel>

        <InputLabel
          id="login_password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        >
          Password*
        </InputLabel>

        <div className="form_foot">
          <div className="checkbox_area">
            <input type="checkbox" id="login_checkbox" />
            <label htmlFor="login_checkbox">Remember me</label>
          </div>

          <Link to="#">Forgotten password?</Link>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}

export default Login;
