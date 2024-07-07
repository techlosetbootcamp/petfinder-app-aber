import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../constants/navLinks";


const DesktopNavbar = () => {
    
  return (
    <>
      <nav className="lg:block xs:hidden z-10 relative bg-primary h-[55px] w-full shadow-[0_1px_3px_0px_rgba(0, 0, 0, 0.302)]">
        <div className="text-white uppercase flex max-w-[1220px] mx-auto gap-[120px] h-14 items-center lg:justify-center xl:justify-normal">
          {links.map((link) => {
            return (
              <Link
                to={link.path}
                key={link.text}
                className="text-[14px] leading-[22.4px]"
              >
                {link.text}
              </Link>
            );
          })}
        </div>
  

      </nav>


    </>
  );
};

export default DesktopNavbar;

