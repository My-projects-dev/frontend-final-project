import { Link } from "react-router-dom";
import Img from "/dark.webp";

function SiteIcon({ className = "" }) {
  return (
    <Link to="/">
      <figure className={className}>
        <img src={Img} alt="Harmic" />
      </figure>
    </Link>
  );
}

export default SiteIcon;
