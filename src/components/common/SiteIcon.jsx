import { Link } from "react-router-dom";
import Img from "/dark.webp";

function SiteIcon() {
  return (
    <Link to="/">
      <figure>
        <img src={Img} alt="Harmic" />
      </figure>
    </Link>
  );
}

export default SiteIcon;
