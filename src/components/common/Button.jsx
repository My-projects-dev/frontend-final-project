export default function Button({ type = "", children = "", className = "" }) {
  return (
    <button className={"common_button " + className} type={type}>
      {children}
    </button>
  );
}
