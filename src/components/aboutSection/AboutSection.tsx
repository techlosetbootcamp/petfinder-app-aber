import React from "react";
import img from "../../assets/images/alert.svg";
import img2 from "../../assets/images/img7.svg";
import img3 from "../../assets/images/location.svg";
import img4 from "../../assets/images/contact.svg";
import Button from "../button/Button";
import { usePetDetailContext } from "../../pages/petDetail/PetDetail";

const AboutSection = () => {
  const obj = usePetDetailContext();
  return (
    <div className=" h-fit xs:bg-gray-200 lg:bg-white">
      <div className="bg-gray-200 h-48 pt-6 " />

      <div className="flex xs:items-center lg:items-start lg:justify-between lg:px-[110px] gap-[20px] lg:flex-row xs:flex-col -mt-40 ">
        <section className="bg-white w-[806px] h-[504px] p-6 rounded-[10px] shadow-md lg:block xs:hidden">
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
          <div className="bg-white h-[184px] border-2 w-full py-[26px] px-[15px] text-center flex flex-col justify-between">
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
          </div>

          <div className="h-[185px] bg-white px-[15px] pt-[26px]">
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

          <div className="bg-white flex gap-2 px-[15px] h-[114px] items-center">
            <img src={img} alt="" className="h-6" />
            <p className="text-text-black text-[14px] leading-[22px] italic">
              Petfinder recommends that you should always take reasonable
              security steps before making online payments.
            </p>
          </div>
        </section>

        <section className="xs:w-full lg:w-fit">
          <div className="xs:px-[10px]">
            <div className="bg-primary min-w-[300px] max-w-[393px] h-[283px] rounded-[10px] pt-5 flex flex-col justify-between space-around items-center mx-auto">
              <p className="text-[20] text-white">
                Considering {obj?.pet?.name} for adoption?
              </p>

              <div className="w-[80%] flex flex-col  gap-[15px] ">
                <Button
                  text={"START YOUR INQUIRY"}
                  bgColor={"white"}
                  textColor="primary"
                  width="full"
                  radius="medium"
                  border="white"
                />
                <Button
                  text={"READ FAQS"}
                  bgColor={"primary"}
                  textColor="white"
                  width="full"
                  radius="medium"
                  border="white"
                />
              </div>

              <div className="w-full flex justify-between border-t border-black">
                <div className="w-[50%] border-r border-black">
                  <Button
                    text={"SPONSOR"}
                    textColor={"white"}
                    bgColor="primary"
                    border="primary"
                    width="full"
                    radius="0px"
                  />
                </div>
                <div className="w-[50%]">
                  <Button
                    text={"FAVOURITE"}
                    textColor={"white"}
                    bgColor="primary"
                    border="primary"
                    width="full"
                    radius="0px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-white xs:w-full lg:w-[393px] h-[401px] shadow-lg  lg:rounded-[10px] my-[96px]  px-[20px] ">
            <div className="text-center pt-[69px] pb-[33px]">
              <p className="xs:text-[27px] lg:text-[30px] leading-[36px] text-black">
                {obj?.pet?.contact?.address?.state} Animals In Need
              </p>
              <p className="text-[14px] leading-[22.4px] text-black">
                {obj?.pet?.contact?.address?.city},{" "}
                {obj?.pet?.contact?.address?.state}
              </p>
            </div>

            <div className="pt-[32px] pb-[20px] flex">
              <div>
                <img
                  src={img3}
                  alt=""
                  className="mr-[17px] h-[22px] w-[22px]"
                />
              </div>
              <div>
                <p className="text-[14px] leading-[22.4px] text-black">
                  Location Address
                </p>
                <p className="text-[14px] leading-[22.4px] text-black">
                  {obj?.pet?.contact?.address?.city},{" "}
                  {obj?.pet?.contact?.address?.state}
                </p>
              </div>
            </div>

            <div className="border-t border-b py-[17px] flex">
              <img src={img4} alt="" className="mr-[17px] h-[22px] w-[22px]" />
              <p className="text-[14px] leading-[22.4px] text-primary">
                {obj?.pet?.contact?.phone}
              </p>
            </div>

            <div className="pt-[20px] pb-[30px] justify-center">
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
        </section>
      </div>
    </div>
  );
};

export default AboutSection;
