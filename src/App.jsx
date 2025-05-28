import React from "react";
import { Card } from "./components/Card";
import Mainlayout from "./layouts/Mainlayout";
import posts from "./components/MealPost"; // Import the data

function App() {
  return (
    <Mainlayout>
      <div className="grid gap-6 md:grid-cols-4 mt-2">
        {posts.map((post, idx) => (
          <Card
            key={idx}
            image={post.image}
            altText={post.alt}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </Mainlayout>
  );
}

export default App;