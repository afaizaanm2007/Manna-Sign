import React from 'react';

const MenuDisplay = () => {
  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Menu sections will go here */}
        <p className="col-span-full text-center text-gray-600">
          Ready for your new menu items! Please provide them.
        </p>
      </div>
    </div>
  );
};

export default MenuDisplay;