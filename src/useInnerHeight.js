import { useState, useEffect } from "react";

export const useInnerHeight = (count) => {
  const [innerHeight, setInnerHeight] = useState(null);
  useEffect(() => {
    const handleHeight = () => setInnerHeight(window.innerHeight);

    document.addEventListener("click", handleHeight);

    console.log(count);

    return () => document.removeEventListener("click", handleHeight);
  }, [count]);

  return innerHeight;
};
