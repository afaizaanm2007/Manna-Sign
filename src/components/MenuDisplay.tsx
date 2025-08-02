import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

const MenuDisplay = () => {
  const [activeHalf, setActiveHalf] = useState(0); // 0 for first half, 1 for second

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveHalf(prev => Math.min(prev + 1, 1)); // Max index is 1 for 2 halves
      } else if (event.key === 'ArrowLeft') {
        setActiveHalf(prev => Math.max(prev - 1, 0)); // Min index is 0
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gray-950 text-gray-200 font-bold">
      {/* Logo positioned at the top right corner */}
      <img 
        src="/manna-grill-logo.png" 
        alt="Manna Mediterranean Grill Logo" 
        className="absolute top-4 right-4 z-20 w-24 md:w-32 lg:w-40" 
      />

      {/* Outer Red Border Container */}
      <div className="absolute inset-0 bg-destructive"> {/* This div creates the solid red border */}
        {/* Top Pattern Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-16 
                     bg-[url('/red-pattern-transparent.png')] bg-repeat-x bg-bottom bg-[size:auto_100%]"
        ></div>

        {/* Bottom Pattern Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
          <div 
            className="w-full h-full bg-[url('/red-pattern-transparent.png')] bg-repeat-x bg-top bg-[size:auto_100%]"
            style={{ transform: 'scaleY(-1)' }}
          ></div>
        </div>

        {/* Main Content Area (Yellow) - now inset within the red border */}
        <div className="absolute inset-16 bg-yellow-400 text-gray-900 flex flex-row z-10">
          <div
            className={`flex transition-transform duration-500 ease-in-out h-full`}
            style={{ width: '200vw', transform: `translateX(-${activeHalf * 100}vw)` }}
          >
            {/* First Half (Page 1): Sandwiches, Drinks (left column) and Plates (right column) */}
            <div className="w-screen flex-shrink-0 flex flex-row gap-x-4 p-4 md:p-8 h-full">
              {/* Left Column: Sandwiches and Drinks */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Sandwiches</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mb-0.5">Combos served with 1 side: Rice, Fries, Chips or 2 Falafels and Drink</p>
                <div className="flex justify-between text-red-700 font-bold mb-0.5 text-lg sm:text-xl md:text-2xl">
                  <span className="w-1/2"></span>
                  <span className="w-1/4 text-right">Combo</span>
                  <span className="w-1/4 text-right">Sandwich</span>
                </div>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Gyro" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Chicken Shawarma" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Kafta Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Lamb Shawarma" comboPrice="$13.50" sandwichPrice="$10.99" />
                  <MenuItem name="Vegetarian Falafel" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Chicken Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
                </div>
              </div>

              {/* Drinks Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Drinks</h2>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Coke Products" price="$2.99" />
                  <MenuItem name="Hot or Cold Tea" price="$2.75" />
                  <MenuItem name="Turkish Coffee" price="$4.99" />
                </div>
              </div>
            </div>

            {/* Right Column: Plates Section */}
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Plates</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mb-0.5">Choice of sides: Fries, Rice, Salads, 2 Falafels or Hummus</p>
              <div className="flex flex-col flex-grow gap-y-2">
                <MenuItem name="Beef Kafta Kabob" price="$17.50" />
                <MenuItem name="Lamb Shawarma" price="$20.99" />
                <MenuItem name="Chicken Shawarma" price="$17.50" />
                <MenuItem name="Chicken Kabob" price="$17.50" />
                <MenuItem name="Lamb Kabob" price="$19.99" />
                <MenuItem name="Gyro" price="$17.50" />
                <MenuItem name="Mixed Grill Platter" price="$20.99" />
                <MenuItem name="Vegetarian Falafel Platter" price="$13.99" />
                <MenuItem name="Vegetarian Combination Platter" price="$14.99" />
                <MenuItem name="Lamb Shank" price="$21.99" />
              </div>
            </div>
          </div>

          {/* Second Half (Page 2): Appetizers, Salads, Kids (left column), Sides, Soup, Desserts (right column) */}
          <div className="w-screen flex-shrink-0 flex flex-row gap-x-4 p-4 md:p-8 h-full">
            {/* Left Column of Second Half (Appetizers, Salads, Kids) */}
            <div className="flex flex-col flex-1 gap-y-4">
              {/* Appetizers Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Appetizers</h2>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Stuffed Grape Leaves" price="$7.99" />
                  <MenuItem name="Kibbeh (Kibby)" price="$3.99" />
                  <MenuItem name="Hummus" prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]} />
                  <MenuItem name="Baba Ghannoug" prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]} />
                </div>
              </div>

              {/* Salads Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Salads</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mb-0.5">Add Chicken to any salad for additional $4.50 or Gyro meat for additional $4.99</p>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Greek Salad" price="$9.99" />
                  <MenuItem name="Mediterranean Salad" price="$9.99" />
                  <MenuItem name="Tabbouleh Salad" price="$9.99" />
                </div>
              </div>

              {/* Kids Meals Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Kids Meals</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 font-bold mb-0.5">Served with choice of chips or fries and a drink</p>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Chicken Tenders" price="$10.50" />
                </div>
              </div>
            </div>

            {/* Right Column of Second Half (Sides, Soup, Desserts) */}
            <div className="flex flex-col flex-1 gap-y-4">
              {/* Sides Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Sides</h2>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Aromatic Rice" price="$3.99" />
                  <MenuItem name="Pita Bread 1 piece" price="$1.40" />
                  <MenuItem name="Mediterranean Salad" price="$4.99" />
                  <MenuItem name="Tabbouleh Salad" price="$4.99" />
                  <MenuItem name="Greek Salad" price="$4.99" />
                  <MenuItem name="Falafel per piece" price="$1.20" />
                  <MenuItem name="Extra Sauce" price="$1.40" />
                  <MenuItem name="French Fries" price="$4.99" />
                </div>
              </div>

              {/* Soup Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Soup</h2>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Lentil Soup" price="$4.99" />
                </div>
              </div>

              {/* Desserts Section */}
              <div className="bg-gray-100 p-3 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-700 mb-0.5 border-b-4 border-red-700 pb-2 uppercase">Desserts</h2>
                <div className="flex flex-col flex-grow gap-y-2">
                  <MenuItem name="Baklava" price="$3.50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;