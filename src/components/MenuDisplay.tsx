import React from 'react';
import MenuItem from './MenuItem';

const MenuDisplay = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      {/* Top Red Section */}
      <div className="bg-red-700 h-[12%] flex items-center justify-center p-4">
        <h1 className="text-6xl font-extrabold text-yellow-400 text-center">Manna Grill</h1>
      </div>

      {/* Yellow Appetizers Header */}
      <div className="bg-yellow-400 py-6 flex items-center justify-center">
        <h2 className="text-red-700 text-5xl font-extrabold uppercase tracking-wider text-center">Appetizers</h2>
      </div>

      {/* Dark Menu Content Section */}
      <div className="flex-grow bg-red-950 text-white p-12 flex flex-col justify-start items-center overflow-y-auto">
        <div className="w-full max-w-3xl">
          <MenuItem
            name="Stuffed Grape Leaves"
            description="(4 Pieces) Grape leaves stuffed with rice, tomato, parsley, onion and garlic."
            price="$7.99"
          />
          <MenuItem
            name="Kibbeh (Kibby)"
            description="(1 Piece) Ground beef mixed with cracked wheat formed into a shell and stuffed with cooked ground beef, pine nuts and spices; then deep fried golden brown."
            price="$3.99"
          />
          <MenuItem
            name="Hummus"
            price=".sm $5.50 .Lg $9.99"
          />
          <MenuItem
            name="Baba Ghannoug"
            price=".sm $5.50 .Lg $9.99"
          />
        </div>
      </div>

      {/* Bottom Red Section */}
      <div className="bg-red-700 h-[12%] flex items-center justify-center p-4">
        <p className="text-white text-2xl text-center">Your Delicious Menu Awaits!</p>
      </div>
    </div>
  );
};

export default MenuDisplay;