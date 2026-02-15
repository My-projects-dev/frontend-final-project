import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ options = [], className = "", onSelect }) {
  const [selected, setSelected] = useState(options[0] ?? "");
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

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

  const handleSelect = (item) => {
    setSelected(item);
    onSelect && onSelect(item);
    setShow(false);
  };

  return (
    <div ref={dropdownRef} className="dropdown">
      <button onClick={() => setShow(!show)} className={className}>
        {selected} <FontAwesomeIcon icon={faAngleDown} size="xs" />
      </button>
      {show && (
        <ul>
          {options
            .filter((item) => item !== selected)
            .map((item, index) => (
              <li key={index} onClick={() => handleSelect(item)}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
