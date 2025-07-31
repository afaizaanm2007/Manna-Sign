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
    <div className="mb-4 pb-2 border-b border-gray-700 last:border-b-0">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-lg font-semibold text-yellow-400">{name}</h3>
        {price && <span className="text-lg font-semibold text-yellow-400">{price}</span>}
        {prices && (
          <div className="flex flex-wrap justify-end gap-x-4 text-lg font-semibold text-yellow-400">
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
        {(comboPrice || sandwichPrice) && (
          <div className="flex flex-col items-end text-yellow-400 text-right">
            {comboPrice && <span className="text-sm">Combo: {comboPrice}</span>}
            {sandwichPrice && <span className="text-sm">Sandwich: {sandwichPrice}</span>}
          </div>
        )}
      </div>
      {description && <p className="text-sm text-gray-300">{description}</p>}
    </div>
  );
};

export default MenuItem;