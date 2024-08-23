import React, { useState } from "react";
import img from "../../assets/images/petCommon.svg";
import btn from "../../assets/images/resizeBtn.svg";

import { usePetDetailContext } from "../../pages/petDetail/PetDetail";

const ImageSection = () => {
  const [isLarge, setIsLarge] = useState<boolean>(false);
  const sizeConstraints = {
    small: "relative lg:h-[486px] xs:h-[325px]",
    large: "bottom-0 h-screen z-50 fixed overflow-hidden",
  };
  const obj = usePetDetailContext();

  return (
    <div
      className={`bg-black w-full ${
        isLarge ? sizeConstraints["large"] : sizeConstraints["small"]
      }`}
    >
      <img
        src={obj?.pet?.photos?.[0]?.small ? obj?.pet?.photos?.[0]?.small : img}
        alt=""
        className={`mx-auto xs:w-[244px] md:w-[440px] ${
          isLarge ? "max-w-[80%]" : "max-w-[440px]"
        } h-full`}
      />

      <div
        onClick={() => setIsLarge(!isLarge)}
        className="absolute right-5 bottom-5"
      >
        <img src={btn} alt="" />
      </div>
    </div>
  );
};

export default ImageSection;
