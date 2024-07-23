import React from "react";

import { ImSpinner9 } from "react-icons/im";

import img from "../../assets/images/petCommon.svg";

import { usePet } from "../../hooks/usePet";
import { useCategory } from "../../hooks/useCategory";
import Card2 from "../../components/petCard/PetCard";
import Button from "../../components/button/Button";

const Category = () => {
  const { fetchAnimals, prevPage, nextPage, setTotalPages, page, loading } =
    usePet();

  const { pets, pagination, slug, slugName } = useCategory(
    setTotalPages,
    fetchAnimals,
    page
  );

  return (
    <>
      <div className="bg-gray-200 relative  w-full py-[50px] text-center min-h-[660px] max-h-auto mx-auto">
        <div className="xs:w-[95%] lg:w-[80%] mx-auto">
          <h1 className="text-primary text-[30px] py-[10px]">
            {slug?.toUpperCase()} CATEGORIES
          </h1>

          {loading ? (
            <div className="mt-20 grid place-items-center h-full">
              <svg
                height={70}
                width={70}
                className="animate-spin mx-auto"
                viewBox="0 0 70 70"
              >
                <ImSpinner9 size={70} />
              </svg>
            </div>
          ) : (
            <div className="grid xs:grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 place-items-center h-full w-full items-center justify-center gap-8">
              {pets?.map((item) => {
                if (item["type"] === slugName) {
                  return (
                    <div key={item?.id} className="">
                      <Card2
                        primaryBreed={`${item?.breeds?.primary}`}
                        secondaryBreed={`${item?.breeds?.secondary}`}
                        city={item?.contact?.address?.city}
                        state={item?.contact?.address?.state}
                        text={item["name"]}
                        width="md:w-[340px] sm:w-[310px] xs:w-[300px]"
                        height="xs:h-[300px] sm:h-[231px]"
                        img={
                          item?.photos?.[0]?.small
                            ? item?.photos?.[0]?.small
                            : img
                        }
                        shadow=""
                        path={`/petDetail/${item?.id}`}
                      />
                    </div>
                  );
                }
              })}
            </div>
          )}

          {pagination && pagination > 1 && !loading && (
            <div className="absolute w-full flex left-0 bottom-0 justify-center border-2 gap-4">
              <div onClick={prevPage}>
                <Button
                  text="PREV"
                  bgColor="primary"
                  textColor="white"
                  width="fit"
                  radius="small"
                  border="primary"
                />
              </div>
              <p className="flex items-center text-[20px]">
                Page {page} of {pagination}
              </p>
              <div onClick={nextPage}>
                <Button
                  text="NEXT"
                  bgColor="primary"
                  textColor="white"
                  width="fit"
                  radius="small"
                  border="primary"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
