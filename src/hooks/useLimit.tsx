import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useLimit = (fetchLimitedPets) => {
  const [limit, setLimit] = useState<number>();
  const [totalCount, setTotalCount] = useState<number>();

  const pets = useSelector(
    (state: RootState) => state?.pets?.limitedPets?.animals
  );

  const animalCount = useSelector(
    (state: RootState) => state.pets.limitedPets?.pagination?.total_count
  );

  const updateLimit = () => {
    const width = window.innerWidth;
    let newLimit: number;

    if (width < 768) {
      newLimit = 1;
    } else if (width < 1024) {
      newLimit = 2;
    } else if (width < 1280) {
      newLimit = 3;
    } else {
      newLimit = 4;
    }
    if (animalCount && limit) {
      setTotalCount(animalCount - limit);
    }

    if (newLimit !== limit) {
      setLimit(newLimit);
    }
  };

  useEffect(() => {
    updateLimit();

    window.addEventListener("resize", updateLimit);

    return () => {
      window.removeEventListener("resize", updateLimit);
    };
  }, [limit]);

  useEffect(() => {
    fetchLimitedPets();
  }, [limit]);
  return {
    limit,
    pets,
    animalCount,
  };
};
