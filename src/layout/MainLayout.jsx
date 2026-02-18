import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "../components/layout/header/Navbar";

function MainLayout() {
  return (
    <>
      <Header />
      <Navbar className={"header_nav"} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
