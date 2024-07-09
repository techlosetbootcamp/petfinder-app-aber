import React, { useState } from 'react'
import img from "../../assets/images/searchIcon.svg"
import { useSearch } from '../../hooks/useSearch'


const SearchInput = () => {
  const {setVal, findPet} = useSearch()
 
  
  return (
    <div className='h-[60px] w-[808px] relative px-[20px]'>

    <input 
        placeholder='Enter Type,Breed or Location' 
        className='h-[60px] w-full rounded-[5px] px-[13px] py-[20px] border border-black ' 
        onChange={(e)=>setVal(e.target.value)}
        />
        <div onClick={findPet} className='absolute top-[7px] right-[35.5px] h-[44px] w-[44px] rounded-[5px] bg-primary content-center'>
          <img src={img} alt="" className='mx-auto'/>

        </div>

        </div>
  )
}

export default SearchInput
