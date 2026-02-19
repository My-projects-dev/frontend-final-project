import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <footer>
      <div className="footer_top"></div>
      <div className="footer_bottom">
        <p>
          © 2022 Harmic Made with{" "}
          <FontAwesomeIcon icon={faHeart} className="heart_icon" /> by HasThemes
        </p>
      </div>
    </footer>
  );
}

export default Footer;
