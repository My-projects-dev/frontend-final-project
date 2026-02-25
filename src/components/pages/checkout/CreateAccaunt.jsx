import { useState } from "react";
import Collapse from "../../common/Collapse";

function CreateAccaunt() {
  const [check, setCheck] = useState(false);
  return (
    <div className="create_account">
      <div className="checkbox_area">
        <input
          type="checkbox"
          id="creat_account"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        <label htmlFor="creat_account">Create an account?</label>
      </div>
      <Collapse isOpen={check}>
        <div className="create_account__child_content">
          <p>
            Create an account by entering the information below. If you are a
            returning customer please login at the top of the page.
          </p>
          <div className="account_password_container">
            <label htmlFor="account_password">Account password *</label>
            <input
              type="password"
              id="account_password"
              placeholder="password"
            />
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default CreateAccaunt;
