import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideButton from "../components/SideButton";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <div className="pt-24 pl-10 pr-10">
        <SideButton />
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}
