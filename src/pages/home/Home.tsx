import React, { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
import Header from "../../components/header/Header";
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";
import { NavContextType } from "../../types/types";
import { useNav } from "../../hooks/useNav";
import DesktopNavbar from "../../components/desktopNavbar/DesktopNavbar";

const NavContext = createContext<NavContextType | null>(null);
const Home = () => {
  const { open, toggleMobileNav, toggleDesktopNav, hideNav,clickedElement } = useNav();

  return (
    <div>
      <TopBar />
      <NavContext.Provider
        value={{ open, toggleMobileNav, toggleDesktopNav, hideNav,clickedElement }}
      >
        <Header />
        <DesktopNavbar />
        <MobileNavbar />
      </NavContext.Provider>

      <Outlet />
    </div>
  );
};

export const useNavContext = () => useContext(NavContext);

export default Home;
