import datas from "../../../Datas";
import DropDown from "../../common/Dropdown";
import Delivery from "./Delivery";

const { languages, currency } = datas;

function Topbar() {
  return (
    <div className="header-top">
      <ul className="header-top__list">
        <li>
          {<DropDown options={languages} className={"header-top__language"} />}
        </li>
        <li>
          {<DropDown options={currency} className={"header-top__currency"} />}
        </li>
        <li>
          <div>
            Call Us
            <a href="tel:3965410"> 3965410</a>
          </div>
        </li>
      </ul>
      <Delivery />
    </div>
  );
}

export default Topbar;
