import React from "react";
import img from "../../assets/images/upArrow.svg";
import blackHeart from "../../assets/images/blackHeart.svg";
import primaryHeart from "../../assets/images/purpleHeart.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { IoMenu } from "react-icons/io5";
import { useNavContext } from "../../pages/home/Home";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const object = useNavContext();
  const location = useLocation();

  return (
    <div className="max-h-[70px] z-50 bg-white sticky  w-full">
      <div className="box-border min-w-[200px] max-w-[1220px] xs:mx-[15px] xl:mx-auto">
        <div className="flex justify-center">
          <div className="xs:w-full lg:max-w-[935px] flex md:gap-[50px] xs:gap-[8px] xs:pr-[4px]">
            <Link to={"/"}>
              <img src="/logo.svg" alt="" className="h-[70px]" />
            </Link>
            <div className="flex gap-[50px] w-full lg:justify-normal xs:justify-center">
              <div
                onClick={() => object?.toggleDesktopNav("allAboutPets")}
                className={`lg:gap-[13.8px] cursor-pointer lg:flex lg:py-[23.8px] xs:hidden ${
                  object?.hideNav && object.clickedElement === "allAboutPets"
                    ? "text-black"
                    : "text-primary"
                }`}
              >
                <p className={`text-[14px] leading-[22.4px] `}>
                  ALL ABOUT PETS
                </p>
                <img
                  src={
                    object?.hideNav && object.clickedElement === "allAboutPets"
                      ? downArrow
                      : img
                  }
                  alt=""
                  className="h-[22.39px]"
                />
              </div>

              <div
                onClick={() => object?.toggleDesktopNav("findAPet")}
                className={` h-full md:gap-[13.8px] cursor-pointer   md:py-[23.8px] xs:hidden ${
                  location.pathname === "/" ? "hidden" : "lg:flex"
                }`}
              >
                <p
                  className={`text-[14px] leading-[22.4px] ${
                    object?.hideNav && object?.clickedElement === "findAPet"
                      ? "text-black"
                      : "text-primary"
                  }`}
                >
                  FIND A PET
                </p>
                <img
                  src={
                    object?.hideNav && object?.clickedElement === "findAPet"
                      ? downArrow
                      : img
                  }
                  alt=""
                  className="h-[22.39px]"
                />
              </div>
            </div>
          </div>

          <div className="lg:block min-w-[70px] h-[70px] items-center xs:flex">
            <img
              src={blackHeart}
              alt=""
              className="h-full w-full lg:block xs:hidden border-box"
            />
            <img
              src={primaryHeart}
              alt=""
              className="mx-auto h-[22px]  xs:block lg:hidden "
            />
            <div onClick={object?.toggleMobileNav} className="lg:hidden">
              <IoMenu className="text-primary" size={28} />
            </div>
          </div>

          <div className="border-l border-300 min-w-[215px] py-[24.2px] px-[30px] box-border lg:gap-[18px] xl:gap-[22px] h-[70px] xs:hidden lg:flex lg:flex-wrap">
            <p className="text-[16px] leading-[25.6px] text-black">Sign Up</p>
            <p className="text-[16px] leading-[25.6px] text-black">Log In</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
