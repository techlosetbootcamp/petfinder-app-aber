import React from "react";
import img from "../../assets/images/petCommon.svg";

type SkeletonProps = {
  count: number;
  width: string;
  details: boolean;
};
const Skeleton = ({ count, width, details }: SkeletonProps) => {
  return Array(count)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className={`shadow-sm sm:min-h-[301px] relative rounded-md  ${width}`}
      >
        <img
          className={`rounded-lg animate-pulse xs:h-[300px] sm:h-[231px] w-full  object-cover`}
          src={img}
        />
        <div
          className={`absolute bottom-[0px] bg-white  ${width} min-h-[90px] rounded-lg text-center content-center px-[10px]`}
        >
          <div className="animate-pulse flex flex-col gap-[8px]">
            <div className="h-3 bg-gray-300 rounded-full w-[50%] mx-auto"></div>
            {details && (
              <>
                <div className="h-5 bg-gray-300 rounded-full w-full"></div>
                <div className="h-5 bg-gray-300 rounded-full w-full "></div>
              </>
            )}
          </div>
        </div>
      </div>
    ));
};

export default Skeleton;
