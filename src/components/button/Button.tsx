import React from "react";
import { ButtonProps } from "../../types/types";
import whiteHeart from "../../assets/images/whiteHeart.svg"
import {
  ButtonRadiusConstraints,
  ButtonWidthConstraints,
} from "../../constants/StylingConstraints";

const Button = ({
  bgColor,
  textColor,
  text,
  width,
  radius,
  border,
  image,
}: ButtonProps) => {
  return (
    <div className={`h-[45px] flex items-center gap-[15px] justify-center border-2 border-${border} text-${textColor} ${ButtonWidthConstraints[width]} ${ButtonRadiusConstraints[radius]}  bg-${bgColor}`}>
      {
        image &&
       <img src={whiteHeart} alt="" className="w-[26px] h-[22px]" />
      }

      <input
        type="button"
        value={text}
        className={`self-center  text-[14px] leading-[19.6px]  `}
      />
    </div>
  );
};

export default Button;
