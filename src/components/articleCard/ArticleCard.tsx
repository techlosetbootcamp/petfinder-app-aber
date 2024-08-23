import React from "react";

import { ArticleCardProps } from "../../types/types";
import { ArticleCardSizeConstraints } from "../../constants/StylingConstraints";

const ArticleCard = ({
  text,
  btnText,
  size,
  heading,
  img,
}: ArticleCardProps) => {
  return (
    <div className={`${ArticleCardSizeConstraints[size]} relative`}>
      <img
        src={img}
        alt=""
        className="w-full h-[260px] rounded-[8px] object-cover object-center"
      />

      <div className="h-[18px] bg-white rounded-t-[157px] top-[231px] w-full absolute" />

      <div
        className={`relative ${
          size === "large" ? "pt-[70px]" : "pt-[15px]"
        }  min-h-[260px]  w-full bottom-3 bg-white text-center rounded-b-[10px] `}
      >
        {size == "large" && (
          <div className=" w-full  h-[100px] left-0 content-center absolute -top-12  block">
            <img
              src={img}
              alt=""
              className="h-[88px] w-[88px] border-[6px] mx-auto border-white rounded-full object-cover"
            />
          </div>
        )}

        <p className="text-[20px] leading-8 text-black h-[48px]">{heading}</p>

        <p className="text-[16px] leading-8 text-black  min-h-[62.39px] pb-[25px]">
          {text}
        </p>

        <div className=" h-[55px] w-full border-t content-center absolute bottom-0 ">
          <p className="text-sm text-primary w-full  h-full flex items-center justify-center">
            {btnText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
