import React, { useState, useRef, useEffect } from "react";

function SearchForm({ onSearch }) {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center justify-center gap-2 w-full mt-3"
    >
      <input
        type="text"
        ref={inputRef}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
      />
      <button
        type="submit"
        disabled={!search.trim()}
        className={`px-4 py-2 rounded transition ${
          search.trim()
            ? "bg-indigo-600 text-white hover:bg-indigo-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;