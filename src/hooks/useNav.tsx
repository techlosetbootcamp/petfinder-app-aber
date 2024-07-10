import { useState } from "react";

export const useNav = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [navClick, setNavClick] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setOpen((prev) => !prev);
  };

  return {
    open,
    setOpen,
    toggleMobileNav,
    navClick,
    setNavClick
  };
};
