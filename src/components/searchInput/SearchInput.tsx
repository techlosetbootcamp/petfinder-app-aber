import React from "react";
import img from "../../assets/images/searchIcon.svg";
import { useSearch } from "../../hooks/useSearch";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SearchInput = () => {
  const { setVal, findPet, selectVal, changeVal, isClicked, setIsClicked } =
    useSearch();

  return (
    <div className="h-[60px] w-[808px] md:mx-[20px] xs:mx-[5px] relative">
      <ul
        className={`absolute border-2 xs:w-[30%]  sm:w-[15%] ${
          isClicked ? "block" : "hidden"
        } z-10 top-16 bg-white shadow-sm inline-flex rounded-[8px] px-[20px] py-[10px] flex flex-col xs:gap-[5px] md:gap-[10px]`}
      >
        <li className=" cursor-pointer" onClick={() => changeVal("type")}>
          Type
        </li>
        <li className=" cursor-pointer" onClick={() => changeVal("breed")}>
          Breed
        </li>
        <li className=" cursor-pointer" onClick={() => changeVal("location")}>
          Location
        </li>
      </ul>
      <div className="absolute left-1 text-black bg-white z-10 h-full xs:w-[30%] sm:w-[15%] flex justify-between items-center border-r px-[8px]">
        <p>{selectVal.charAt(0).toUpperCase() + selectVal.slice(1)}</p>
        {isClicked ? (
          <IoIosArrowUp onClick={() => setIsClicked(!isClicked)} />
        ) : (
          <IoIosArrowDown onClick={() => setIsClicked(!isClicked)} />
        )}
      </div>
      <input
        placeholder={`Search by ${selectVal}`}
        className="h-[60px] w-[100%] rounded-[5px] xs:pl-[33%] sm:pl-[16%] py-[20px] absolute right-0 outline-0"
        onChange={(e) => setVal(e.target.value)}
      />
      <div
        onClick={findPet}
        className="absolute top-[7px] right-[9px] h-[44px] w-[44px] rounded-[5px] bg-primary content-center"
      >
        <img src={img} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default SearchInput;
