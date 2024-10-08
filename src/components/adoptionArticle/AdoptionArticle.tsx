import React from "react";
import ArticleCard from "../articleCard/ArticleCard";
import img1 from "../../assets/images/cat.svg";
import img2 from "../../assets/images/dog.svg";

const AdoptionArticle = () => {
  return (
    <div className="min-w-[300px] mt-[50px] mb-[190px] flex flex-wrap justify-center gap-[20px] mx-auto">
      <ArticleCard
        img={img2}
        heading="Dog Adoption Articles"
        text={"Learn more about caring for your new dog"}
        size="large"
        btnText={"Learn More"}
      />
      <ArticleCard
        img={img1}
        heading="Cat Adoption Articles"
        text={"Helpful Insights on what to expect"}
        size="large"
        btnText={"Learn More"}
      />
    </div>
  );
};

export default AdoptionArticle;
