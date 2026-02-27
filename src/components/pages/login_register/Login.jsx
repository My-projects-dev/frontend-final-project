import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";
import Swal from "sweetalert2"; // ✅ SweetAlert2 importu

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
        localStorage.setItem("accessToken", data.accessToken);

        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          confirmButtonText: "OK",
        }).then(() => {
          navigate("/");
        });
      } else {
        Swal.fire({
          title: "Login Failed",
          text: data.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
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
