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
    <div className="mb-10 pb-8 border-b border-gray-700 last:border-b-0">
      <div className="flex justify-between items-baseline mb-4">
        <h3 className="text-5xl sm:text-6xl font-semibold text-yellow-400 leading-tight">{name}</h3>
        {price && <span className="text-5xl sm:text-6xl font-semibold text-yellow-400">{price}</span>}
        {prices && (
          <div className="flex flex-wrap justify-end gap-x-10 text-5xl sm:text-6xl font-semibold text-yellow-400">
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
        {(comboPrice || sandwichPrice) && (
          <div className="flex flex-grow justify-end text-yellow-400">
            {comboPrice && <span className="w-1/2 text-right text-2xl sm:text-3xl">{comboPrice}</span>}
            {sandwichPrice && <span className="w-1/2 text-right text-2xl sm:text-3xl">{sandwichPrice}</span>}
          </div>
        )}
      </div>
      {description && <p className="text-2xl sm:text-3xl text-gray-300 leading-relaxed">{description}</p>}
    </div>
  );
};

export default MenuItem;