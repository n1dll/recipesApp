import React from "react";
import ReactDOM from "react-dom";
import RecipeDetails from "./RecipeDetails";

import "./Modal.css";

const Modal = ({ ingredients, onClose }) => {
  return ReactDOM.createPortal(
    <div onClick={onClose} className="modal-container">
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <RecipeDetails ingredients={ingredients} />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
