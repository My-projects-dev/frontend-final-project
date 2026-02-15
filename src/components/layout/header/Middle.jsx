import "pe7-icon/dist/dist/pe-icon-7-stroke.min.css";

import DropDown from "../../common/Dropdown";
import datas from "../../../Datas";
import LoginLogo from "./middle/LoginLogo";
import ToggleMenu from "./middle/ToggleMenu";
import ShopBag from "./middle/ShopBag";
import Search from "./middle/Search";
import SiteIcon from "../../common/SiteIcon";
import LikeLogo from "./middle/LikeLogo";

const { categories } = datas;

function Middle() {
  return (
    <div className="header-middle">
      <SiteIcon />

      <div className="header-middle__search_wrp">
        <DropDown
          options={categories}
          className={"header-middle__search_wrp__categories"}
        />
        <input
          type="search"
          placeholder="Search Products"
          className="header-middle__search_wrp__search_input"
        />
        <button className="header-middle__search_wrp__search_button">
          <i className="pe-7s-search"></i>
        </button>
      </div>

      <div className="header-middle__icon_wrp">
        <LoginLogo className={"users"} />
        <LikeLogo className={"like"} />
        <Search />
        <ShopBag />
        <ToggleMenu />
      </div>
    </div>
  );
}

export default Middle;
