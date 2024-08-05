import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const [val, setVal] = useState<string | null>();
  const [selectVal, setSelectVal] = useState("type");
  const [isClicked, setIsClicked] = useState(false);

  const findPet = () => {
    navigate("/pets/find", {
      state: { searchInput: val, queryInput: selectVal },
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const changeVal = (val) => {
    setSelectVal(val);
    setIsClicked(!isClicked);
  };

  return {
    toggleModal,
    isModalOpen,
    val,
    setVal,
    findPet,
    selectVal,
    changeVal,
    isClicked,
    setIsClicked,
  };
};
