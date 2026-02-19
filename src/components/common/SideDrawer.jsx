function SideDrawer({ open, onClose, children, className = "" }) {
  return (
    <div
      className={`toggle_menu_wrp ${open ? "toggle_menu_wrp--active" : ""}`}
      onClick={onClose}
    >
      <div
        className={`side_menu ${open ? "side_menu--open" : ""} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default SideDrawer;
