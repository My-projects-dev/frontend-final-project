import "pe7-icon/dist/dist/pe-icon-7-stroke.min.css";

import { useEffect, useState } from "react";
import DropDown from "../../common/Dropdown";
import datas from "../../../Datas";
import LoginLogo from "./middle/LoginLogo";
import ToggleMenu from "./middle/ToggleMenu";
import ShopBag from "./middle/ShopBag";
import Search from "./middle/Search";
import SiteIcon from "../../common/SiteIcon";
import LikeLogo from "./middle/LikeLogo";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../../store/searchSlice";

const { categories, products } = datas;

function Middle() {
  const [activeCategory, setActiveCategory] = useState("All Category");
  const [inputData, setInputData] = useState("");

  const dispatch = useDispatch();

  const handleSearch = () => {
    const filteredProducts = products.filter((item) => {
      const matchCategory =
        activeCategory === "All Category" || item.category === activeCategory;

      const matchName = item.productName
        .toLowerCase()
        .includes(inputData.toLowerCase());

      return matchCategory && matchName;
    });

    dispatch(setSearchResults(filteredProducts));
  };

  return (
    <div className="header-middle">
      <SiteIcon />

      <div className="header-middle__search_wrp">
        <DropDown
          options={categories}
          onSelect={setActiveCategory}
          className={"header-middle__search_wrp__categories"}
        />
        <input
          type="search"
          placeholder="Search Products"
          className="header-middle__search_wrp__search_input"
          onChange={(e) => setInputData(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="header-middle__search_wrp__search_button"
          onClick={handleSearch}
        >
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
