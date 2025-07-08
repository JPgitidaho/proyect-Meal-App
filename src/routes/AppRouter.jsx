import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import CategoriesPage from '../pages/CategoriesPage'
import MealDetail from '../pages/Location'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<CategoriesPage />} />
        <Route path="/detalle/:id" element={<Location />} />
      </Routes>
    </BrowserRouter>
  )
}
