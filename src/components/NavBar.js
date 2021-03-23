import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";

const NavBar = ({ search, term, setTerm }) => {
  return (
    <nav>
      <div className="container">
        <Link className="logo">
          Tasty
          <i className="fas fa-cookie-bite"></i>
        </Link>
        <SearchBar search={search} term={term} setTerm={setTerm} />
        <ul className="list-items">
          <li className="item">
            <Link to="/" className="text">
              Home
            </Link>
          </li>
          <li className="item">
            <Link to="/recipes" className="text">
              Recipes
            </Link>
          </li>
          <li className="item">
            <Link to="/footer" className="text">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
