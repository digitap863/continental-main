import { useEffect, useState } from "react";

const useStickyNav = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768 && window.innerWidth >= 480) {
        return;
      }
      if (window.innerWidth >= 768) {
        const windowHeight = window.innerHeight;
        const totalHeight =
          document.documentElement.scrollHeight - windowHeight;
        const scrollPosition = window.scrollY;
        const percentage = (scrollPosition / totalHeight) * 100;
        if (percentage > 2) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyNav;
