import { useState } from "react";
import Collapse from "../../common/Collapse";

function CheckoutTop({ title = "", clickTitle = "", children = "" }) {
  const [activeCollapse, setActiveCollapse] = useState(false);

  return (
    <div className="checkout_top">
      <div className="checkout_top__title">
        <i className="pe-7s-cart"></i>
        <p>
          {title}
          <span onClick={() => setActiveCollapse(!activeCollapse)}>
            {clickTitle}
          </span>
        </p>
      </div>

      <Collapse isOpen={activeCollapse}>{children}</Collapse>
    </div>
  );
}
export default CheckoutTop;
