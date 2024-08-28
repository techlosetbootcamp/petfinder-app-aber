import React, { useState } from "react";
import img from "../../assets/images/alert.svg";
import img2 from "../../assets/images/img7.svg";
import img3 from "../../assets/images/location.svg";
import img4 from "../../assets/images/contact.svg";


import Button from "../button/Button";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";

const AboutSection = () => {
  const [tabName,setTabName] = useState("About")
  const obj = usePetDetailContext();
  return (
    <div className=" h-fit xs:bg-gray-200 lg:bg-white">
      <div className="bg-gray-200 h-[209px]" />

      <div className="flex pb-[80px] xs:items-center lg:items-start lg:justify-between lg:px-[110px] gap-[20px] lg:flex-row xs:flex-col -mt-[180px] ">
        <section className="bg-white w-[806px] min-h-[504px] p-6 rounded-[10px] shadow-md lg:block xs:hidden">
          <p className="text-black text-[40px]">{obj?.pet?.name}</p>

          <div className="flex gap-2">
            <p className="text-primary text-[16px] underline">
              {obj?.pet?.breeds?.primary}
            </p>
            <p className="text-black text-[14px]">•</p>
            <p className="text-black text-[16px]">
              {obj?.pet?.contact?.address?.city},{" "}
              {obj?.pet?.contact?.address?.state}
            </p>
          </div>

          <div className="flex gap-2 border-t border-b py-4 my-8">
            <p className="text-black text-[16px]">{obj?.pet?.age}</p>
            <p className="text-black text-[14px]">•</p>
            <p className="text-black text-[16px]">{obj?.pet?.gender}</p>
            <p className="text-black text-[14px]">•</p>
            <p className="text-black text-[16px]">{obj?.pet?.size}</p>
          </div>

          <div className="border-b pb-16">
            <p className="text-black text-[30px] leading-[36px]">About</p>
            <p className="text-black text-[16px] leading-[25.6px]">
              {obj?.pet?.description}
            </p>
            <p className="text-black text-[14px] leading-[22.4px] uppercase italic underline">
              {obj?.pet?.status}
            </p>
          </div>

          <div className="flex pt-6">
            <img src={img} alt="" className="m-1 h-4" />
            <p className="text-text-black text-[14px] leading-[22px] italic">
              Petfinder recommends that you should always take reasonable
              security steps before making online payments.
            </p>
          </div>
        </section>

        <section className="w-full lg:hidden flex flex-col gap-4 ">
          <div>
          <div className="relative bg-white h-[184px] border-t border-b border-gray-300 w-full py-[26px] px-[15px] text-center flex flex-col justify-between">
            <p className="text-black text-[30px] leading-[36px]">
              {obj?.pet?.name}
            </p>

            <div className="flex gap-2 justify-center">
              <p className="text-primary text-[14px] leading-[22.2px] underline">
                {obj?.pet?.breeds?.primary}
              </p>
              <p className="text-black text-[14px] leading-[22.2px] ">•</p>
              <p className="text-black text-[14px] leading-[22.2px] ">
                {obj?.pet?.contact?.address?.city},{" "}
                {obj?.pet?.contact?.address?.state}
              </p>
            </div>

            <div className="flex gap-2 justify-center">
              <p className="text-black text-[16px]">{obj?.pet?.age}</p>
              <p className="text-black text-[14px]">•</p>
              <p className="text-black text-[16px]">{obj?.pet?.gender}</p>
              <p className="text-black text-[14px]">•</p>
              <p className="text-black text-[16px]">{obj?.pet?.size}</p>
            </div>

            {/* <div className="absolute flex gap-[10px] bottom-0 right-[15px]">
              <img src={heartIcon} alt=""  className="w-[45px] h-[45px] p-0 "/>
              <img src={shareIcon} alt="" className="w-[45px] h-[45px] p-0"/>

            </div> */}
          </div>

          <div className="bg-white flex">
            <p onClick={()=>setTabName("About")} className={`px-[14px] pt-[18px] pb-[17px] text-[15px] leading-[24px] text-gray-400 ${tabName==="About" && "border-b-2 "} border-primary`}>About</p>
            <p onClick={()=>setTabName("Organization")} className={`px-[14px] pt-[18px] pb-[17px] text-[15px] leading-[24px] text-gray-400 ${tabName==="Organization" && "border-b-2 "} border-primary`}>Organization</p>
            <p onClick={()=>setTabName("Other Pets")} className={`px-[14px] pt-[18px] pb-[17px] text-[15px] leading-[24px] text-gray-400 ${tabName==="Other Pets" && "border-b-2 "} border-primary`}>Other Pets</p>
          </div>
          </div>

          <div className="h-[185px] bg-white px-[15px] pt-[26px] border-t border-b border-gray-300">
            <p className="text-black text-[30px] leading-[36px] pb-[17px]">
              About
            </p>
            <p className="text-black text-[16px] leading-[25.6px]">
              {obj?.pet?.description}
            </p>
            <p className="text-black text-[14px] leading-[22.4px] uppercase italic underline">
              {obj?.pet?.status}
            </p>
          </div>

          <div className="bg-white flex gap-2 px-[15px] h-[114px] items-center border-t border-b border-gray-300">
            <img src={img} alt="" className="h-6" />
            <p className="text-text-black text-[14px] leading-[22px] italic">
              Petfinder recommends that you should always take reasonable
              security steps before making online payments.
            </p>
          </div>
        </section>

        <section className="xs:w-full lg:w-fit flex flex-col gap-[96px]">

          <div className="lg:px-0 xs:px-[15px]">
          <div className="bg-primary w-full rounded-[10px] flex flex-col items-center ">
            <div className="flex flex-col gap-[30px] py-[30px] w-full">
              <p className="text-[20] leading-[32px] px-[42px] text-center text-white">
                Considering {obj?.pet?.name} for adoption?
              </p>

              <div className=" w-full flex flex-col gap-[15px] px-[30px]">
                <div className="h-[45px]">
                  <Button
                    text={"START YOUR INQUIRY"}
                    bgColor={"white"}
                    textColor="primary"
                    width="full"
                    radius="medium"
                    border="white"
                  />
                </div>

                <div className="h-[45px]">
                  <Button
                    text={"READ FAQS"}
                    bgColor={"primary"}
                    textColor="white"
                    width="full"
                    radius="medium"
                    border="white"
                  />
                </div>
              </div>
            </div>

            <div className="w-full min-h-[56px] flex justify-between border-t border-black rounded-[10px]">
              <div className="w-[50%] rounded-l-[10px] overflow-hidden border-r border-black">
               
                <Button
                  text={"SPONSOR"}
                  textColor={"white"}
                  bgColor="primary"
                  border="primary"
                  width="full"
                  radius="0px"
                  
                />
              </div>
              <div className="w-[50%] rounded-r-[10px] overflow-hidden">
                <Button
                  text={"FAVOURITE"}
                  textColor={"white"}
                  bgColor="primary"
                  border="primary"
                  width="full"
                  radius="0px"
                  image = {true}
                />
              </div>
            </div>
          </div>
          </div>

          <div className="relative bg-white xs:w-full lg:w-[393px] lg:shadow-lg lg:rounded-[10px] px-[20px] pt-[40px] xs:border-t xs:border-b lg:border-0 border-gray-300">
            <div className="text-center pt-[29px] pb-[33px]">
              <p className="xs:text-[27px] lg:text-[30px] leading-[36px] text-black text-center">
                {obj?.pet?.contact?.address?.state} Animals In Need
              </p>
              <p className="text-[14px] leading-[22.4px] text-black">
                {obj?.pet?.contact?.address?.city},{" "}
                {obj?.pet?.contact?.address?.state}
              </p>
            </div>

            <div className="py-[30px] ">
              <div className=" flex flex-col gap-[15px] mb-[20px]">
            <div className="flex border-b ">
              <div>
                <img
                  src={img3}
                  alt=""
                  className="mr-[17px] h-[22px] w-[22px]"
                />
              </div>
              <div className="h-[60px] w-full">
                <p className="text-[14px] leading-[22.4px] text-black">
                  Location Address
                </p>
                <p className="text-[14px] leading-[22.4px] text-black">
                  {obj?.pet?.contact?.address?.city},{" "}
                  {obj?.pet?.contact?.address?.state}
                </p>
              </div>
            </div>
            
            <div className="border-b flex">
              <img src={img4} alt="" className="mr-[17px] h-[22px] w-[22px]" />
              <p className="text-[14px] leading-[22.4px]  h-[39px] w-full text-primary">
                {obj?.pet?.contact?.phone}
              </p>
            </div>
            </div>
            <div className="h-[45px] justify-center">
              <Button
                text={"MORE ABOUT US"}
                bgColor={"white"}
                textColor="black"
                border="black"
                width="full"
                radius="medium"
              />
            </div>

            <div className="absolute left-0 right-0 mx-auto -top-14 h-[115px] w-[115px] bg-primary rounded-full content-center border-[7px] border-white">
              <img src={img2} alt="" className="mx-auto" />
            </div>
            </div>
          </div>

          {/* <div className="relative bg-white xs:w-full lg:w-[393px] h-[401px] shadow-lg  lg:rounded-[10px] my-[96px]  px-[20px] ">
        
            <div className="absolute left-0 right-0 mx-auto -top-14 h-[115px] w-[115px] bg-primary rounded-full content-center border-[7px] border-white">
              <img src={img2} alt="" className="mx-auto" />
            </div>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
