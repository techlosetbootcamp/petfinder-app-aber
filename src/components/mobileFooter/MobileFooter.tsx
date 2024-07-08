import React, { useState } from "react";
import logo from "/logoWhite.svg";
import Button from "../../commonComponents/button/Button";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { footerItems, footerLinks } from "../../constants/FooterLinks";

const MobileFooter = () => {
  const [heading, setHeading] = useState("");
  return (
    <div className="bg-primary border-2 w-full h-auto lg:hidden">
      <div className="flex flex-col items-center px-[10px]">
        <img src={logo} alt="" className="mx-auto" />

        <div className="bg-purple text-primary h-fit p-[26px] rounded-lg text-center ">
          <p className="text-[14px] leading-[24px]">
            To get the latest on pet adoption and pet care, sign up for the
            Petfinder newsletter.
          </p>
          <div className="pt-[28px]">
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

        <div className="py-[40px] w-full">
          {footerLinks.map((link) => {
            return (
              <div key={link.text} className="">
                <div
                  onClick={() =>
                    heading !== link.text
                      ? setHeading(link.text)
                      : setHeading("")
                  }
                  className="px-[20px] border-t border-white  py-[10px] flex justify-between"
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

        <div className="py-[10px] px-[2px] flex flex-wrap gap-[10px] justify-center text-[10px] text-white">
          {footerItems.map((item,i) => {
            if (item.mobile) {
              return <p key={i}>{item.text}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
