import datas from "../../../../Datas";
import DropDown from "../../../common/Dropdown";
import LoginLogo from "./LoginLogo";
import Delivery from "../Delivery";
import LikeLogo from "./LikeLogo";
import Navbar from "../Navbar";

const { languages, currency } = datas;

function MobileMenuContent({ onClose }) {
  return (
    <>
      <i className="pe-7s-close" onClick={onClose}></i>

      <div className="toggle_middle_menu">
        <Delivery />

        <ul className="toggle_middle_menu__list">
          <li>
            <DropDown options={languages} className="toggle_language" />
          </li>
          <li>
            <DropDown options={currency} className="toggle_currency" />
          </li>
          <li>
            <LoginLogo className="toggle_login" arrow onClose={onClose} />
          </li>
          <li>
            <LikeLogo onClose={onClose} />
          </li>
        </ul>
      </div>

      <Navbar className="toggle_nav" onClose={onClose} />
    </>
  );
}

export default MobileMenuContent;
