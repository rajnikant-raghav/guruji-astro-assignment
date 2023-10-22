import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";

const Favorite = () => {
  const [favorite, setFavorite] = useState();

  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setFavorite(JSON.parse(storedData));
    }
  }, []);
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          color: "rgb(226, 167, 29)",
          padding: "10px",
          fontFamily: "Josefin Sans, sans-serif",
        }}
      >
        Your favorite recipes
      </h2>
      <Recipes recipe={favorite} identity={"favorite"} />
    </div>
  );
};

export default Favorite;
