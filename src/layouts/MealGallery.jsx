import React, { useState } from "react";
import posts from "../components/MealPost"; // Corrected path
import SearchForm from "../components/SearchForm"; // Corrected path
import { Card } from "../components/Card"; // Import Card component

const MealGallery = () => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <SearchForm onSearch={handleSearch} />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No meals found for "{searchQuery}"
          </p>
          <button 
            onClick={() => {
              setFilteredPosts(posts);
              setSearchQuery("");
            }}
            className="mt-4 text-indigo-600 hover:text-indigo-800"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post, index) => (
            <Card
              key={index}
              image={post.image}
              altText={post.alt}
              title={post.title}
              description={post.description}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MealGallery;