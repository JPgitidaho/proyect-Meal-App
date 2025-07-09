import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import CategoriesPage from "../pages/CategoriesPage";
import Location from "../pages/Location";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categoria/:nombre" element={<CategoriesPage />} />
          <Route path="localidad/:pais" element={<Location />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
