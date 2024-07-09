import React from "react";
import img from "../../assets/images/upArrow.png";
import img2 from "../../assets/images/blackHeart.png";
import { IoMenu } from "react-icons/io5";
import { useNavContext } from "../../pages/landingPage/LandingPage";


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

        <div className="h-[70px] lg:block xs:flex xs:gap-[4px] xs:pr-[20px] lg:pr-[5px]">
          <img src={img2} alt="" className="mx-auto h-full " />
          <div onClick={object?.toggleMobileNav}  className="mt-[21px] lg:hidden">
             <IoMenu size={25}/>
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
