import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data);

        localStorage.setItem("accessToken", data.accessToken);

        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="login_container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <InputLabel
          id="login_username"
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
        >
          Username*
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
