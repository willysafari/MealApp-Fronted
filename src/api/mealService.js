const API_BASE = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMeals = async (searchTerm = '') => {
  try {
    const endpoint = searchTerm 
      ? `${API_BASE}/search.php?s=${searchTerm}`
      : `${API_BASE}/filter.php?c=Seafood`; // Default category
    
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw error;
  }
};