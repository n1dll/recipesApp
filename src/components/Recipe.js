import React, { useState } from "react";
import Modal from "./Modal";
import "./Recipe.css";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);

  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="recipe-container">
      <div className="recipe">
        <div className="content">
          <h2>{label}</h2>
          <img src={image} alt={label} />
          <div className="btn-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
              URL
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {show && (
              <Modal ingredients={ingredients} onClose={() => setShow(false)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
