import React from "react";
import Button from "../../commonComponents/button/Button";
import { footerItems, footerLinks } from "../../constants/FooterLinks";

const MainFooter = () => {
  return (
    <div className="w-full bg-primary text-white box-border xs:hidden lg:block lg:px-[20px]">
      <div className="max-w-[1220px] mx-auto">
        <div className="py-[18px]">
          <img src="/logoWhite.svg" alt="" className="" />
        </div>

        <div className="relative flex lg:gap-[15px] xl:gap-[38px]">
          {footerLinks.map((links,i) => {
            return (
              <div key={i}>
                <h3 className="py-3 uppercase  text-[14px] ">{links.text}</h3>
                {links.sublinks.map((sublinks) => {
                  return <p className="text-[13px]">{sublinks.text}</p>;
                })}
              </div>
            );
          })}

          <div className="absolute right-0">
            <div className="bg-purple text-primary h-fit lg:w-[260px] xl:w-[330px] lg:p-[15px] xl:p-[26px] rounded-lg text-center ">
              <p className="text-[14px] leading-[24px]">
                To get the latest on pet adoption and pet care, sign up for the
                Petfinder newsletter.
              </p>
              <div className="pt-[28px]">
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
        <div className="py-[18px] px-[89px] flex flex-wrap gap-[10px] justify-center text-[12px]">
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
