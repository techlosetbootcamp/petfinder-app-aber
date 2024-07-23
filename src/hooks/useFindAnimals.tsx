import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

export const useFindAnimals = (setTotalPages, fetchSearchedPets, page) => {
  const location = useLocation();

  const searchInput = location.state.searchInput;
  const queryInput = location.state.queryInput;
  const search = searchInput;

  const pets = useSelector((state: RootState) => state?.pets?.data?.animals);

  const pagination = useSelector(
    (state: RootState) => state?.pets?.data?.pagination?.total_pages
  );

  const totalPage = pagination ?? 0;

  useEffect(() => {
    setTotalPages(totalPage);
    fetchSearchedPets(search, queryInput);
  }, [search, queryInput, page]);

  return {
    search,
    queryInput,
    pets,
    totalPage,
  };
};
