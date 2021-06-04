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
        <SearchBar
          className="search"
          search={search}
          term={term}
          setTerm={setTerm}
        />
      </div>
    </nav>
  );
};

export default NavBar;
