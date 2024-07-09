import React from "react";
import AdoptionArticle from "../../components/adoptionArticle/AdoptionArticle";
import AdoptSection from "../../components/adoptSection/AdoptSection";
import Header from "../../components/header/Header";
import PetSection from "../../components/petSection/PetSection";
import SearchSection from "../../components/searchSection/SearchSection";
import DesktopNavbar from "../../components/desktopNavbar/DesktopNavbar";
import MobileNavbar from "../../components/mobileNavbar/MobileNavbar";
import { useContext, createContext } from "react";
import { useNav } from "../../hooks/useNav";
import { NavContextType } from "../../types/types";

const NavContext = createContext<NavContextType | null>(null);

const LandingPage = () => {
  const { open, toggleMobileNav } = useNav();
  

  return (
    <NavContext.Provider value={{ open, toggleMobileNav }}>
      <div className="overflow-hidden">
        <Header />
        <DesktopNavbar />
        <MobileNavbar />
        <SearchSection />
        <PetSection key={2} pageNumber={2} heading="Pets Available for Adoption Nearby" />
        <AdoptSection />
        <PetSection key={8} pageNumber={8} heading="Pets Available for Adoption Nearby"/>
        <AdoptionArticle />
      </div>
   
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);

export default LandingPage;
