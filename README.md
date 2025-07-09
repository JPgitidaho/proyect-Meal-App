# Meal App – Proyecto en React + Vite

Aplicación web de recetas desarrollada en equipo utilizando **React**, **Vite** y **React Router**. 
Diseñada con enfoque modular, responsive y escalable.

## 🚀 Tecnologías utilizadas

- ⚛️ React
- ⚡ Vite
- 🌐 React Router DOM
- 💨 Tailwind CSS (o CSS propio)
- 🧪 ESLint (configuración base)


## 🗂 Estructura del proyecto

src/
├── components/
│     ├── Footer.jsx
├── header/
├     ├── NavBar.jsx
│     ├── Header.jsx
│     ├── SearchBar.jsx
│     └── Hero.jsx
├── cards/
│     ├── RecipeCard.jsx
│     ├── RandomRecipes.jsx
│     └── CategoryCard.jsx
├── pages/
│     ├── Home.jsx
│     ├── CategoriesPage.jsx
│     └── Locacion.jsx
├── routes/
│     └── AppRouter.jsx
├── main  
└── index.css
# 📋 Tareas del equipo - Proyecto MEAL-APP

## 🎯 Objetivo
Organizar claramente las responsabilidades de cada integrante y definir qué componente o página debe entregar. También se indican las dependencias entre miembros para una correcta integración.

---

## 👩‍💼 Juanita – Líder del proyecto

**Responsabilidades:**
- Configuración de rutas (`AppRouter.jsx`)
- Layout principal con `Outlet`, `Hero`, `Header`, `Footer` (`Layout.jsx`)
- Integración general y pruebas finales
- Coordinación del equipo y revisión de avances
- Verificación de diseño responsive y funcionamiento

---

## 👨‍💻 Luis Daniel – Header y búsqueda

**Componentes:**
- `NavBar.jsx`: navegación con `<Link>` a las rutas principales
- `SearchBar.jsx`: barra de búsqueda (a conectar con API)
- `Hero.jsx`: visual superior, con buscador solo en `/`

---

## 👩‍💻 Carlo – Componentes visuales y página por categoría

**Componentes:**
- `RecipeCard.jsx`: tarjeta individual de receta
- `CategoryCard.jsx`: tarjeta de categoría
- `RecipeGrid.jsx`: grilla de recetas usando `RecipeCard`
- `RandomRecipes.jsx`: recetas aleatorias en el home

**Página:**
- `CategoriesPage.jsx`: recetas por categoría (`/categoria/:nombre`), con `fetch`

**Notas:**
- Los componentes deben ser reutilizables mediante props (`receta`, `recetas`, etc.).
- `RecipeGrid` será usado por otras páginas también.

---

## 👨‍💻 Bastián – Página Home, Location y Footer

**Páginas/Componentes:**
- `Home.jsx`: muestra `RandomRecipes` (de Carlo)
- `Location.jsx`: recetas por país (`/localidad/:pais`), usando `RecipeGrid`
- `Footer.jsx`: componente visual inferior
- Apoyo en testeo, responsive, ajustes visuales

**Notas:**
- Bastián debe hacer `fetch` en `Location.jsx` y pasar los datos al grid.
- No debe incluir `Hero` ni `Footer` directamente (ya están en el layout).

---

## 🧪 Coordinación y dependencias

| Tarea                        | Responsable | Depende de          |
|-----------------------------|-------------|----------------------|
| Mostrar recetas aleatorias  | Bastián     | `RandomRecipes` de Carlo |
| Mostrar recetas por categoría | Carlos    | -                    |
| Mostrar recetas por país    | Bastián     | `RecipeGrid` de Carlo     |
| Buscar receta               | Luis Daniel | Conexión con API     |
| Navegación completa         | Juanita     | NavBar de Luis       |

---

## 🗓️ Fechas clave

- 🔄 Revisión funcional: **Miércoles**
- ✅ Integración general: **Jueves**
- 📦 Entrega final: **Viernes**

---
