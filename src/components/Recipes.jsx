import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../slices/detailsSlice";
import Loading from "./Loading";
const Recipes = ({ recipe, identity }) => {
  const [isTrue, setIsTrue] = useState(false);
  // if (identity === "favorite") setIsTrue(true);
  const [savedData, setSavedData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (idx) => {
    dispatch(setDetails(recipe[idx]));
    navigate("/details");
  };
  useEffect(() => {
    if (identity === "favorite") setIsTrue(true);
    const storedData = localStorage.getItem("myData");

    if (storedData) {
      setSavedData(JSON.parse(storedData));
    }
  }, []);

  const handleFavorite = (idx) => {
    let isExist = [];
    if (savedData) {
      isExist = savedData.filter(
        (val) => val.recipe.label === recipe[idx].recipe.label
      );
    }
    if (isExist.length > 0) {
      alert("Recipe already saved in your favorite list.");
    } else {
      setSavedData((prevData) => [...prevData, recipe[idx]]);

      localStorage.setItem(
        "myData",
        JSON.stringify([...savedData, recipe[idx]])
      );
    }
  };
  return (
    <div className="cards_container">
      {recipe ? (
        recipe.map((val, idx) => (
          <div key={idx} className="card">
            <img
              className="card_img"
              src={val.recipe.image}
              alt={val.recipe.label}
            />
            <h4>{val.recipe.label}</h4>
            <span>{val.recipe.mealType[0]}</span>
            <button onClick={() => handleClick(idx)} className="card_button">
              Show More
            </button>
            <span
              className={isTrue ? "hide" : "card_favorite"}
              onClick={() => handleFavorite(idx)}
            >
              <i class="fa-regular fa-bookmark"></i>
            </span>
          </div>
        ))
      ) : (
        <div>
          <p style={{padding:'50px'}} className={isTrue ? "" : "hide"}>No recipe in your favorite list.</p>
          <div className={isTrue ? "hide" : ""}>
            <Loading />
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
