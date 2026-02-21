import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function InputNumber() {
  const [inputValue, setInputValue] = useState(1);

  function decreament() {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  }

  return (
    <div className="number-input">
      <FontAwesomeIcon icon={faMinus} onClick={decreament} size="xs" />
      <input type="text" min="1" className="quantity" value={inputValue} />
      <FontAwesomeIcon
        icon={faPlus}
        onClick={() => setInputValue(inputValue + 1)}
        size="xs"
      />
    </div>
  );
}

export default InputNumber;
