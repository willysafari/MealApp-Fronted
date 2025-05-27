import React from "react";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-900 py-4 px-4 text-center">
    <p className="text-gray-600 dark:text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} MealApp. All rights reserved.
    </p>
  </footer>
);

export default Footer;