import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";
import { usePet } from "../../hooks/usePet";
import { useLimit } from "../../hooks/useLimit";
import PetCard from "../petCard/PetCard";
import img from "../../assets/images/petCommon.svg";

type CarousalProps = {
  pageNumber: number;
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Carousal = ({ pageNumber }: CarousalProps) => {
  const obj = usePetDetailContext();
  const { fetchLimitedPets, loading } = usePet();
  const { pets, animalCount, limit } = useLimit(
    fetchLimitedPets,
    obj?.pet?.type,
    obj?.pet?.contact.address?.state,
    obj?.pet?.id
  );

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 0,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="slider-container mx-auto w-full h-full">
      <Slider {...settings}>
        {pageNumber == 2
          ? pets?.slice(0, 50)?.map((item, i) => {
              if (item?.status === "adoptable") {
                return (
                  <div key={i} className="">
                    <PetCard
                      primaryBreed=""
                      secondaryBreed={""}
                      state=""
                      city=""
                      shadow="shadow"
                      width="sm:w-[231px] xs:w-[131px]  mx-auto"
                      height="xs:h-[227.5px] sm:h-[231px]"
                      img={
                        item?.photos?.[0]?.small
                          ? item?.photos?.[0]?.small
                          : img
                      }
                      text={item.name}
                      path={`/petDetail/${item?.id}`}
                    />
                  </div>
                );
              }
            })
          : pets?.slice(51, 100)?.map((item, i) => {
              if (item?.status === "adoptable") {
                return (
                  <PetCard
                    key={i}
                    primaryBreed=""
                    secondaryBreed={""}
                    state=""
                    city=""
                    shadow="shadow"
                    width="sm:w-[231px] xs:w-[131px] mx-auto"
                    height="xs:h-[227.5px] sm:h-[231px]"
                    img={
                      item?.photos?.[0]?.small ? item?.photos?.[0]?.small : img
                    }
                    text={item.name}
                    path={`/petDetail/${item?.id}`}
                  />
                );
              }
            })}
      </Slider>
    </div>
  );
};

export default Carousal;
