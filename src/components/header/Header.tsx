import React from "react";
import img from "../../assets/images/upArrow.svg";
import blackHeart from "../../assets/images/blackHeart.svg";
import primaryHeart from "../../assets/images/purpleHeart.svg";
import { IoMenu } from "react-icons/io5";
import { useNavContext } from "../../pages/home/Home";

const Header = () => {
  const object = useNavContext();

  return (
    <div className="h-[70px] w-full ">
      <div className="box-border min-w-[200px] max-w-[1220px] mx-auto md:px-2px xs:px-[12px] flex justify-center">
        <div className="xs:w-full lg:w-[935px] flex md:gap-[50px] xs:gap-[8px] xs:pr-[4px]">
          <div className="">
            <img src="/logo.svg" alt="" className="h-[70px]" />
          </div>

          <div className="flex md:gap-[13.8px] xs:gap-[2px] md:py-[23.8px] xs:py-[22px] ">
            <p className="text-[14px] leading-[22.4px] text-primary">
              All About Pets
            </p>
            <img src={img} alt="" className="h-[22.39px]" />
          </div>
        </div>

        <div className="h-[70px] lg:block items-center xs:flex xs:gap-[4px] xs:pr-[20px] lg:pr-[5px]">
          <img
            src={blackHeart}
            alt=""
            className="mx-auto h-full lg:block xs:hidden "
          />
          <img
            src={primaryHeart}
            alt=""
            className="mx-auto h-[21.84px] xs:block lg:hidden "
          />
          <div onClick={object?.toggleMobileNav} className="lg:hidden">
            <IoMenu className="text-primary" size={30} />
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
