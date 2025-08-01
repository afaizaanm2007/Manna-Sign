import React, { useState, useEffect } from 'react';
import MenuItem from './MenuItem';

const MenuDisplay = () => {
  const [activeHalf, setActiveHalf] = useState(0); // 0 for left (Sandwiches/Plates), 1 for right (rest)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveHalf(1);
      } else if (event.key === 'ArrowLeft') {
        setActiveHalf(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-red-950 text-white">
      <div
        className={`flex transition-transform duration-500 ease-in-out h-full`}
        style={{ width: '200vw', transform: activeHalf === 1 ? 'translateX(-50%)' : 'translateX(0%)' }}
      >
        {/* First Half: Sandwiches, Drinks (left column) and Plates (right column) */}
        <div className="w-1/2 flex-shrink-0 p-4 md:p-8">
          <div className="flex flex-row gap-x-8 mx-auto w-full h-full">
            {/* Left Column: Sandwiches and Drinks */}
            <div className="flex flex-col flex-1 gap-y-8">
              {/* Sandwiches Section */}
              <div className="bg-red-900 p-4 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Sandwiches</h2>
                <p className="text-lg sm:text-xl text-gray-100 mb-2">Combos served with 1 side: Rice, Fries, Chips or 2 Falafels and Drink</p>
                <div className="flex justify-between text-yellow-400 font-bold mb-2 text-xl sm:text-2xl">
                  <span className="w-1/2"></span>
                  <span className="w-1/4 text-right">Combo</span>
                  <span className="w-1/4 text-right">Sandwich</span>
                </div>
                <div className="flex flex-col flex-grow justify-around">
                  <MenuItem name="Gyro" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Chicken Shawarma" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Kafta Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Lamb Shawarma" comboPrice="$13.50" sandwichPrice="$10.99" />
                  <MenuItem name="Vegetarian Falafel" comboPrice="$12.50" sandwichPrice="$9.50" />
                  <MenuItem name="Chicken Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
                </div>
              </div>

              {/* Drinks Section */}
              <div className="bg-red-900 p-4 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Drinks</h2>
                <div className="flex flex-col flex-grow justify-around">
                  <MenuItem name="Coke Products" price="$2.99" />
                  <MenuItem name="Hot or Cold Tea" price="$2.75" />
                  <MenuItem name="Turkish Coffee" price="$4.99" />
                </div>
              </div>
            </div>

            {/* Right Column: Plates Section */}
            <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-1 flex flex-col">
              <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Plates</h2>
              <p className="text-lg sm:text-xl text-gray-100 mb-6">Choice of sides: Fries, Rice, Salads, 2 Falafels or Hummus</p>
              <div className="flex flex-col flex-grow justify-around">
                <MenuItem
                  name="Beef Kafta Kabob"
                  price="$17.50"
                />
                <MenuItem
                  name="Lamb Shawarma"
                  price="$20.99"
                />
                <MenuItem
                  name="Chicken Shawarma"
                  price="$17.50"
                />
                <MenuItem
                  name="Chicken Kabob"
                  price="$17.50"
                />
                <MenuItem
                  name="Lamb Kabob"
                  price="$19.99"
                />
                <MenuItem
                  name="Gyro"
                  price="$17.50"
                />
                <MenuItem
                  name="Mixed Grill Platter"
                  price="$20.99"
                />
                <MenuItem
                  name="Vegetarian Falafel Platter"
                  price="$13.99"
                />
                <MenuItem
                  name="Vegetarian Combination Platter"
                  price="$14.99"
                />
                <MenuItem
                  name="Lamb Shank"
                  price="$21.99"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Half: Appetizers, Salads, Sides, Soup, Kids, Desserts */}
        <div className="w-1/2 flex-shrink-0 p-4 md:p-8">
          <div className="flex flex-row gap-x-8 mx-auto w-full h-full"> {/* New flex-row for two columns */}

            {/* Left Column of Second Half */}
            <div className="flex flex-col flex-1 gap-y-8">
              {/* Appetizers Section */}
              <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Appetizers</h2>
                <div className="flex flex-col flex-grow justify-around">
                  <MenuItem
                    name="Stuffed Grape Leaves"
                    price="$7.99"
                  />
                  <MenuItem
                    name="Kibbeh (Kibby)"
                    price="$3.99"
                  />
                  <MenuItem
                    name="Hummus"
                    prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]}
                  />
                  <MenuItem
                    name="Baba Ghannoug"
                    prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]}
                  />
                </div>
              </div>

              {/* Salads Section */}
              <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Salads</h2>
                <p className="text-lg sm:text-xl text-gray-100 mb-2">Add Chicken to any salad for additional $4.50 or Gyro meat for additional $4.99</p>
                <div className="flex flex-col flex-grow justify-around">
                  <MenuItem
                    name="Greek Salad"
                    price="$9.99"
                  />
                  <MenuItem
                    name="Mediterranean Salad"
                    price="$9.99"
                  />
                  <MenuItem
                    name="Tabbouleh Salad"
                    price="$9.99"
                  />
                </div>
              </div>
            </div>

            {/* Right Column of Second Half */}
            <div className="flex flex-col flex-1 gap-y-8">
              {/* Sides Section */}
              <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-1 flex flex-col">
                <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Sides</h2>
                <div className="flex flex-col flex-grow justify-around">
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

              {/* Combined Column for Soup, Kids, Desserts */}
              <div className="flex flex-col justify-between gap-y-8 flex-1"> {/* This div itself needs to be flex-1 to share space with Sides */}
                {/* Soup Section */}
                <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow flex flex-col">
                  <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Soup</h2>
                  <div className="flex flex-col flex-grow justify-around">
                    <MenuItem name="Lentil Soup" price="$4.99" />
                  </div>
                </div>

                {/* Kids Meals Section */}
                <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow flex flex-col">
                  <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Kids Meals</h2>
                  <p className="text-lg sm:text-xl text-gray-100 mb-2">Served with choice of chips or fries and a drink</p>
                  <div className="flex flex-col flex-grow justify-around">
                    <MenuItem name="Chicken Tenders" price="$10.50" />
                  </div>
                </div>

                {/* Desserts Section */}
                <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow flex flex-col">
                  <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 border-b-4 border-yellow-400 pb-4 uppercase">Desserts</h2>
                  <div className="flex flex-col flex-grow justify-around">
                    <MenuItem name="Baklava" price="$3.50" />
                  </div>
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