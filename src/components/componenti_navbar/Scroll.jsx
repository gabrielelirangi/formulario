/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Scroll({ setScrollaPagina }) {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if ((location.pathname === "/" || location.pathname === "/Home") && window.scrollY > 100) {
        setScrollaPagina(true);
      } else {
        setScrollaPagina(false);
      }
    };

    
    if (location.pathname === "/" || location.pathname === "/Home") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, setScrollaPagina]);

  
  return null;
}

export default Scroll;
