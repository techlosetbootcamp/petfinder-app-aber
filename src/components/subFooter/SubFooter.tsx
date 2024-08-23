import React from "react";
import icon1 from "../../assets/images/fb.svg";
import icon2 from "../../assets/images/twitter.svg";
import icon3 from "../../assets/images/insta.svg";
import icon4 from "../../assets/images/yt.svg";
import icon5 from "../../assets/images/pinterest.svg";

const SubFooter = () => {
  return (
    <div className=" lg:h-[70px] bg-darkBlue content-center text-white font-[400] xs:leading-[20.8px] lg:leading-[19.2px] xs:text-[13px] lg:text-[12px] xs:pb-[32px] xs:pt-[30px] lg:py-0">
      <div className="min-w-[300px] max-w-[1320px] h-full flex xs:flex-col-reverse lg:flex-row  text-center items-center mx-auto lg:px-[50px] lg:justify-between">
        <div className="flex xs:flex-col lg:flex-row lg:w-[970px] gap-[9.8px]">
          <p className="xs:mb-[10px] xs:mt-[30px] lg:mb-0 lg:mt-0">©2023 Petfinder.com</p>
          <p className="xs:px-[17px] lg:px-0 ">
            All trademarks are owned by Société des Produits Nestlé S.A., or
            used with permission.
          </p>
        </div>

        <div className="w-[230px] flex justify-between ">
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
          <img src={icon4} />
          <img src={icon5} />
        </div>
      </div>
    </div>
  );
};

export default SubFooter;
