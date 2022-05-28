import React, { useState, useEffect } from "react";
import "./NavbarSearchComponent.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import FoodSearchCard from "./FoodSearchCard";

const NavbarSearchComponent = () => {
  const [query, setQuery] = useState("");
  const [Receipe, setReceipe] = useState([]);
  let API_KEY = "778a5d64c304d4a4840dd794583f49ec";
  let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=77b47c11&app_key=${API_KEY}`;

  // const clearHandler = () => {
  //   setReceipe([]);
  //   setQuery("");
  // };

  const getItems = async () => {
    const users = await axios.get(url);
    setReceipe(users.data.hits);
    // console.log("hit");
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <div className="searchDivContainer">
        <input
          type="text"
          placeholder="Search recipies and more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <SearchIcon className="searchIcon" onClick={getItems} />
      </div>
      <div className="itemcardContainer">
        {Receipe.map((foodItem, idx) => {
          return <FoodSearchCard key={idx} item={foodItem} id={idx} />;
        })}
      </div>
    </>
  );
};

export default NavbarSearchComponent;
