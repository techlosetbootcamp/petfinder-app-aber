import React from "react";
import Card4 from "../articleCard/ArticleCard";
import img1 from "../../assets/images/pet2.png";
import img2 from "../../assets/images/dog.png";

const AdoptionArticle = () => {
  return (
    <div className="max-w-[1220px] min-w-[300px] py-10 flex flex-wrap justify-center gap-3 mx-auto">
      <Card4
        img={img2}
        heading="Dog Adoption Articles"
        text={"Learn more about caring for your new dog"}
        size="large"
        btnText={"Learn More"}
      />
      <Card4
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
