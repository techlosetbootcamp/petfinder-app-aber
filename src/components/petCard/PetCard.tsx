import React from "react";
import img2 from "../../assets/images/heart.svg";
import { Link } from "react-router-dom";
import { PetCardProps } from "../../types/types";

const PetCard = ({
  text,
  img,
  path,
  shadow,
  city,
  state,
  primaryBreed,
  secondaryBreed,
  width,
  height,
}: PetCardProps) => {
  return (
    <Link to={path}>
      <div
        className={`relative ${
          shadow && "shadow-sm"
        }  sm:h-[301px] rounded-lg ${width}`}
      >
        <img
          className={`rounded-lg ${height} w-full  object-cover`}
          src={img}
        />
        <div className="absolute top-2 right-2 w-11 h-11 rounded-3xl text-white bg-gray-100 items-center content-center justify-self-end">
          <img src={img2} className="mx-auto" />
        </div>

        
        <div className={`absolute bottom-[69px] ${width} rounded-t-lg  h-[8px] bg-white `}/>

        <div
          className={`absolute bottom-[0px] bg-white ${width} min-h-[70px] text-center content-center px-[10px]`}
        >
          <div className="text-[16px] leading-8 text-primary">{text}</div>
          <div className="">
            {primaryBreed != "" && (
              <div className="text-start">
                <div className="text-[16px] leading-8 text-black flex justify-between">
                  <span>Primary Breed:</span>
                  <span>{primaryBreed}</span>
                </div>
                {secondaryBreed && secondaryBreed != "null" && (
                  <div className="text-[16px] leading-8 text-black flex justify-between">
                    <span>Secondary Breed:</span>
                    <span>{secondaryBreed}</span>
                  </div>
                )}
                <div className="text-[16px] leading-8 text-black flex justify-between">
                  <span>Location:</span>
                  <span>
                    {city}, {state}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
