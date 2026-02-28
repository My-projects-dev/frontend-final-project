import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function BlogCart({ blog }) {
  return (
    <div className="blog_cart">
      <div className="blog_cart_img">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="blog_cart__data">
        <ul>
          <li>
            <div>
              <FontAwesomeIcon icon={faCalendar} className="calendar" />
              May 21, 2021
            </div>
          </li>
          <li>2 COMMENTS</li>
          <li> SHARE</li>
        </ul>
        <Link className="title">{blog.title}</Link>
        <p>{blog.description}</p>
        <Link className="button">READ MORE</Link>
      </div>
    </div>
  );
}

export default BlogCart;
