import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";

function AccountDetails() {
  return (
    <div className="account_details">
      <form action="" method="POST">
        <div className="full_name">
          <InputLabel id="account_first_name" name="first_name">
            First Name
          </InputLabel>

          <InputLabel id="account_last_name" name="last_name">
            Last Name
          </InputLabel>
        </div>

        <InputLabel id="account_email" name="email" type="email">
          Email*
        </InputLabel>

        <InputLabel
          id="account_current_password"
          name="password"
          type="password"
        >
          Current Password(leave blank to leave unchanged)
        </InputLabel>

        <InputLabel id="account_password" name="password" type="password">
          New Password (leave blank to leave unchanged)
        </InputLabel>

        <InputLabel
          id="account_confirm_password"
          name="confirm_password"
          type="password"
        >
          Confirm New Password
        </InputLabel>

        <Button type="submit">SAVE CHANGES</Button>
      </form>
    </div>
  );
}
export default AccountDetails;
