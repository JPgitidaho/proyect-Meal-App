import { useState } from "react";
import { searchMealsByName } from "../services/api";

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    searchMealsByName(term).then(onSearch);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar receta..."
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
