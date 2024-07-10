import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

export const useFindAnimals = (setTotalPages, fetchSearchedPets) => {
  const location = useLocation();

  const searchInput = location.state.searchInput;
  const search = searchInput.toLowerCase();
  const query = new URLSearchParams(location.search);
  const slug = query.get("slug");

  const pets = useSelector((state: RootState) => state?.pets?.data?.animals);

  const pagination = useSelector(
    (state: RootState) => state?.pets?.data?.pagination?.total_pages
  );

  const totalPage = pagination ?? 0;

  useEffect(() => {
    setTotalPages(totalPage);
    fetchSearchedPets();
  }, [search]);

  return {
    search,
    pets,
    totalPage,
  };
};
