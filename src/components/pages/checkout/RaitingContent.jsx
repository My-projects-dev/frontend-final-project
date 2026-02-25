import { Link } from "react-router-dom";

function RaitingContent() {
  return (
    <div className="raiting_toggle">
      <div className="raiting_toggle__content">
        <p>
          Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est
          sit amet ipsum luctus.
        </p>
        <form>
          <div className="raiting_toggle__content__username">
            <label htmlFor="raiting_username">
              Username or email <span>*</span>
            </label>
            <input type="text" id="raiting_username" />
          </div>

          <div className="raiting_toggle__content__password">
            <label htmlFor="raiting_password">
              Password <span>*</span>
            </label>
            <input type="password" id="raiting_password" />
          </div>

          <div className="raiting_toggle__content__checkbox_container">
            <input type="checkbox" id="raiting_checkbox" />
            <label htmlFor="raiting_checkbox">Remember me</label>
          </div>
        </form>
        <Link>Lost your password?</Link>
      </div>
    </div>
  );
}

export default RaitingContent;
