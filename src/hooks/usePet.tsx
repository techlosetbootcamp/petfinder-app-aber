import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPetById,
  getPetsByTypes,
  searchPets,
  getLimitedPets,
} from "../redux/slices/pet.slice";
import { AppDispatch } from "../redux/store";

export const usePet = () => {
  const dispatch: AppDispatch = useDispatch();

  const [response, setResponse] = useState<[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [animal, setAnimal] = useState<object>();
  const prevPage = () => {
    if (page != 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page != totalPages) {
      setPage(page + 1);
    }
  };

  const fetchAnimals = (slug) => {
    setLoading(true);
    dispatch(getPetsByTypes({ slug, page, setTotalPages, setResponse }))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const fetchSinglePet = (petId) => {
    setLoading(true);
    dispatch(getPetById(petId))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const fetchSearchedPets = () => {
    setLoading(true);
    dispatch(searchPets(""))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const fetchLimitedPets = (pageNumber, limit) => {
    setLoading(true);
    dispatch(getLimitedPets({pageNumber, limit}))
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return {
    fetchAnimals,
    fetchSinglePet,
    fetchSearchedPets,
    fetchLimitedPets,
    animal,
    setAnimal,
    prevPage,
    nextPage,
    response,
    setResponse,
    setTotalPages,
    page,
    totalPages,
    loading,
  };
};
