import React from "react";
import img from "../../assets/images/upArrow.svg";
import blackHeart from "../../assets/images/blackHeart.svg";
import primaryHeart from "../../assets/images/purpleHeart.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { IoMenu } from "react-icons/io5";
import { useNavContext } from "../../pages/home/Home";
import { useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const object = useNavContext();
  const location = useLocation();

  return (
    <div className="h-[70px] w-full ">
      <div className="box-border min-w-[200px] max-w-[1220px] mx-auto md:px-2px xs:px-[15px] flex justify-center">
        <div className="xs:w-full lg:w-[935px] flex md:gap-[50px] xs:gap-[8px] xs:pr-[4px]">
          <div className="">
            <img src="/logo.svg" alt="" className="h-[70px]" />
          </div>
          <div className="flex gap-[50px] w-full lg:justify-normal xs:justify-center">
            <div
              className={`xs:flex md:gap-[13.8px] xs:gap-[2px] md:py-[23.8px] xs:py-[22px] ${
                location.pathname === "/"
                  ? "text-primary"
                  : "text-black xs:hidden lg:flex"
              }`}
            >
              <p className={`text-[14px] leading-[22.4px] `}>ALL ABOUT PETS</p>
              <img
                src={location.pathname === "/" ? img : downArrow}
                alt=""
                className="h-[22.39px]"
              />
            </div>

            <div
              className={`flex h-full md:gap-[13.8px] xs:gap-[2px] md:py-[23.8px] xs:py-[22px] ${
                location.pathname === "/" && "hidden"
              }`}
            >
              <p className="text-[14px] leading-[22.4px] text-black">
                FIND A PET
              </p>
              <img src={downArrow} alt="" className="h-[22.39px]" />
            </div>
          </div>
        </div>
        <div className="lg:block lg:min-w-[70px] h-[70px] items-center xs:flex xs:gap-[4px] xs:pr-[5px]">
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

        <div className="border-l border-300 w-[215px] py-[24.2px] px-[30px] box-border gap-[22px] h-[70px] xs:hidden lg:flex lg:flex-wrap">
          <p className="text-[16px] leading-[25.6px] text-black">Sign Up</p>
          <p className="text-[16px] leading-[25.6px] text-black">Log In</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
