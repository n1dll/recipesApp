import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import useRecipes from "./hooks/useRecipes";
import InfiniteScroll from "react-infinite-scroll-component";

import "./components/SearchBar.css";
import "./App.css";

const App = () => {
  const [term, setTerm] = useState("");
  const [recipes, search] = useRecipes();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar search={search} term={term} setTerm={setTerm} />
      </BrowserRouter>
      <InfiniteScroll
        dataLength={recipes.length}
        next={() => search(term)}
        hasMore={true}
        scrollThreshold={0.9}
      >
        <Recipes recipes={recipes} />
      </InfiniteScroll>
    </div>
  );
};

export default App;
