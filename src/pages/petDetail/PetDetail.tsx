import React, { createContext, useContext } from "react";
import AboutSection from "../../components/aboutSection/AboutSection";
import AdoptionStories from "../../components/adoptionStories/AdoptionStories";
import ImageSection from "../../components/imageSection/ImageSection";
import PetSection from "../../components/petSection/PetSection";
import PetInquirySection from "../../components/petInquirySection/PetInquirySection";
import { usePet } from "../../hooks/usePet";
import { ImSpinner9 } from "react-icons/im";
import { PetDetailType } from "../../types/types";
import { usePetDetail } from "../../hooks/usePetDetail";
import FooterGroup from "../../components/footerGroup/FooterGroup";

const PetDetailContext = createContext<PetDetailType | null>(null);

const PetDetail = () => {
  const { fetchSinglePet, loading } = usePet();
  const { pet } = usePetDetail(fetchSinglePet);
  return (
    <>
      <PetDetailContext.Provider value={{ pet }}>
        {loading ? (
          <div className="mt-20 grid  min-h-screen">
            <svg
              height={70}
              width={70}
              className="animate-spin mt-20 mx-auto"
              viewBox="0 0 70 70"
            >
              <ImSpinner9 size={70} />
            </svg>
          </div>
        ) : (
          <>
            <ImageSection />
            <AboutSection />
            <PetInquirySection />
            <AdoptionStories />
            <div className="mt-[85px] mb-[96px]">
              <PetSection
                pageNumber={2}
                heading={`More ${pet?.type + "s"} from ${
                  pet?.contact?.address?.state
                } Animals In Need`}
              />
            </div>
          </>
        )}
      </PetDetailContext.Provider>
      <FooterGroup />
    </>
  );
};

export const usePetDetailContext = () => useContext(PetDetailContext);

export default PetDetail;
