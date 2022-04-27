import React, { useState } from "react";
import Mealitem from "./MealItem";
import "./Food.css";
import { LoadingOutlined } from "@ant-design/icons";

export default function Meal() {
  const [search, setSearch] = useState("");
  const [meal, setMeal] = useState();

  const searchMeal = (val) => {
    if (val.key == "Enter") {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals);
          setSearch("");
        });
    }
  };

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>Feeling hungry?</h1>
          <h3>Get a meal by clicking below!</h3>
        </div>
        <div className="searchBox">
          <input
            placeholder="Search Your Food Recipe"
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchMeal}
          />
        </div>
        <br />
        <br />
        <div className="container">
          {meal == null ? (
            <p className="notSearch">
              Not found <LoadingOutlined />
            </p>
          ) : (
            meal.map((res) => {
              return <Mealitem data={res} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
