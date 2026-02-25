function Collapse({ isOpen, title, onClick, children = "" }) {
  return (
    <div className="collapse">
      <h3 onClick={onClick}>{title}</h3>

      <div className={`collapse_content ${isOpen ? "open" : ""}`}>
        <div className="inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
