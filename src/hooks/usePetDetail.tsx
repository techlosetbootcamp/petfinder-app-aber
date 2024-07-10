import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";

export const usePetDetail = (fetchSinglePet) => {
  const params = useParams();
  const pet = useSelector((state: RootState) => state?.pets?.singlePet?.animal);

  const { petId } = params;

  useEffect(() => {
    fetchSinglePet(petId);
  }, [petId]);
  return { pet, petId };
};
