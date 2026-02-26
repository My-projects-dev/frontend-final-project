import { Link } from "react-router-dom";

function LikeLogo({ className = "" }) {
  return (
    <Link to="/wishlist">
      <i className={`pe-7s-like ${className}`}></i>
    </Link>
  );
}

export default LikeLogo;
