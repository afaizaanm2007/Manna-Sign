import React from 'react';
import MenuItem from './MenuItem';

const MenuDisplay = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-950 text-white">
      {/* Top Header - Adjusted for vertical screen prominence */}
      <div className="bg-red-700 py-12 md:py-6 flex flex-col items-center justify-center h-48 md:h-auto">
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 text-center tracking-wide leading-tight">Manna Grill</h1>
      </div>

      {/* Main Menu Content Area */}
      <div className="flex-grow p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-7xl mx-auto w-full">

        {/* Appetizers Section */}
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Appetizers</h2>
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
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Salads</h2>
          <p className="text-sm text-gray-300 mb-4">Add Chicken to any salad for additional $4.50 or Gyro meat for additional $4.99</p>
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
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Sandwiches</h2>
          <p className="text-sm text-gray-300 mb-4">Combos served with 1 side: Rice, Fries, Chips or 2 Falafels and Drink</p>
          <div className="flex justify-between text-yellow-400 font-bold mb-2">
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
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Plates</h2>
          <p className="text-sm text-gray-300 mb-4">Choice of sides: Fries, Rice, Salads, 2 Falafels or Hummus</p>
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
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Sides</h2>
          <MenuItem name="Aromatic Rice" price="$3.99" />
          <MenuItem name="Pita Bread 1 piece" price="$1.40" />
          <MenuItem name="Extra Sauce" price="$1.40" />
          <MenuItem
            name="Falafel (4 Pieces)"
            description="Ground chickpeas, fava beans, and spices deep fried golden brown."
            price="$7.99"
          />
          <MenuItem
            name="Fatayer (Spinach Pie)"
            description="(1 Piece) Baked dough stuffed with spinach, onion, pine nuts, sumac and lemon juice."
            price="$3.99"
          />
          <MenuItem
            name="Sambousik (Meat Pie)"
            description="(1 Piece) Baked dough stuffed with ground beef, onion and pine nuts."
            price="$3.99"
          />
          <MenuItem
            name="Foul Mudammas"
            description="Fava beans cooked and seasoned with garlic, lemon juice and olive oil."
            price="$7.99"
          />
          <MenuItem
            name="Labneh"
            description="Creamy strained yogurt spread topped with olive oil and mint."
            price="$6.99"
          />
          <MenuItem
            name="French Fries"
            price="$4.99"
          />
          <MenuItem name="Falafel per piece" price="$1.20" />
        </div>

        {/* Soup Section */}
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Soup</h2>
          <MenuItem name="Lentil Soup" price="$4.99" />
        </div>

        {/* Kids Meals Section */}
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Kids Meals</h2>
          <p className="text-sm text-gray-300 mb-4">Served with choice of chips or fries and a drink</p>
          <MenuItem name="Chicken Tenders" price="$10.50" />
        </div>

        {/* Drinks Section */}
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Drinks</h2>
          <MenuItem name="Coke Products" price="$2.99" />
          <MenuItem name="Hot or Cold Tea" price="$2.75" />
          <MenuItem name="Turkish Coffee" price="$4.99" />
        </div>

        {/* Desserts Section */}
        <div className="col-span-1 bg-red-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6 border-b-4 border-yellow-400 pb-2 uppercase">Desserts</h2>
          <MenuItem name="Baklava" price="$3.50" />
        </div>

        {/* Catering Available */}
        <div className="col-span-full text-center mt-8">
          <p className="text-3xl font-extrabold text-yellow-400 uppercase tracking-wider">Catering Available</p>
        </div>

      </div>
    </div>
  );
};

export default MenuDisplay;