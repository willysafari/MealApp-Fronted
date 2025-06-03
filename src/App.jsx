import React from "react";
import Home from "./views/Home";
import Indregients from "./views/Indregients";
import MealsByIngredient from "./views/MealsByIngredient";
import MealDetail from "./views/MealDetail"; 
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
// Import the new MealDetail component

function App() {  
  return (
   <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} /> {/* Add this line */}
      <Route path="/home" element={<Home />} />
      <Route path="/ingredients" element={<Indregients />} />
      <Route path="/ingredients/:ingredient" element={<MealsByIngredient />} />
      <Route path="/meal/:id" element={<MealDetail />} /> 
      
    </Routes>
  );
}
export default App;