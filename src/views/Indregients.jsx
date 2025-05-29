import React, { useEffect, useState } from 'react';
import Mainlayout from '../layouts/Mainlayout';
import { Link } from 'react-router-dom';

// Example API endpoint (replace with your actual API if different)
const API_URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

export default function Indregients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setIngredients(data.meals || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Mainlayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
        {loading ? (
          <div className="col-span-full text-center">Loading...</div>
        ) : ingredients.length === 0 ? (
          <div className="col-span-full text-center">No ingredients found.</div>
        ) : (
          ingredients.map((item, idx) => (
            <Link
              to={`/ingredients/${item.strIngredient}`}
              className="w-full"
              key={idx}>
              <div
              key={idx}
              className="bg-white rounded shadow p-4 flex flex-col items-center"
            >
              <img
                src={`https://www.themealdb.com/images/ingredients/${item.strIngredient}.png`}
                alt={item.strIngredient}
                className="w-full h-45 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <h3 className="font-bold text-lg mb-2">{item.strIngredient}</h3>
              <p className="text-gray-600 text-sm">
                {item.strDescription ? item.strDescription.slice(0, 100) + "..." : "No description."}
              </p>
            </div>
             </Link>
          ))
        )}
      </div>
    </Mainlayout>
  );
}