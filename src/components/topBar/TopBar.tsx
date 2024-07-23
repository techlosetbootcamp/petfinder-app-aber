import React from "react";
import img from "../../assets/images/rightArrow.svg";

const TopBar = () => {
  return (
    <div className="min-h-[44px] max-h-[70px] bg-gray-200 xs:px-[15px] xs:py-[13px] sm:py-0">
      <div className="min-w-[300px] max-w-[1220px] min-h-[44px] max-h-[70px] mx-auto flex items-center justify-end md:gap-8 xs:gap-2">
        <div className="text-[14px] leading-[22.4px] ">
          <span className="underline text-primary">Learn more</span>
          <span className="text-black">
            &nbsp; about how Purina and Petfinder are making a difference
            together.&emsp; &emsp;
          </span>
        </div>

        <img src={img} alt="" className="h-[12px] w-[12px] sm:mx-[15px]" />
      </div>
    </div>
  );
};

export default TopBar;
