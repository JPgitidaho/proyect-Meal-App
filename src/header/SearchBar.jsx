import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import search from "/search.svg";
import { useDebounce } from "../hooks/UseDebounce";

export default function SearchBar({ placeholder = "Search..." }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedQuery.trim().length < 2) {
      setResults([]);
      setSelectedMealId(null);
      return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${debouncedQuery}`)
      .then((res) => res.json())
      .then((data) => {
        const meals = data.meals || [];
        setResults(meals);
        const match = meals.find((meal) => meal.strMeal.toLowerCase() === debouncedQuery.toLowerCase());
        setSelectedMealId(match?.idMeal || null);
      })
      .catch(() => {
        setResults([]);
        setSelectedMealId(null);
      });
  }, [debouncedQuery]);

  function handleSearchRedirect() {
    if (selectedMealId) {
      setErrorMsg("");
      navigate(`/receta/${selectedMealId}`);
    } else {
      setErrorMsg("Please select a valid recipe from the list");
    }
  }

  return (
   <div className="busqueda flex flex-col items-center w-full relative">
  <div className="searchBar flex items-center border pr-2 border-[#51612a] w-[75%]">
    <input
      type="text"
      placeholder={placeholder}
      className="p-3 rounded flex-1 text-[#586833]"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        setErrorMsg("");
        setSelectedMealId(null);
      }}
    />
    <button
      className="flex items-center justify-center p-2 transition hover:scale-105 duration-300"
      onClick={handleSearchRedirect}
    >
      <img src={search} alt="Buscar" className="w-6 h-6" />
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
                setSelectedMealId(meal.idMeal);
                setResults([]);
                setErrorMsg("");
              }}
            >
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}

      {errorMsg && (
        <p className="text-red-600 text-sm mt-2">{errorMsg}</p>
      )}
    </div>
  );
}
