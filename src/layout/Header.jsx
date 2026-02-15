import TopBar from "../components/layout/header/TopBar";
import Middle from "../components/layout/header/Middle";
import Navbar from "../components/layout/header/Navbar";

function Header() {
  return (
    <header>
      <TopBar />
      <Middle />
      <Navbar className={"header_nav"} />
    </header>
  );
}

export default Header;
