function InputLabel({
  id = "",
  onChange,
  name = "",
  value,
  type = "text",
  children = "",
  className = "",
  placeholder = "",
}) {
  return (
    <div className={"input-label " + className}>
      <label htmlFor={id}>{children}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default InputLabel;
