import { useEffect } from "react";

const useScrollToTop = (data) => {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    scrollToTop();
  }, [data]);
};

export default useScrollToTop;
