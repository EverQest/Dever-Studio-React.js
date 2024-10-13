import React, { useEffect } from "react";

export const Looper: React.FC = () => {

  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.getElementById("page_loader");
      if (preloader && !preloader.classList.contains("done")) {
        preloader.classList.add("done");
      }
    }, 1000);

    return () => clearTimeout(timer); // Очистка таймера при размонтировании компонента
  }, []);

  return (
    <div id="page_loader" className="preloader">
      <div className="loader"></div>
    </div>
  );
};
