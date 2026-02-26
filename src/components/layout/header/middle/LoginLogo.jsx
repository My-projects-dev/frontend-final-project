import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function LoginLogo({ className = "", arrow = false }) {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="LoginLogo" ref={dropdownRef}>
      <div onClick={() => setShow(!show)}>
        <i className={`pe-7s-users ${className}`}></i>
        {arrow && <FontAwesomeIcon icon={faAngleDown} size="xs" />}
      </div>

      {show && (
        <ul>
          {token ? (
            <li>
              <Link to="/account">My account</Link>
            </li>
          ) : (
            <li>
              <Link to="/login-register">Login | Register</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default LoginLogo;
