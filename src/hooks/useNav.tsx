import { useState } from 'react'

export const useNav = () => {
  
    const [open, setOpen] = useState<boolean>(false);

    const toggleMobileNav = ()=>{
        console.log("clicked", open);
      setOpen((prev) => !prev)
    }
    
  return {
    open, setOpen,toggleMobileNav
  }
}
