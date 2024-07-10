import React from "react";
import icon1 from "../../assets/images/fb.svg";
import icon2 from "../../assets/images/twitter.svg";
import icon3 from "../../assets/images/insta.svg";
import icon4 from "../../assets/images/yt.svg";
import icon5 from "../../assets/images/pinterest.svg";

const SubFooter = () => {
  return (
    <div className="xs:h-[183px] lg:h-[70px] bg-darkBlue content-center text-white text-[12px]  ">
      <div className="min-w-[300px] max-w-[1320px] flex xs:flex-col-reverse lg:flex-row  text-center items-center  mx-auto lg:px-[50px] lg:justify-between">
        <div className="flex xs:flex-col lg:flex-row max-w-[970px] gap-[15px] ">
          <p>©2023 Petfinder.com</p>
          <p>
            All trademarks are owned by Société des Produits Nestlé S.A., or
            used with permission.
          </p>
        </div>

        <div className="w-[230px] flex gap-[32px] lg:py-0 xs:py-[10px]">
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
