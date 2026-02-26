import { Link } from "react-router-dom";
import Button from "../../common/Button";
import InputLabel from "../../common/InputLabel";

function Register() {
  return (
    <div className="login_container">
      <h2>Register</h2>
      <form action="" method="POST">
        <div className="full_name">
          <InputLabel
            id="register_first_name"
            name="first_name"
            placeholder="First Name"
          >
            First Name
          </InputLabel>

          <InputLabel
            id="register_last_name"
            name="last_name"
            placeholder="Last Name"
          >
            Last Name
          </InputLabel>
        </div>

        <InputLabel
          id="register_email"
          name="email"
          type="email"
          placeholder="Email Address"
        >
          Email Address*
        </InputLabel>

        <div className="password_area">
          <InputLabel
            id="register_password"
            name="password"
            type="password"
            placeholder="Password"
          >
            Password
          </InputLabel>

          <InputLabel
            id="register_confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Confirm Password"
          >
            Confirm Password
          </InputLabel>
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
export default Register;
