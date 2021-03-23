import { useState } from "react";
import axios from "axios";

const useRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(10);

  const APP_ID = "a0141e9e";
  const APP_KEY = "85aa9b2b0212d4600b9ab035fa318bbc";

  const search = async term => {
    const response = await axios.get(
      `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`,
      {
        params: {
          q: term,
          from,
          to,
        },
      }
    );

    setRecipes([...recipes, ...response.data.hits]);
    setFrom(to + 1);
    setTo(to + 10);
    console.log(response);
  };

  return [recipes, search];
};

export default useRecipes;
