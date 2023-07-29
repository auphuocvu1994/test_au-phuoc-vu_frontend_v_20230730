import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.scss";
import iconScroll from "./component_scroll.svg";
const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 3) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button onClick={handleClick} className="ScrollToTopButton">
          <img src={iconScroll} alt="" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
