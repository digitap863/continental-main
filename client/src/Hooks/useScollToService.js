import { useEffect } from "react";

const useScrollToService= (data) => {
  useEffect(() => {
      if(data){
        const scrollToTop = () => {
          window.scrollTo({ top: data?.position, behavior: "smooth" });
        };
    
        scrollToTop();
    }else{  
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          };
      
          scrollToTop();
    }
  }, [data]);
};

export default useScrollToService;
