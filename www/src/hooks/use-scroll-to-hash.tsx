import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.substring(1);
    const element = document.getElementById(elementId);

    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, [location]);
};

export { useScrollToHash };
