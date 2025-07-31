import React from 'react';

const MenuDisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900 text-white p-8">
      <h1 className="text-6xl font-extrabold mb-8 text-center text-yellow-400">Manna Grill</h1>
      <h2 className="text-4xl font-bold mb-12 text-center">Your Delicious Menu Awaits!</h2>
      <p className="text-2xl text-gray-300 text-center">
        This is where the first half of your menu will go.
      </p>
      <p className="text-2xl text-gray-300 text-center mt-4">
        Ready for your menu items!
      </p>
    </div>
  );
};

export default MenuDisplay;