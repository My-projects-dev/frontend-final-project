import { Link } from "react-router-dom";
import routes from "../../../router/routes";

function Navbar({ className = "", onClose }) {
  return (
    <nav className={className}>
      <ul>
        {routes.slice(0, 4).map(({ path, title }) => (
          <li key={path}>
            <Link to={path} onClick={onClose}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
