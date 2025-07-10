import React, { useState, useEffect } from "react";
import search from "/public/search.svg";
import { useDebounce } from "../hooks/UseDebounce";

export default function SearchBar({ placeholder = "Buscar..." }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.meals || []);
      })
      .catch(() => {
        setResults([]);
      });
  }, [debouncedQuery]);

  return (
    <div className="busqueda flex relative w-full justify-center">
      <div className="searchBar flex flex-row border pr-6 border-[#51612a] w-[75%] justify-between">
        <input
          type="text"
          placeholder={placeholder}
          className="p-3 rounded w-[93%] text-[#586833]"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="flex hover:scale-105 transition duration-300 cursor-pointer w-[7%] justify-center items-center">
          <img className="size-12" src={search} alt="Buscar" />
        </button>
      </div>
      {results.length > 0 && (
        <ul className="absolute top-full max-h-48 w-[75%] overflow-y-auto bg-white border border-[#51612a] shadow-lg z-20 text-[#586833]">
          {results.map((meal) => (
            <li
              key={meal.idMeal}
              className="px-4 py-2 hover:bg-[#c9e4ca] cursor-pointer"
              onClick={() => {
                setQuery(meal.strMeal);
                setResults([]);
              }}
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
