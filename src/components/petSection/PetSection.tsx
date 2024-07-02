import React, { useEffect } from "react";
import Card2 from "../../commonComponents/card2/Card2";
import img from "../../assets/petCommon.png";
import { usePet } from "../../hooks/usePet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import { ImSpinner9 } from "react-icons/im";

const PetSection = ({ pageNumber, heading }) => {
  const { fetchLimitedPets, loading } = usePet("", "", pageNumber);
  const pets = useSelector(
    (state: RootState) => state?.pets?.limitedPets?.animals
  );


  useEffect(()=>{
    fetchLimitedPets()

  },[pageNumber])


  return (
    <div className="text-center min-w-[300px] max-w-[1220px] mb-[50px] mx-auto">
      <p className="text-3xl text-primary mb-6">{heading}</p>

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

      <div className="flex flex-wrap gap-[16px] justify-center">
        {pets?.map((item) => {
          if (item?.status === "adoptable") {
            return (
              <Card2
              key={item?.name}
              breed=""
              location=""
                shadow="shadow"
                img={item?.photos?.[0]?.small ? item?.photos?.[0]?.small : img}
                text={item.name}
                path={`/petDetail/${item?.id}`}
              />
            );
          }
        })}
      
      </div>
      }



    </div>
  );
};

export default PetSection;
