import React, { useState } from "react";
import logo from "/logoWhite.svg";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { footerItems, footerLinks } from "../../constants/FooterLinks";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const MobileFooter = () => {
  const [heading, setHeading] = useState("");
  return (
    <div className="bg-primary w-full h-auto lg:hidden">
      <div className="flex flex-col items-center">
        <Link to={"/"} className="mt-[40px] mb-[20px]">
          <img src={logo} alt="" className="mx-auto" />
        </Link>

        <div className="bg-purple w-[312px] flex flex-col gap-[24px] text-primary h-fit p-[23px] rounded-lg text-center ">
          <p className="text-[14px] leading-[24px] px-[8px]">
            To get the latest on pet adoption and pet care, sign up for the
            Petfinder newsletter.
          </p>
          <div className="h-[48px] ">
            <Button
              text="SIGN UP"
              bgColor={"primary"}
              textColor="white"
              width="full"
              radius="medium"
              border="primary"
            />
          </div>
        </div>

        <div className="mt-[46px] mb-[40px] w-full px-[15px] w-full">
          {footerLinks.map((link) => {
            return (
              <div key={link.text} className="">
                <div
                  onClick={() =>
                    heading !== link.text
                      ? setHeading(link.text)
                      : setHeading("")
                  }
                  className="px-[20px] border-t border-white h-[53px] items-center flex justify-between"
                >
                  <p className="text-[14px] leading-[22px] text-white uppercase">
                    {link.text}
                  </p>

                  <div className="mt-1">
                    {heading == link.text ? (
                      <IoIosArrowUp color="white" />
                    ) : (
                      <IoIosArrowDown color="white" />
                    )}
                  </div>
                </div>
                <div
                  className={`px-[20px] py-[10px] flex flex-col ${
                    heading === link.text ? "block" : "hidden"
                  } transition-all ease-in-out translate-y-1 duration-700`}
                >
                  {link.sublinks.map((mySubLinks) => {
                    return (
                      <a
                        key={mySubLinks.text}
                        href=""
                        className="text-white text-[12px]"
                      >
                        {mySubLinks.text}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pb-[42px] px-[17px] flex flex-wrap gap-[10px] justify-center text-[12px] font-[400] leading-[19.2px] text-white">
          {footerItems.map((item, i) => {
            if (item.mobile) {
              return <p className="" key={i}>{item.text}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
