import useToggle from "../../../../hooks/useToggle";
import SideDrawer from "../../../common/SideDrawer";
import MobileMenuContent from "./MobileMenuContent";

function ToggleMenu() {
  const { value, toggle } = useToggle();

  return (
    <div className="togle_menu">
      <i className="pe-7s-menu" onClick={toggle}></i>

      <SideDrawer open={value} onClose={toggle}>
        <MobileMenuContent onClose={toggle} />
      </SideDrawer>
    </div>
  );
}

export default ToggleMenu;
