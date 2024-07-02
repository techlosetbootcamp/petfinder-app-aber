import React from "react";
import Card3 from "../../commonComponents/card3/Card3";
import img1 from "../../assets/img6.svg"
import img2 from "../../assets/health.png"
import img3 from "../../assets/img3.svg"

const AdoptSection = () => {
  return (
    <div className="text-center min-w-[300px] max-w-[1220px] py-[58px] mx-auto">
      <p className=" text-black text-[38px] leading-[45px] uppercase">
        Planning to adopt a Pet?
      </p>

      <div className="flex flex-wrap justify-center gap-3 pt-[80px] pb-[32px]">
        <Card3
        img={img1}
          heading="Checklist for new adopters"
          text="Make the adoption transition as smooth as
                possible."
          btnText="Learn More"
        />
        <Card3
        img={img2}
          heading="COVID-19 Resources"
          text="Learn how shelters/rescue groups are adapting.
                Find out how you can help dogs and cats."
          btnText="Learn More"
        />
        <Card3
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
