import React from "react";
import img2 from "../../assets/images/heart.svg";
import { Link } from "react-router-dom";
import { PetCardProps } from "../../types/types";
import { PetCardShadowConstraints } from "../../constants/StylingConstraints";

const PetCard = ({
  text,
  img,
  path,
  shadow,
  location,
  breed,
}: PetCardProps) => {
  return (
    <Link to={path}>
      <div
        className={`relative ${PetCardShadowConstraints[shadow]} rounded-lg xs:w-[131px] sm:w-56`}
      >
        <img className=" rounded-lg xs:h-32 sm:h-56 w-full" src={img} />
        <div className="absolute top-2 right-2 w-11 h-11 rounded-3xl text-white bg-gray-100 items-center content-center justify-self-end">
          <img src={img2} className="mx-auto" />
        </div>

        <div className="relative bottom-3 bg-white h-16 xs:w-[131px] sm:w-56 rounded-lg text-center content-center">
          <div className="text-[16px] leading-8 text-primary">
            {text.slice(0, 20)}..
          </div>
          <div className="flex text-center justify-center gap-2">
            {breed != "" && (
              <>
                <div className="text-[16px] leading-8 text-primary">
                  {breed.slice(0, 12)}..,
                </div>
                <div className="text-[16px] leading-8 text-primary">
                  {location}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
