import React, { use, useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function SearchForm(){
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("SearchForm mounted");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [search])
    
  return (
    <form 
      className="flex items-center justify-center gap-2 w-full mt-3"
    >
      <input
        type="text"
        ref={inputRef}
        value={search}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
       onClick={(e) => {
          e.preventDefault();
          console.log("Search submitted:", search);
          inputRef.current.focus();
        }}
        disabled={!search.trim()}
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;