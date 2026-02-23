import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function InputNumber({ value = 1, onChange }) {
  const handleChange = (val) => {
    if (val < 1) val = 1;
    onChange(val);
  };

  return (
    <div className="number-input">
      <FontAwesomeIcon
        icon={faMinus}
        onClick={() => handleChange(value - 1)}
        size="xs"
      />

      <input
        min="1"
        className="quantity"
        value={value}
        onChange={(e) => handleChange(parseInt(e.target.value) || 1)}
      />

      <FontAwesomeIcon
        icon={faPlus}
        onClick={() => handleChange(value + 1)}
        size="xs"
      />
    </div>
  );
}

export default InputNumber;
