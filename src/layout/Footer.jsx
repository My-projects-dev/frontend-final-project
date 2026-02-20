import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import SiteIcon from "../components/common/SiteIcon";
import PaymentMethods from "../assets/img/payment-methods.webp";

function Footer() {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_top__about">
          <SiteIcon className="footer_top__about__logo" />
          <p>
            Lorem ipsum dolor sit amet, consectet adipi elit, sed do eius tempor
            incididun ut labore gthydolore.
          </p>
          <div className="footer_top__about__contact">
            <i className="pe-7s-map-marker"></i>
            184 Main Rd E, St Albans VIC 3021,
          </div>
          <div className="footer_top__about__contact">
            <i className="pe-7s-mail"></i>
            <a href="mailto://info@example.com">info@example.com</a>
          </div>
          <figure className="footer_top__about__payment_methods">
            <img src={PaymentMethods} alt="Payment Methods" />
          </figure>
        </div>
        <div className="footer_top__information">
          <h3>Information</h3>
          <div className="line"></div>
          <ul>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Shipping</Link>
            </li>
            <li>
              <Link>Returns</Link>
            </li>
            <li>
              <Link>Order Status</Link>
            </li>
            <li>
              <Link>Gift Card Balance</Link>
            </li>
            <li>
              <Link>Accessibility</Link>
            </li>
          </ul>
        </div>
        <div className="footer_top__account">
          <h3>My Account</h3>
          <div className="line"></div>
          <ul>
            <li>
              <Link>My Account</Link>
            </li>
            <li>
              <Link>Checkout</Link>
            </li>
            <li>
              <Link>Validation</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer_top__newsletters">
          <h3>Newsletters</h3>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectet adipi elit, sed do eius
            tempor.
          </p>
          <div>
            <form action=""></form>
            <input type="mail" placeholder="Your Email" />
            <button type="submit">SEND MAIL</button>
          </div>
        </div>
      </div>
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
