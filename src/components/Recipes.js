import React from "react";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import "./Recipe.css";

const Recipes = ({ recipes }) => {
  return (
    <div className="recipes">
      {recipes !== [] &&
        recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
    </div>
  );
};

export default Recipes;
