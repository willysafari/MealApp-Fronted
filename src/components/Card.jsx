/**
 * Card.jsx - Interactive Meal Card Component
 * 
 * A reusable card component that displays meal information (image, title, category) 
 * and navigates to a details page on click. Features hover animations, responsive 
 * design, and a gradient overlay effect for visual appeal.
 * 
 * Props:
 *   - image: URL of the meal image
 *   - alt: Alternative text for the image (falls back to title)
 *   - title: Meal name (truncated if too long)
 *   - description: Meal category (displayed as a tag)
 *   - id: Unique identifier for navigation
 */

import React from "react";
import { useNavigate } from "react-router-dom";

export function Card({ image, alt, title, description, id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal/${id}`); // Navigate to meal details page
  };

  return (
    <div 
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 cursor-pointer"
      onClick={handleClick}
    >
      {/* Image with gradient overlay */}
      <div className="relative group">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={alt || title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-1">{title}</h2>
          
        </div>
        
        {/* Footer with action button */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-500">
            Click to view details
          </span>
          <button 
            className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
          >
            View →
          </button>
        </div>
      </div>
    </div>
  );
}