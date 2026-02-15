import useToggle from "../../../../hooks/useToggle";

function Search() {
  const { value, toggle } = useToggle();
  return (
    <div className="searh_container">
      <i className="pe-7s-search" onClick={toggle}></i>
      <div className={`toggle_search ${value ? "toggle_search--open" : ""}`}>
        <i className="pe-7s-close" onClick={toggle}></i>
        <div className="search_wrp">
          <h2>Start typing and press Enter to search</h2>
          <div className="search_area">
            <input
              type="text"
              placeholder="Search"
              className="toggle_search__input"
            />
            <button className="toggle_search__button">
              <i className="pe-7s-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
