import { useState } from "react";
import Swal from "sweetalert2";
import Button from "../../common/Button";
import InputLabel from "../../common/InputLabel";

function Register() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
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
      const response = await fetch("http://localhost/api/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: data.success,
        });

        setForm({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="login_container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
        <div className="full_name">
          <InputLabel
            id="register_first_name"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            placeholder="First Name"
          >
            First Name
          </InputLabel>

          <InputLabel
            id="register_last_name"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            placeholder="Last Name"
          >
            Last Name
          </InputLabel>
        </div>

        <InputLabel
          id="register_email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
        >
          Email Address*
        </InputLabel>

        <div className="password_area">
          <InputLabel
            id="register_password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          >
            Password
          </InputLabel>

          <InputLabel
            id="register_confirm_password"
            name="confirm_password"
            type="password"
            value={form.confirm_password}
            onChange={handleChange}
            placeholder="Confirm Password"
          >
            Confirm Password
          </InputLabel>
        </div>

        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Register;
