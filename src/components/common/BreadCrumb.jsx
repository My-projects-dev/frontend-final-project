import { Link } from "react-router-dom";
function BreadCrumb({ page = "", title = "" }) {
  return (
    <div className="bread-crump">
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="pe-7s-angle-right"></i>
        </li>
        <li>{page}</li>
      </ul>
    </div>
  );
}

export default BreadCrumb;
