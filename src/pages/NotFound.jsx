import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not_found_wrp">
      <h2>Page Cannot Be Found!</h2>
      <p>
        Seems like nothing was found at this location. Try something else or you
        can go back to the homepage following the button below!
      </p>
      <Link to="/">BACK TO GOME</Link>
    </div>
  );
}

export default NotFound;
