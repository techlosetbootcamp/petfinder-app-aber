import React, { createContext, useContext } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../../components/topBar/TopBar";
import Header from "../../components/header/Header";
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";
import { NavContextType } from "../../types/types";
import { useNav } from "../../hooks/useNav";

const NavContext = createContext<NavContextType | null>(null);
const Home = () => {
  const { open, toggleMobileNav } = useNav();
  return (
    <div>
      <TopBar />
      <NavContext.Provider value={{ open, toggleMobileNav }}>
        <Header />
        <MobileNavbar />
      </NavContext.Provider>

      <Outlet />
    </div>
  );
};

export const useNavContext = () => useContext(NavContext);

export default Home;
