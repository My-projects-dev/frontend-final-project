import { Link } from "react-router-dom";

function LikeLogo({ className = "", onClose }) {
  return (
    <Link to="/wishlist" onClick={onClose}>
      <i className={`pe-7s-like ${className}`}></i>
    </Link>
  );
}

export default LikeLogo;
