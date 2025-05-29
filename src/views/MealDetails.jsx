import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setMeal(data.meals ? data.meals[0] : null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  // Helper to get ingredients and measures
  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <Mainlayout>
        <div className="text-center py-12">Loading...</div>
      </Mainlayout>
    );
  }

  if (!meal) {
    return (
      <Mainlayout>
        <div className="text-center py-12">Meal not found.</div>
      </Mainlayout>
    );
  }

  const ingredients = getIngredients(meal);

  return (
    <Mainlayout>
      <div className="max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-bold mb-4">{meal.strMeal}</h2>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <span><b>Category:</b> {meal.strCategory}</span>
          <span><b>Area:</b> {meal.strArea}</span>
          <span><b>Tags:</b> {meal.strTags || "None"}</span>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Instructions:</h3>
          <p className="text-gray-200 whitespace-pre-line">{meal.strInstructions}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h4 className="font-semibold mb-2">Ingredients</h4>
            <ul className="list-disc list-inside text-gray-200">
              {ingredients.map((item, idx) => (
                <li key={idx}>{item.ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Measures</h4>
            <ul className="list-disc list-inside text-gray-200">
              {ingredients.map((item, idx) => (
                <li key={idx}>{item.measure}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mt-6">
          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              YouTube
            </a>
          )}
          {meal.strSource && (
            <a
              href={meal.strSource}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              View Original Source
            </a>
          )}
        </div>
      </div>
    </Mainlayout>
  );
}


export default MealDetail;