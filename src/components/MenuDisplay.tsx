import React from 'react';
import MenuItem from './MenuItem';

const MenuDisplay = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-950 text-white">
      {/* Main Menu Content Area */}
      <div className="flex flex-col gap-y-16 p-8 mx-auto w-full max-w-4xl">

        {/* Appetizers Section */}
        <div className="bg-red-900 p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Appetizers</h2>
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
            prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]}
          />
          <MenuItem
            name="Baba Ghannoug"
            prices={[{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]}
          />
        </div>

        {/* Salads Section */}
        <div className="bg-red-900 p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Salads</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">Add Chicken to any salad for additional $4.50 or Gyro meat for additional $4.99</p>
          <MenuItem
            name="Greek Salad"
            description="A fresh bed of chopped lettuce, tomatoes, red onion, banana peppers, cucumber, and feta cheese with Greek dressing"
            price="$9.99"
          />
          <MenuItem
            name="Mediterranean Salad"
            description="A fresh bed of chopped lettuce, cucumber, green onion, tomatoes, served with a lemon juice and olive oil dressing."
            price="$9.99"
          />
          <MenuItem
            name="Tabbouleh Salad"
            description="Finely chopped parsley, green onion, tomatoes and mint mixed with cracked wheat, olive oil, lemon juice and salt."
            price="$9.99"
          />
        </div>

        {/* Sandwiches Section */}
        <div className="bg-red-900 p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Sandwiches</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">Combos served with 1 side: Rice, Fries, Chips or 2 Falafels and Drink</p>
          <div className="flex justify-between text-yellow-400 font-bold mb-4 text-xl sm:text-2xl">
            <span className="w-1/2"></span>
            <span className="w-1/4 text-right">Combo</span>
            <span className="w-1/4 text-right">Sandwich</span>
          </div>
          <MenuItem name="Gyro" comboPrice="$12.50" sandwichPrice="$9.50" />
          <MenuItem name="Chicken Shawarma" comboPrice="$12.50" sandwichPrice="$9.50" />
          <MenuItem name="Kafta Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
          <MenuItem name="Lamb Shawarma" comboPrice="$13.50" sandwichPrice="$10.99" />
          <MenuItem name="Vegetarian Falafel" comboPrice="$12.50" sandwichPrice="$9.50" />
          <MenuItem name="Chicken Kabob" comboPrice="$12.50" sandwichPrice="$9.50" />
        </div>

        {/* Plates Section */}
        <div className="bg-red-900 p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Plates</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6">Choice of sides: Fries, Rice, Salads, 2 Falafels or Hummus</p>
          <MenuItem
            name="Beef Kafta Kabob"
            description="Seasoned ground beef with spiced onion and parsley, served with 2 sides and pita bread."
            price="$17.50"
          />
          <MenuItem
            name="Lamb Shawarma"
            description="Chopped boneless leg lamb marinated with 12 spices and grilled. Served with 2 sides and pita bread."
            price="$20.99"
          />
          <MenuItem
            name="Chicken Shawarma"
            description="Thinly sliced marinated chicken served with 2 sides and pita bread."
            price="$17.50"
          />
          <MenuItem
            name="Chicken Kabob"
            description="Marinated chicken lightly seasoned and grilled. Served with 2 sides and pita bread."
            price="$17.50"
          />
          <MenuItem
            name="Lamb Kabob"
            description="Marinated lamb grilled and served with 2 sides and pita bread."
            price="$19.99"
          />
          <MenuItem
            name="Gyro"
            description="Perfectly seasoned and slow cooked on a vertical rotisserie, served with our homemade gyro sauce, 2 sides and pita bread."
            price="$17.50"
          />
          <MenuItem
            name="Mixed Grill Platter"
            description="Combination of Kafta Kabob, Chicken Kabob, Lamb Kabob and Gyro Meat served with 2 sides and pita bread."
            price="$20.99"
          />
          <MenuItem
            name="Vegetarian Falafel Platter"
            description="(6 Pieces) Seasoned mixture of ground chickpeas and fava beans, vegetables formed into patties and deep fried golden brown and served with tahini sauce, 1 side and pita bread."
            price="$13.99"
          />
          <MenuItem
            name="Vegetarian Combination Platter"
            description="Combination of falafel, stuffed grape leaves, hummus, baba ghannoug, served with 1 side and pita bread."
            price="$14.99"
          />
          <MenuItem
            name="Lamb Shank"
            description="Marinated shank slowly braised until fork tender and served with 2 sides and pita bread."
            price="$21.99"
          />
        </div>

        {/* Sides Section */}
        <div className="bg-red-900 p-10 rounded-lg shadow-lg">
          <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Sides</h2>
          <MenuItem name="Aromatic Rice" price="$3.99" />
          <MenuItem name="Pita Bread 1 piece" price="$1.40" />
          <MenuItem name="Mediterranean Salad" price="$4.99" />
          <MenuItem name="Tabbouleh Salad" price="$4.99" />
          <MenuItem name="Greek Salad" price="$4.99" />
          <MenuItem name="Falafel per piece" price="$1.20" />
          <MenuItem name="Extra Sauce" price="$1.40" />
          <MenuItem name="French Fries" price="$4.99" />
        </div>

        {/* Combined Column for Soup, Kids, Drinks, Desserts */}
        <div className="flex flex-col justify-between gap-y-8">
          {/* Soup Section - shorter padding */}
          <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Soup</h2>
            <MenuItem name="Lentil Soup" price="$4.99" />
          </div>

          {/* Kids Meals Section - shorter padding */}
          <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Kids Meals</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">Served with choice of chips or fries and a drink</p>
            <MenuItem name="Chicken Tenders" price="$10.50" />
          </div>

          {/* Drinks Section - shorter padding */}
          <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Drinks</h2>
            <MenuItem name="Coke Products" price="$2.99" />
            <MenuItem name="Hot or Cold Tea" price="$2.75" />
            <MenuItem name="Turkish Coffee" price="$4.99" />
          </div>

          {/* Desserts Section - shorter padding */}
          <div className="bg-red-900 p-6 rounded-lg shadow-lg flex-grow">
            <h2 className="text-5xl font-extrabold text-yellow-400 mb-8 border-b-4 border-yellow-400 pb-4 uppercase">Desserts</h2>
            <MenuItem name="Baklava" price="$3.50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDisplay;