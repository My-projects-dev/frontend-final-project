import { useState } from "react";
import Collapse from "../../common/Collapse";
import ShipDetail from "./ShipDetail";

function Ship() {
  const [check, setCheck] = useState(false);
  return (
    <div>
      <div className="ship_checkbox_wrp">
        <label htmlFor="ship">Ship to a different address?</label>
        <input
          type="checkbox"
          id="ship"
          checked={check}
          onChange={() => setCheck(!check)}
        />
      </div>
      <Collapse isOpen={check}>
        <ShipDetail />
      </Collapse>
    </div>
  );
}
export default Ship;
