import React from 'react'

export default function Parent() {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleClearSearch = () => {
    setSearchQuery("");
    setFilteredMeals(meals);
  };

  return (
     <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} />
      <MealGallery 
        searchQuery={searchQuery}
        filteredMeals={filteredMeals}
        onClearSearch={handleClearSearch}
      />
    </div>
  )
  
}
