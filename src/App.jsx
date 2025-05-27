import React from "react";
import { Card } from "./components/Card";
import Mainlayout from "./layouts/Mainlayout";


const posts = [
  {
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    alt: "Grilled Chicken Salad",
    title: "Grilled Chicken Salad",
    description: "Enjoy a refreshing grilled chicken salad packed with protein and fresh vegetables. Perfect for a light lunch or dinner, this meal combines juicy grilled chicken with crisp greens and a tangy vinaigrette.",
  },
  {
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    alt: "Avocado Toast with Eggs",
    title: "Avocado Toast with Eggs",
    description: "A simple yet nutritious breakfast option. Creamy avocado spread on whole-grain toast, topped with perfectly poached eggs and a sprinkle of chili flakes for a little kick.",
  },
  {
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80",
    alt: "Buddha Bowl",
    title: "Buddha Bowl",
    description: "A wholesome Buddha bowl loaded with quinoa, roasted sweet potatoes, chickpeas, kale, and a creamy tahini dressing. Packed with nutrients and bursting with flavor!",
  },
  {
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400&q=80",
    alt: "Margherita Pizza",
    title: "Margherita Pizza",
    description: "Classic Margherita pizza with a crispy thin crust, fresh tomato sauce, mozzarella cheese, and basil leaves. A timeless favorite that never disappoints.",
  },
  {
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80",
    alt: "Beef Burger with Fries",
    title: "Beef Burger with Fries",
    description: "Juicy beef patty topped with melted cheese, crispy bacon, fresh lettuce, and a special sauce, served with golden fries. A hearty meal for burger lovers.",
  },
  {
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=80",
    alt: "Pasta Carbonara",
    title: "Pasta Carbonara",
    description: "Creamy pasta carbonara made with al dente spaghetti, crispy pancetta, eggs, Parmesan cheese, and a touch of black pepper. A rich and comforting Italian classic.",
  },
  {
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80",
    alt: "Sushi Platter",
    title: "Sushi Platter",
    description: "Fresh and delicate sushi platter featuring salmon nigiri, tuna rolls, and avocado maki. Served with soy sauce, wasabi, and pickled ginger for an authentic experience.",
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
    alt: "Vegetable Stir Fry",
    title: "Vegetable Stir Fry",
    description: "A quick and healthy stir-fry with colorful bell peppers, broccoli, carrots, and mushrooms, tossed in a savory garlic-ginger sauce. Perfect for a weeknight dinner.",
  },
  {
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=400&q=80",
    alt: "Pancakes with Berries",
    title: "Pancakes with Berries",
    description: "Fluffy buttermilk pancakes topped with fresh strawberries, blueberries, and a drizzle of maple syrup. A delightful breakfast or brunch treat.",
  },
  {
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=400&q=80",
    alt: "Chocolate Lava Cake",
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate lava cake with a gooey molten center, dusted with powdered sugar and served with vanilla ice cream. A dreamy dessert for chocolate lovers.",
  },
];
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