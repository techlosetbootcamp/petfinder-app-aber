import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ImSpinner9 } from "react-icons/im";

import Card2 from "../../commonComponents/card2/Card2";
import img from "../../assets/petCommon.png";
import Button from "../../commonComponents/button/Button";
import { usePet } from "../../hooks/usePet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Category = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const slug = params.get("slug");
  let slugName: string | null;
  if (slug === "scales-fins-other") {
    slugName = "Scales, Fins & Other";
  } else if (slug === "small-furry") {
    slugName = "Small & Furry";
  } else {
    slugName = slug;
  }

  const pets = useSelector((state: RootState) => state?.pets?.data?.animals);

  const pagination = useSelector(
    (state: RootState) => state?.pets?.data?.pagination?.total_pages
  );

  console.log(pets);

  const {
    fetchAnimals,
    prevPage,
    nextPage,
    response,
    setResponse,
    setTotalPages,
    page,
    totalPages,
    loading,
  } = usePet(slug, "");

  const totalPage = pagination ?? 0;

  useEffect(() => {
    setTotalPages(totalPage);
    fetchAnimals();
  }, [slug, page]);

  return (
    <>
      <div className="bg-gray-200 relative  w-full py-[50px] text-center min-h-[660px] max-h-auto mx-auto">
        <div className="xs:w-[95%] lg:w-[80%] mx-auto">
          <h1 className="text-primary text-[30px] py-[10px]">
            {slug} Categories
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
            <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-items-center h-full w-full items-center justify-center gap-8">
              {pets?.map((item) => {
                if (item["type"] === slugName) {
                  return (
                    <div key={item?.id} className="">
                      <Card2
                        breed={`${item?.breeds?.primary},`}
                        location={item?.contact?.address?.country}
                        text={item["name"]}
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
          {/* //pagination */}
          {totalPage > 1 && !loading && (
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
                Page {page} of {totalPages}
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
