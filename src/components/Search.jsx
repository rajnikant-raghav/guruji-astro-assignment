import React, { useEffect, useState } from "react";
import Recipes from "./Recipes";
// import { recipe } from "../data";
const Search = () => {
  const [recipe, setRecipe] = useState([]);
  const [query, setQuery] = useState("pizza");
  const [input, setInput] = useState("");
  const API_KEY = "864f900480eab44945907342ee7d3d86";
  const APP_ID = "c0ff9c8f";

  const handleSubmit = () => {
    setQuery(input);
  };
  useEffect(() => {
    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => setRecipe(res.hits));
  }, [query]);
  return (
    <div id="search_container">
      <h2>What would you like to search!</h2>
      <div className="input">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="pizza,burger,chicken"
        />
        <button onClick={handleSubmit}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      {recipe.length > 0 ? (
        <Recipes recipe={recipe} identity={"search"} />
      ) : (
        <p style={{textAlign:'center',color:'red',marginTop:'50px'}}>'{query}' keyword is not exist in our database!</p>
      )}
    </div>
  );
};

export default Search;
