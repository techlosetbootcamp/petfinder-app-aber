import React from "react";
import img from "../../assets/images/icon1.svg";
import { usePet } from "../../hooks/usePet";

import { useLimit } from "../../hooks/useLimit";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";
import Skeleton from "../skeleton/Skeleton";
import Carousal from "../carousal/Carousal";

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
    <div className="text-center  min-w-[300px] max-w-[1220px] h-full mx-auto flex flex-col gap-[24px]">
      <p className="text-[30px] leading-[36px]  font-[400] text-primary">
        {heading}
      </p>
      <div className="grid gap-[16px] xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  place-items-center">
        {loading ? (
          <Skeleton
            count={limit ?? 0}
            details={false}
            width="sm:w-[231px] xs:w-[131px] "
          />
        ) : (
          <div className="h-full w-full gap-[16px] xs:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
            <Carousal pageNumber={pageNumber} />
          </div>
        )}

        <div className="bg-primary  h-full xs:w-[131px] rounded-[10px] sm:w-56 flex flex-col items-center justify-between">
          <div className=" flex flex-col self-center items-center justify-center xs:h-32 sm:h-56 gap-[20px] w-full ">
            <img src={img} alt="" className="" />
            {!obj && animalCount && limit && (
              <p className="xs:text-[8px] sm:text-[14px] leading-[19.6px] text-white">
                {animalCount - limit} more pets available on Petfinder
              </p>
            )}
          </div>

          <div className="h-[56px]  border-t border-darkBlue w-full flex items-center justify-center">
            <p className="text-[14px] leading-[19.6px] text-white uppercase ">
              Meet them
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSection;
