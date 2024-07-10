import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [val, setVal] = useState<string | null>("");

  const findPet = () => {
    navigate("/pets/find", { state: { searchInput: val } });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return {
    toggleModal,
    isModalOpen,
    val,
    setVal,
    findPet,
  };
};
