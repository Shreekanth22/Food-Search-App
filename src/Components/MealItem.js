import React from "react";
import "./Food.css";

export default function Mealitem(getMeal) {
  return (
    <>
      <div className="card">
        <img src={getMeal.data.strMealThumb} alt="meal" />
        <div className="info">
          <h2>{getMeal.data.strMeal}</h2>
          <p>{getMeal.data.strArea} food</p>
        </div>
        <div className="recipe">
          <h2>Recipe</h2>
          <p>{getMeal.data.strInstructions}</p>
          <img src={getMeal.data.strMealThumb} />
          <a href={getMeal.data.strSource}>Watch video</a>
        </div>
      </div>
    </>
  );
}
