import React, { useEffect,useState } from "react";
import img from "../background.jpg";

const Home = () => {
  const text = "RecipeBoxJunction";
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      if (charIndex < text.length) {
        setDisplayText((prevText) => prevText + text[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(timer);
      }
    },100); // Adjust the speed by changing the delay (in milliseconds)

    return () => {
      clearInterval(timer);
    };
  }, [text, charIndex]);

  return (
    <div className="home_container" id="home_container">
      <div className="content">
        <h1>{displayText}</h1>
        <span>
          <a href="#navbar_container">Get Started</a>
        </span>
      </div>

      <img src={img} alt="" />
    </div>
  );
};

export default Home;