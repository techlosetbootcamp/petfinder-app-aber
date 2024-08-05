import React from "react";
import { Link } from "react-router-dom";
import { links } from "../../constants/navLinks";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNav } from "../../hooks/useNav";
import { useNavContext } from "../../pages/home/Home";

const DesktopNavbar = () => {
  const { navClick, setNavClick } = useNav();
  const object = useNavContext();
  const handleClick = (e, link) => {
    if (link.sublinks) {
      e.preventDefault();
      setNavClick(!navClick);
    }
  };

  return (
    <nav
      className={`lg:block ${
        object?.hideNav ? "-translate-y-14 " : "translate-y-0"
      } transition duration-300 ease-in-out absolute top-[114px] z-10 xs:hidden bg-primary min-h-[55px] w-full shadow-[0_1px_3px_0px_rgba(0, 0, 0, 0.302)]`}
    >
      <div className="text-white uppercase flex max-w-[1220px] mx-auto gap-[120px] h-14 items-center lg:justify-center xl:justify-normal">
        {links.map((link, i) => {
          return (
            <div key={i}>
              <div className="flex gap-[12px]">
                <Link
                  to={link.path}
                  key={link.text}
                  className="text-[14px] leading-[22.4px] relative hover:underline flex gap-[15px] "
                  onClick={(e) => handleClick(e, link)}
                >
                  {link.text}
                </Link>

                <div className="flex items-center">
                  {link.sublinks &&
                    (navClick ? (
                      <IoIosArrowUp
                        color="white"
                        onClick={() => setNavClick(false)}
                      />
                    ) : (
                      <IoIosArrowDown
                        color="white"
                        onClick={() => setNavClick(true)}
                      />
                    ))}
                </div>
              </div>

              <>
                {link.sublinks && (
                  <div
                    className={`bg-blue text-white text-[13px] absolute p-[20px] rounded-[2px] top-[55px] w-48 flex flex-col gap-[15px] ${
                      navClick ? "block" : "hidden"
                    } transition duration-300 ease-in-out translate-y-1`}
                  >
                    {link.sublinks.map((item) => {
                      return (
                        <Link
                          onClick={() => setNavClick(false)}
                          key={item.text}
                          to={item.path}
                          className="hover:underline"
                        >
                          {item.text}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default DesktopNavbar;
