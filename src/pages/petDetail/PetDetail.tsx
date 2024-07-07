import React, { createContext, useContext, useEffect, useState } from "react";
import AboutSection from "../../components/aboutSection/AboutSection";
import AdoptionStories from "../../components/adoptionStories/AdoptionStories";
import Header from "../../components/header/Header";
import ImageSection from "../../components/imageSection/ImageSection";
import PetSection from "../../components/petSection/PetSection";
import PetInquirySection from "../../components/petInquirySection/PetInquirySection";
import { useParams } from "react-router-dom";


import { usePet } from "../../hooks/usePet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ImSpinner9 } from "react-icons/im";
import { PetDetailType } from "../../@types/types";




const PetDetailContext = createContext<PetDetailType | null>(null);

const PetDetail = () => {
  const params = useParams();
  const pet= useSelector((state: RootState) => state?.pets?.singlePet?.animal);
  console.log("oet in petDetail", pet)
  

  const { petId } = params;


  const { 
    fetchSinglePet, 
    animal, 
    setAnimal, 
    loading, 
    } = usePet("",petId);

  useEffect(() => {
    fetchSinglePet(petId);
  }, [petId]);
 
  return (
    <PetDetailContext.Provider value={{ pet }}>

      {
        loading ?
        (
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
        )
        :
<>
      
      <Header/> 
      <ImageSection />
      <AboutSection />
      <PetInquirySection />
      <AdoptionStories />
      {/* <PetSection pageNumber={26} heading={"More Animals"}/> */}
      </>
      }
    </PetDetailContext.Provider>
  );
};

export const usePetDetailContext = () => useContext(PetDetailContext);


export default PetDetail;
