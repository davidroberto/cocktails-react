import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CocktailsPage from "./page/CocktailsPage";
import CocktailRandomPage from "./page/CocktailRandomPage";
import CategoriesPage from "./page/CategoriesPage";
import IngredientsPage from "./page/IngredientsPage";
import CocktailDetailsPage from "./page/CocktailDetailsPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailsPage />} />
        <Route path="/random" element={<CocktailRandomPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/ingredients" element={<IngredientsPage />} />
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
