import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import { Card } from "../components/Card";
import {Link} from "react-router-dom";

export default function MealsByIngredient() {
  const { ingredient } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
      .then(res => res.json())
      .then(data => {
        setMeals(data.meals || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [ingredient]);

  return (
    <Mainlayout>
      <h2 className="text-2xl font-bold mb-4 text-center">
        Meals with "{ingredient}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {loading ? (
          <div className="col-span-full text-center">Loading...</div>
        ) : meals.length === 0 ? (
          <div className="col-span-full text-center">No meals found.</div>
        ) : (
          meals.map((meal) => (
            <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
            <Card
              key={meal.idMeal}
              image={meal.strMealThumb}
              altText={meal.strMeal}
              title={meal.strMeal}
              description=""
            />
            </Link>
          ))
        )}
      </div>
    </Mainlayout>
  );
}