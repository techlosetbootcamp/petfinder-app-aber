import React from "react";
import { links } from "../../constants/navLinks";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNav } from "../../hooks/useNav";
import { useNavContext } from "../../pages/home/Home";

import { IoClose } from "react-icons/io5";

const MobileNavbar = () => {
  const { navClick, setNavClick } = useNav();
  const object = useNavContext();

  return (
    <div className="overflow-hidden">
      <div
        className={`lg:hidden  z-50 overflow-scroll fixed top-0 bg-purple w-full h-full z-10  p-[50px]  flex flex-col  duration-500  ${
          object?.open ? "left-0" : "-left-[100%]"
        }`}
      >
        <div onClick={object?.toggleMobileNav}>
          <IoClose size={30} className="absolute top-4 right-4" />
        </div>
        <div className="pb-20">
          <img src={logo} alt="" />
        </div>
        <div className="flex flex-col text-primary font-bold gap-4 gap-8">
          {links.map((link) => {
            return (
              <div key={link.text}>
                <div className="flex justify-between">
                  <Link
                    to={link.path}
                    className="hover:underline"
                    onClick={
                      link.sublinks
                        ? () => {
                            setNavClick(!navClick);
                          }
                        : object?.toggleMobileNav
                    }
                  >
                    {link.text}
                  </Link>
                  <div className="flex items-center ">
                    {link.sublinks &&
                      (navClick ? (
                        <IoIosArrowUp
                          color="primary"
                          onClick={() => setNavClick(false)}
                        />
                      ) : (
                        <IoIosArrowDown
                          color="primary"
                          onClick={() => setNavClick(true)}
                        />
                      ))}
                  </div>
                </div>
                <div className="w-full block">
                  {link.sublinks && (
                    <div
                      className={` text-primary text-[15px] font-[100] gap-[8px]  rounded-[2px] flex flex-col px-[40px] ${
                        navClick ? "block" : "hidden"
                      } transition-all ease-in-out translate-y-1 duration-700`}
                    >
                      {link.sublinks.map((item) => {
                        return (
                          <Link
                            key={item.text}
                            to={item.path}
                            onClick={object?.toggleMobileNav}
                            className="hover:underline "
                          >
                            {item.text}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
