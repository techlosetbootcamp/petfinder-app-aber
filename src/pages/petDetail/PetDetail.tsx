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

const PetDetailContext = createContext<PetDetailType | null>(null);

const PetDetail = () => {
  const { fetchSinglePet, loading } = usePet();
  const { pet } = usePetDetail(fetchSinglePet);
  return (
    <PetDetailContext.Provider value={{ pet }}>
      {loading ? (
        <div className="mt-20 grid place-items-center min-h-96">
          <svg
            height={70}
            width={70}
            className="animate-spin mx-auto"
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
          <PetSection
            pageNumber={5}
            heading={`More ${pet?.type + "s"} from ${
              pet?.contact?.address?.state
            } Animals In Need`}
          />
        </>
      )}
    </PetDetailContext.Provider>
  );
};

export const usePetDetailContext = () => useContext(PetDetailContext);

export default PetDetail;
