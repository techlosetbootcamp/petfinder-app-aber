import { useState } from "react";

export const useNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hideNav, setHideNav] = useState<boolean>(false);
  const [navClick, setNavClick] = useState<boolean>(false);
  const [clickedElement,setClickedElement] = useState("")

  const toggleMobileNav = () => {
    setOpen((prev) => !prev);
  };
  const toggleDesktopNav = (element:string) => {
    setClickedElement(element)
    setHideNav((prev) => !prev);
  };

  return {
    open,
    setOpen,
    toggleMobileNav,
    toggleDesktopNav,
    hideNav,
    navClick,
    clickedElement,
    setNavClick,
  };
};
