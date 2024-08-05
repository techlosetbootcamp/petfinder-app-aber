import React from "react";

import img from "../../assets/images/petCommon.svg";

import { usePet } from "../../hooks/usePet";
import { useFindAnimals } from "../../hooks/useFindAnimals";
import Button from "../../components/button/Button";
import Card2 from "../../components/petCard/PetCard";
import SearchSection from "../../components/searchSection/SearchSection";
import Skeleton from "../../components/skeleton/Skeleton";
import FooterGroup from "../../components/footerGroup/FooterGroup";

const FindAnimals = () => {
  const {
    fetchSearchedPets,
    prevPage,
    nextPage,
    setTotalPages,
    page,
    loading,
  } = usePet();

  const { search, queryInput, pets, totalPage } = useFindAnimals(
    setTotalPages,
    fetchSearchedPets,
    page
  );

  return (
    <>
      <SearchSection />
      <div className="bg-white w-full  min-h-screen relative">
        <div className="xs:w-[95%] lg:w-[80%] h-auto mx-auto ">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2  xl:grid-cols-3 place-items-center h-full w-full items-center justify-center gap-8">
            {loading ? (
              <Skeleton
                count={15}
                details={true}
                width="md:w-[340px] sm:w-[310px] xs:w-[300px]"
              />
            ) : (
              <>
                {!pets || pets.length === 0 ? (
                  <p>No Result Found...Try Filtering Your Query</p>
                ) : (
                  pets?.map((item) => {
                    {
                      return (
                        <div key={item?.id} className="">
                          <Card2
                            width="md:w-[340px] sm:w-[310px] xs:w-[300px]"
                            height="xs:h-[300px] sm:h-[231px]"
                            shadow="shadow"
                            primaryBreed={item?.breeds?.primary}
                            secondaryBreed={item?.breeds?.secondary}
                            city={item?.contact?.address?.city}
                            state={item?.contact?.address?.state}
                            text={item["name"]}
                            img={
                              item?.photos?.[0]?.small
                                ? item?.photos?.[0]?.small
                                : img
                            }
                            path={`/petDetail/${item?.id}`}
                          />
                        </div>
                      );
                    }
                  })
                )}
              </>
            )}
          </div>
          {totalPage > 1 && !loading && (
            <div className="py-[40px] w-full flex left-0 bottom-0 justify-center  gap-4">
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
                Page {page} of {totalPage}
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
      <FooterGroup />
    </>
  );
};

export default FindAnimals;
