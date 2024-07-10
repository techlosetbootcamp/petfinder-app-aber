import React from "react";
import ArticleCard from "../articleCard/ArticleCard";
import img from "../../assets/images/petCommon.svg";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";

const AdoptionStories = () => {
  const obj = usePetDetailContext();
  return (
    <div className="bg-blue lg:px-[60px] ">
      <div className=" py-[58px] lg:px-[50px] px-[10px] text-white">
        <div className="text-center">
          <p className="xs:text-[30px] lg:text-[40px] xs:leading-[36px] lg:leading-[48px] py-[8px]">
            {obj?.pet?.breeds?.primary} Happy Tails
          </p>
          <p className="text-[16px] leading-[19.2px] underline">
            View Pet Adoption Stories
          </p>
        </div>

        <div className="flex xs:gap-[20px] lg:gap-[20px] py-[40px] flex-wrap justify-center">
          <ArticleCard
            img={img}
            heading="Darlene and Molly"
            text={`We had lost x2 fur baby's, one about a
                    month before and had said we were not going to go thru the heartache again. Tha…`}
            size={"medium"}
            btnText={"Read More"}
          />

          <ArticleCard
            img={img}
            heading="Nina & Zuli"
            text={`she is 16 yrs old`}
            size={"medium"}
            btnText={"Read More"}
          />

          <ArticleCard
            img={img}
            heading="Frances & Buster"
            text={`I saw Buster on Pet Finder and he fit what I
                   was looking for perfectly - small and fluffy.
                   He is a senior dog so he is settled, house…`}
            size={"medium"}
            btnText={"Read More"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdoptionStories;
