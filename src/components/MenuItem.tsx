import React from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  price?: string; // For simple price like "$7.99"
  prices?: { label: string; value: string }[]; // For multiple prices like [{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]
  comboPrice?: string; // For sandwich combo price
  sandwichPrice?: string; // For sandwich only price
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, prices, comboPrice, sandwichPrice }) => {
  return (
    <div className="mb-8 pb-6 border-b border-gray-700 last:border-b-0">
      <div className="flex justify-between items-baseline mb-3">
        <h3 className="text-3xl sm:text-4xl font-semibold text-yellow-400">{name}</h3>
        {price && <span className="text-3xl sm:text-4xl font-semibold text-yellow-400">{price}</span>}
        {prices && (
          <div className="flex flex-wrap justify-end gap-x-8 text-3xl sm:text-4xl font-semibold text-yellow-400">
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
        {(comboPrice || sandwichPrice) && (
          <div className="flex flex-col items-end text-yellow-400 text-right">
            {comboPrice && <span className="text-lg sm:text-xl">Combo: {comboPrice}</span>}
            {sandwichPrice && <span className="text-lg sm:text-xl">Sandwich: {sandwichPrice}</span>}
          </div>
        )}
      </div>
      {description && <p className="text-lg sm:text-xl text-gray-300">{description}</p>}
    </div>
  );
};

export default MenuItem;