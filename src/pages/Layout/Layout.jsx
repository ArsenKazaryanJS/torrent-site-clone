import { Outlet } from "react-router-dom";
import { MainHeader } from "../../components/MainHeader/MainHeader";
import SideBar from "../../components/SideBar/SideBar";
import { SearchMenu } from "../../components/SearchMenu/SearchMenu.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { Footer } from "../../components/Footer/Footer.jsx";

export const Layout = () => {
  return (
    <div>
      <NavBar/>
      <MainHeader />
      <SearchMenu/>
      <div className="page_main_cont">
      <Outlet />
      <SideBar />
      </div>
      <Footer/>
    </div>
  );
};
