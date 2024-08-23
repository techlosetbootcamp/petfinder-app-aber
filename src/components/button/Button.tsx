import React from "react";
import { ButtonProps } from "../../types/types";
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
}: ButtonProps) => {
  return (
    <input
      type="button"
      value={text}
      className={`self-center ${ButtonWidthConstraints[width]} ${ButtonRadiusConstraints[radius]}  h-[45px] bg-${bgColor} text-[14px] leading-[19.6px] border-2 border-${border} text-${textColor} `}
    />
  );
};

export default Button;
