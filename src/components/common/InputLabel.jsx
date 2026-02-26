function InputLabel({
  id = "",
  onChange,
  name = "",
  type = "text",
  children = "",
  className = "",
  placeholder = "",
}) {
  return (
    <div className={"input-label " + className}>
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default InputLabel;
