import { useState } from "react";
import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";
import Swal from "sweetalert2";
import { useAuth } from "../../../context/AuthContext";

function AccountDetails() {
  const { user, setUser } = useAuth();

  const [form, setForm] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.new_password && form.new_password !== form.confirm_password) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
      const res = await fetch("http://localhost/api/update-account.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success", data.message, "success");

        setUser(data.user);

        setForm({
          ...form,
          current_password: "",
          new_password: "",
          confirm_password: "",
        });
      } else {
        Swal.fire("Error", data.error, "error");
      }
    } catch (e) {
      Swal.fire("Error", e.message, "error");
    }
  };

  return (
    <div className="account_details">
      <form onSubmit={handleSubmit}>
        <div className="full_name">
          <InputLabel
            id="account_first_name"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
          >
            First Name
          </InputLabel>

          <InputLabel
            id="account_last_name"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
          >
            Last Name
          </InputLabel>
        </div>

        <InputLabel
          id="account_email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
        >
          Email*
        </InputLabel>

        <InputLabel
          id="account_current_password"
          name="current_password"
          type="password"
          value={form.current_password}
          onChange={handleChange}
        >
          Current Password
        </InputLabel>

        <InputLabel
          id="account_password"
          name="new_password"
          type="password"
          value={form.new_password}
          onChange={handleChange}
        >
          New Password
        </InputLabel>

        <InputLabel
          id="account_confirm_password"
          name="confirm_password"
          type="password"
          value={form.confirm_password}
          onChange={handleChange}
        >
          Confirm New Password
        </InputLabel>

        <Button type="submit">SAVE CHANGES</Button>
      </form>
    </div>
  );
}

export default AccountDetails;
