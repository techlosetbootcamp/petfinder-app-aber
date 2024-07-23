import React from "react";
import AdoptionArticle from "../../components/adoptionArticle/AdoptionArticle";
import AdoptSection from "../../components/adoptSection/AdoptSection";
import PetSection from "../../components/petSection/PetSection";
import SearchSection from "../../components/searchSection/SearchSection";
import DesktopNavbar from "../../components/desktopNavbar/DesktopNavbar";

const LandingPage = () => {
  return (
    <div className="overflow-hidden">
      <DesktopNavbar />

      <SearchSection />
      <PetSection pageNumber={2} heading="Pets Available for Adoption Nearby" />
      <AdoptSection />
      <PetSection pageNumber={8} heading="Pets Available for Adoption Nearby" />
      <AdoptionArticle />
    </div>
  );
};

export default LandingPage;
