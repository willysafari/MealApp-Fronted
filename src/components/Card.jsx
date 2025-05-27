// import React from "react";


// export function Card(props){
//      return (
//         <div className="max-w-sm md:max-w-lg rounded-lg overflow-hidden shadow-lg bg-white">
//             <img
//                 className="w-full h-50 object-cover"
//                 src={props.image}
//                 alt={props.altText}
//             />
//             <div className="p-6">
//                 <h2 className="text-xl font-semibold mb-2">{props.title}</h2>
//                 <p className="text-gray-600">{props.description}</p>
//             </div>
//         </div>
//      );
// }

import React from "react";

export function Card({ image, altText, title, description }) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      {/* Image with gradient overlay */}
      <div className="relative group">
        <img
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={altText}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="ml-auto px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">
            New
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        {/* Footer with action button */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-sm text-gray-500">15 min read</span>
          <button className="text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}