import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../common/Dropdown";

const optionsData = [
  "Sort by Default",
  "Sort by Popularity",
  "Sort by Rated",
  "Sort by Latest",
  "Sort by Hight Price",
  "Sort by Low Price",
];

function ProductTopbar({
  onSelect,
  productCount,
  findProduct,
  cellType,
  grid,
}) {
  return (
    <div className="product_topbar">
      <div className="product_topbar__icons">
        <FontAwesomeIcon
          icon={faTh}
          className={`table-icon ${grid ? "active" : ""}`}
          onClick={() => cellType(true)}
        />
        <FontAwesomeIcon
          icon={faList}
          className={`list-icon ${grid ? "" : "active"}`}
          onClick={() => cellType(false)}
        />
      </div>
      <div className="product_topbar__found">
        <p>
          <span> {findProduct} </span> Product Found of{" "}
          <span> {productCount} </span>
        </p>
      </div>
      <Dropdown
        options={optionsData}
        onSelect={onSelect}
        className="product_topbar__dropdown"
      />
    </div>
  );
}
export default ProductTopbar;
