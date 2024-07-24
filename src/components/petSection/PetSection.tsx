import React from "react";
import Card2 from "../petCard/PetCard";
import img from "../../assets/images/petCommon.svg";
import img2 from "../../assets/images/icon1.svg";
import { usePet } from "../../hooks/usePet";

import { ImSpinner9 } from "react-icons/im";

import { useLimit } from "../../hooks/useLimit";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";

const PetSection = ({ pageNumber, heading }) => {
  const obj = usePetDetailContext();
  const { fetchLimitedPets, loading } = usePet();
  const { pets, animalCount, limit } = useLimit(
    fetchLimitedPets,
    obj?.pet?.type,
    obj?.pet?.contact.address?.state,
    obj?.pet?.id
  );

  return (
    <div className="text-center min-w-[300px] max-w-[1220px] mb-[50px] mx-auto">
      <p className="text-3xl text-primary mb-6">{heading}</p>

      {loading ? (
        <div className="mt-20 grid place-items-center min-h-screen">
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
        <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-rows-1 gap-[16px] justify-center place-items-center mx-auto overflow-hidden">
          {pageNumber == 2
            ? pets?.slice(0, limit)?.map((item, i) => {
                if (item?.status === "adoptable") {
                  return (
                    <Card2
                      key={i}
                      primaryBreed=""
                      secondaryBreed={""}
                      state=""
                      city=""
                      shadow="shadow"
                      width="sm:w-[231px] xs:w-[131px]"
                      height="xs:h-[227.5px] sm:h-[231px]"
                      img={
                        item?.photos?.[0]?.small
                          ? item?.photos?.[0]?.small
                          : img
                      }
                      text={item.name}
                      path={`/petDetail/${item?.id}`}
                    />
                  );
                }
              })
            : pets?.slice(10, limit && 10 + limit)?.map((item, i) => {
                if (item?.status === "adoptable") {
                  return (
                    <Card2
                      key={i}
                      primaryBreed=""
                      secondaryBreed={""}
                      city=""
                      state=""
                      shadow="shadow"
                      width="sm:w-[231px] xs:w-[131px]"
                      height="xs:h-[227.5px] sm:h-[231px]"
                      img={
                        item?.photos?.[0]?.small
                          ? item?.photos?.[0]?.small
                          : img
                      }
                      text={item.name}
                      path={`/petDetail/${item?.id}`}
                    />
                  );
                }
              })}

          <div className="bg-primary h-full xs:w-[131px] rounded-[10px] sm:w-56 flex flex-col items-center justify-between">
            <div className=" flex flex-col self-center items-center justify-center xs:h-32 sm:h-56 gap-[20px] w-full py-[5px]">
              <img src={img2} alt="" className="" />
              {animalCount && limit && !obj && (
                <p className="xs:text-[8px] sm:text-[14px] leading-[19.6px] text-white">
                  {animalCount - limit} more pets available on Petfinder
                </p>
              )}
            </div>

            <div className="h-[56px] border-t border-darkBlue w-full flex items-center justify-center">
              <p className="text-[14px] leading-[19.6px] text-white uppercase ">
                Meet them
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetSection;
