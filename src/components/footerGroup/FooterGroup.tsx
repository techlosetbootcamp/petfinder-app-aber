import React from "react";
import Footer from "../../components/footer/Footer";
import MainFooter from "../../components/mainFooter/MainFooter";
import MobileFooter from "../../components/mobileFooter/MobileFooter";
import SubFooter from "../../components/subFooter/SubFooter";

const FooterGroup = () => {
  return (
    <>
      <Footer />
      <MainFooter />
      <MobileFooter />
      <SubFooter />
    </>
  );
};

export default FooterGroup;
