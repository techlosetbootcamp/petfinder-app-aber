import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export const useLimit = (pageNumber, fetchLimitedPets) => {
     
   const [limit, setLimit] = useState<number>();

   const pets = useSelector(
    (state: RootState) => state?.pets?.limitedPets?.animals
  );

   const updateLimit = () => {
     const width = window.innerWidth;
     let newLimit:number;
 
     if (width < 768) { 
       newLimit = 1;
     } else if (width < 1024) { 
       newLimit = 2;
     } else if (width < 1280) {
       newLimit = 3;
     } else {                   
       newLimit = 4;
     }
 
     if (newLimit !== limit) {
      setLimit(newLimit);
    }
   };

   useEffect(() => {
     updateLimit(); 
 
     window.addEventListener('resize', updateLimit);
 
     return () => {
       window.removeEventListener('resize', updateLimit);
     };
   }, [limit]);


   useEffect(()=>{
    fetchLimitedPets(pageNumber,limit)

  },[pageNumber, limit])
  return {
    limit,
    pets
  }
}
