import React from "react";
import bgImage from "../../assets/images/background.jfif";
import img1 from "../../assets/images/img3.svg";
import img2 from "../../assets/images/img4.svg";
import img3 from "../../assets/images/img5.svg";
import img4 from "../../assets/images/img6.svg";
import Card from "../imageCard/ImageCard";

import SearchInput from "../searchInput/SearchInput";

import AnimalModal from "../animalModal/AnimalModal";

import { useSearch } from "../../hooks/useSearch";

const cardData = [
  {
    img: img1,
    text: "Dogs",
    path: "/categories?slug=Dog",
  },
  {
    img: img2,
    text: "Cats",
    path: "/categories?slug=Cat",
  },
  {
    img: img3,
    text: "Other Animals",
    path: "#",
  },
  {
    img: img4,
    text: "Shelter & Rescues",
    path: "#",
  },
];

const SearchSection = () => {
  const { isModalOpen, toggleModal } = useSearch();

  return (
    <section className=" box-border ">
      <div className="relative border-b-[10px] border-primary sm:h-[410px] xs:h-[280px] overflow-hidden">
        <img
          src={bgImage}
          className="brightness-75 w-full sm:h-full xs:h-full bg-center bg-cover"
        />

        <div className="flex justify-center self-center left-0 right-0 mx-auto absolute lg:top-[75px] xs:top-[20px]">
          <SearchInput />
        </div>

        <div className="absolute xs:bottom-20 sm:bottom-48 lg:bottom-28 xl:bottom-24 2xl:bottom-28 text-center w-full">
          <p className="font-bold text-white xs:text-[30px] xl:text-[41.84px] xs:leading-[34px] md:leading-[24px] xl:leading-[54px]">
            Find your new best friend
          </p>
          <p className="font-bold text-white lg:text-[14px] xl:text-[16.41px] leading-[32px] xs:hidden xl:block">
            Browse pets from our network of over 11,500 shelters and rescues
          </p>
        </div>
      </div>

      <div
        className={`absolute ${
          isModalOpen ? "block" : "hidden"
        } flex justify-center z-10 left-0 right-0 mx-auto  xs:-bottom-28 lg:bottom-20`}
      >
        <AnimalModal onClick={toggleModal} />
      </div>

      <div className="w-fit mx-auto gap-[16px] grid xs:grid-cols-2 lg:grid-cols-4 relative xs:bottom-8 lg:bottom-20 ">
        {cardData.map((item) => {
          return (
            <Card
              key={item.text}
              img={item.img}
              text={item.text}
              path={item.path}
              onClick={item.text === "Other Animals" ? toggleModal : () => {}}
              size="medium"
            />
          );
        })}
      </div>
    </section>
  );
};

export default SearchSection;
