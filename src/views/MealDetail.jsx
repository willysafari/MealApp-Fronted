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

  const getIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal?.[`strIngredient${i}`];
      const measure = meal?.[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push({ ingredient, measure });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <Mainlayout>
        <div className="flex justify-center items-center min-h-[60vh]">
          <div className="animate-pulse text-center">
            <div className="h-8 w-64 bg-gray-200 rounded mb-4 mx-auto"></div>
            <div className="h-96 w-full max-w-3xl bg-gray-200 rounded-lg mx-auto"></div>
          </div>
        </div>
      </Mainlayout>
    );
  }

  if (!meal) {
    return (
      <Mainlayout>
        <div className="text-center py-12 text-2xl font-medium text-gray-600">
          Meal not found
        </div>
      </Mainlayout>
    );
  }

  const ingredients = getIngredients(meal);

  return (
    <Mainlayout>
      <div className="max-w-5xl mx-auto px-1 py-3">
        {/* Image with gradient overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg mb-2 group">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
            <h1 className="text-4xl font-bold text-white drop-shadow-lg">
              {meal.strMeal}
            </h1>
          </div>
        </div>

        {/* Meal Meta */}
        <div className="flex flex-wrap gap-4 mb-2 text-sm">
          <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            {meal.strCategory}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            {meal.strArea}
          </span>
          {meal.strTags && meal.strTags.split(',').map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">
              {tag.trim()}
            </span>
          ))}
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-3 gap-2">
          {/* Ingredients */}
          <div className="md:col-span-1 bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
            <ul className="space-y-3">
              {ingredients.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-2"></span>
                  <div>
                    <p className="font-medium text-gray-800">{item.ingredient}</p>
                    {item.measure && (
                      <p className="text-sm text-gray-500">{item.measure}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="md:col-span-2">
            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {meal.strInstructions}
              </div>
            </div>

            {/* Video and Source Links */}
            {(meal.strYoutube || meal.strSource) && (
              <div className="flex flex-wrap gap-4">
                {meal.strYoutube && (
                  <a
                    href={meal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Watch on YouTube
                  </a>
                )}
                {meal.strSource && (
                  <a
                    href={meal.strSource}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.307.528-.991.832-.587.236.312.347.366.451.37.086.003.173-.057.282-.081.448-.1.903.143 1.014.605.089.381-.117.782-.438.953-.263.141-.658.209-1.04.207-.416-.002-.765-.086-1.054-.248-.323-.181-.499-.554-.047-.819zm-2.555 1.024c-.315.067-.525.224-.639.461-.131.265-.107.544-.046.735.089.279.322.467.622.493.265.023.524-.093.75-.3.249-.233.337-.562.245-.842-.088-.268-.366-.475-.689-.535-.081-.015-.185-.02-.243-.012zm7.457.562c-.095-.358-.354-.617-.711-.713-.265-.071-.544-.047-.735.046-.279.089-.467.322-.492.622-.024.265.092.524.299.75.233.249.562.337.842.245.269-.088.476-.366.536-.689.014-.082.019-.186.011-.244zm-9.404 3.068c.089.279.322.467.622.492.265.024.524-.092.75-.299.249-.233.337-.562.245-.842-.088-.268-.366-.475-.689-.535-.315-.068-.525.223-.639.461-.131.265-.107.544-.046.735.06.188.192.335.358.425.044.024.094.04.145.047.052.006.105.006.157-.004zm6.652-.104c.099.307-.528.991-.832.587-.236-.312-.347-.366-.451-.37-.086-.003-.173.057-.282.081-.448.1-.903-.143-1.014-.605-.089-.381.117-.782.438-.953.263-.141.658-.209 1.04-.207.416.002.765.086 1.054.248.323.181.499.554.047.819zm2.555-1.024c.315-.067.525-.224.639-.461.131-.265.107-.544.046-.735-.089-.279-.322-.467-.622-.493-.265-.023-.524.093-.75.3-.249.233-.337.562-.245.842.088.268.366.475.689.535.081.015.185.02.243.012z"/>
                    </svg>
                    View Original Source
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default MealDetail;