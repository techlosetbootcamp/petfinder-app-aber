import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

export const useCategory = (setTotalPages, fetchAnimals, page) => {
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

  useEffect(() => {
    setTotalPages(pagination);

    fetchAnimals(slug);
  }, [slug, page]);
  return {
    pets,
    pagination,
    slug,
    slugName,
  };
};
