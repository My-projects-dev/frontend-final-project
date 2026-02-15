import datas from "../../../../Datas";
import useToggle from "../../../../hooks/useToggle";
import DropDown from "../../../common/Dropdown";
import LoginLogo from "./LoginLogo";
import Delivery from "../Delivery";
import LikeLogo from "./LikeLogo";
import Navbar from "../Navbar";

const { routes, languages, currency } = datas;

function ToggleMenu() {
  const { value, toggle } = useToggle();
  return (
    <div className="togle_menu">
      <i className="pe-7s-menu" onClick={toggle}></i>
      <div
        className={`toggle_menu_wrp ${value ? "toggle_menu_wrp--active" : ""}`}
        onClick={toggle}
      >
        <div
          className={`side_menu ${value ? "side_menu--open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <i className="pe-7s-close" onClick={toggle}></i>

          <div className="toggle_middle_menu">
            <Delivery />
            <ul className="toggle_middle_menu__list">
              <li>
                {<DropDown options={languages} className={"toggle_language"} />}
              </li>
              <li>
                {<DropDown options={currency} className={"toggle_currency"} />}
              </li>
              <li>
                <LoginLogo className={"toggle_login"} arrow={true} />
              </li>
              <li>
                <LikeLogo />
              </li>
            </ul>
          </div>

          <Navbar className={"toggle_nav"} />
        </div>
      </div>
    </div>
  );
}

export default ToggleMenu;
