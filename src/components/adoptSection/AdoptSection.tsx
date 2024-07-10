import React from "react";
import img1 from "../../assets/images/img6.svg";
import img2 from "../../assets/images/health.svg";
import img3 from "../../assets/images/img3.svg";
import QueryCard from "../queryCard/QueryCard";

const AdoptSection = () => {
  return (
    <div className="text-center min-w-[300px] max-w-[1220px] py-[58px] mx-auto">
      <p className=" text-black text-[38px] leading-[45px] uppercase">
        Planning to adopt a Pet?
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-[80px] pb-[32px]">
        <QueryCard
          img={img1}
          heading="Checklist for new adopters"
          text="Make the adoption transition as smooth as
                possible."
          btnText="Learn More"
        />
        <QueryCard
          img={img2}
          heading="COVID-19 Resources"
          text="Learn how shelters/rescue groups are adapting.
                Find out how you can help dogs and cats."
          btnText="Learn More"
        />
        <QueryCard
          img={img3}
          heading="Pet Adoption FAQs"
          text="Get answer to all the you questions you haven’t
                thought of for your adoption."
          btnText="Learn More"
        />
      </div>
    </div>
  );
};

export default AdoptSection;
