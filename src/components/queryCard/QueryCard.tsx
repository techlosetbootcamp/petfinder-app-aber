import React from "react";
import Button from "../button/Button";
import { QueryCardProps } from "../../types/types";

const QueryCard = ({ btnText, heading, text, img }: QueryCardProps) => {
  return (
    <div>
      <div className="xs:w-auto lg:w-[406.67px] bg-white box-border">
        <div className="flex flex-col self-center box-border  h-full justify-center">
          <img src={img} className="h-[100px] w-[100px] mb-[20px] mx-auto" />
          <p className="text-primary text-[20px] font-[400] leading-[32px] h-[48px] mb-[12px] lg:w-[406.67px] text-center">{heading}</p>
          <p className="w-full px-[20px] mx-auto font-[400] text-[16px] leading-[25px]">{text}</p>
          <div className="h-[87px] pt-[30px] pb-[12px]">
          <Button
            text={btnText}
            width={"medium"}
            radius={"medium"}
            textColor="primary"
            bgColor="white"
            border="primary"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
