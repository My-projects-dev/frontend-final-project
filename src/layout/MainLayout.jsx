import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default MainLayout;
