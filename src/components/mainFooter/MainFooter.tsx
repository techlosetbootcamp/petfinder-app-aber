import React from "react";
import Button from "../button/Button";
import { footerItems, footerLinks } from "../../constants/FooterLinks";
import { Link } from "react-router-dom";

const MainFooter = () => {
  return (
    <div className="w-full  bg-primary py-[40px] text-white box-border xs:hidden lg:block lg:px-[20px]">
      <div className="max-w-[1220px] flex flex-col gap-[18px]  mx-auto ">
        <div className="max-h-[35px]">
          <Link to={"/"}>
            <img src="/logoWhite.svg" alt="" className="" />
          </Link>
        </div>

        <div className="relative flex lg:gap-[15px] xl:gap-[38px]">
          {footerLinks.map((links, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-[11px] pr-[2px]"
              >
                <h3 className="uppercase font-[400] leading-[22px] text-[14px]">
                  {links.text}
                </h3>
                <div className="flex flex-col gap-[8px]">
                  {links.sublinks.map((sublinks) => {
                    return (
                      <p
                        key={sublinks.text}
                        className="text-[13px] font-[400] leading-[16px]"
                      >
                        {sublinks.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="absolute lg:right-0 xl:right-[21px]">
            <div className="bg-purple text-primary h-fit lg:w-[260px] xl:w-[330px] lg:p-[15px] xl:p-[23px] rounded-lg text-center ">
              <div className="flex flex-col gap-[24px]">
                <p className="text-[14px] leading-[24px]">
                  To get the latest on pet adoption and pet care, sign up for
                  the Petfinder newsletter.
                </p>
                <div className="px-[22px] h-[48px]">
                  <Button
                    text="SIGN UP"
                    width="full"
                    radius="medium"
                    bgColor={"primary"}
                    textColor="white"
                    border="primary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[89px] pt-[16px] flex flex-wrap gap-[10px] justify-center font-[400] leading-[19.2px] text-[12px]">
          {footerItems.map((item, i) => {
            if (item.desktop) {
              return <p key={i}>{item.text}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
