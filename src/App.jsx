import {  Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
    
      
    
  );
}

export default App;
