import React from "react";
import { links } from "../../constants/navLinks";
import { Link } from "react-router-dom";
import logo from "/logo.svg"

import { useNavContext } from "../../pages/landingPage/LandingPage";



import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  
const object = useNavContext();

  return (
    <div className="overflow-hidden">
    
    <div className={`lg:hidden overflow-hidden fixed top-0 bg-purple w-full h-full z-10  flex flex-col justify-center items-center duration-500  ${object?.open ? "left-0" : "-left-[100%]"}`}>
      <div onClick={object?.toggleMobileNav}>
        <IoClose size={30} className="absolute top-4 right-4"/>
      </div>
      <div className="absolute top-12">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-col items-center text-primary font-bold gap-4 gap-8">
      {links.map((link) => {
        return (
          <Link key={link.text} to={link.path} className="hover:underline">
            {link.text}
          </Link>
        );
      })}
      </div>
    </div>
    </div>
  );
};

export default MobileNavbar;
