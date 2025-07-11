import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CategoriesPage from "../pages/CategoriesPage";
import Location from "../pages/Location";
import AllCategories from "../pages/AllCategories";
import AllLocations from "../pages/AllLocations";
import RecipePage from "../pages/RecipePage";




export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categoria/:nombre" element={<CategoriesPage />} />
          <Route path="localidad/:pais" element={<Location />} />
          <Route path="todas-categorias" element={<AllCategories />} />
          <Route path="todas-localizaciones" element={<AllLocations />} />
          <Route path="/receta/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
