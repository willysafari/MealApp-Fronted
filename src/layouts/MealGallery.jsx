import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import { Card } from "../components/Card";
import { fetchMeals } from "../api/mealService.js";
// Import API service

const MealGallery = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch meals on component mount
  useEffect(() => {
    const loadMeals = async () => {
      try {
        const data = await fetchMeals();
        setMeals(data);
        setFilteredMeals(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    loadMeals();
  }, []);

  // Filter meals based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredMeals(meals);
      return;
    }
    const filtered = meals.filter(meal => 
      meal.strMeal.toLowerCase().includes(query.toLowerCase()) ||
      (meal.strInstructions && meal.strInstructions.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredMeals(filtered);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading meals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-2 py-2">
      <div className="flex justify-center mb-3">
        <SearchForm onSearch={handleSearch} />
      </div>

      {filteredMeals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No meals found for "{searchQuery}"
          </p>
          <button 
            onClick={() => {
              setFilteredMeals(meals);
              setSearchQuery("");
            }}
            className="mt-4 text-indigo-600 hover:text-indigo-800"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {filteredMeals.map((meal) => (
            <Card
              key={meal.idMeal}
              id={meal.idMeal} 
              image={meal.strMealThumb}
              altText={meal.strMeal}
              title={meal.strMeal}
              description={meal.strCategory} // Using category as description
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MealGallery;