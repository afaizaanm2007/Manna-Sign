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
  const isSandwichType = comboPrice || sandwichPrice;

  return (
    <div className="mb-4 pb-4 border-b border-gray-700 last:border-b-0">
      <div className="flex justify-between items-baseline mb-2">
        {/* Always display name */}
        <h3 className="text-5xl sm:text-6xl font-semibold text-yellow-400">{name}</h3>

        {/* Display simple price or multiple prices if not a sandwich type */}
        {!isSandwichType && price && <span className="text-5xl sm:text-6xl font-semibold text-yellow-400">{price}</span>}
        {!isSandwichType && prices && (
          <div className="flex flex-wrap justify-end gap-x-8 text-5xl sm:text-6xl font-semibold text-yellow-400">
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
      </div>

      {/* Display combo/sandwich prices on a new line, aligned to columns */}
      {isSandwichType && (
        <div className="flex justify-end text-yellow-400 mt-2">
          {/* This empty span takes up the space where the name would be in the header row, ensuring prices align */}
          <span className="w-1/2"></span>
          {comboPrice && <span className="w-1/4 text-right text-3xl sm:text-4xl font-bold">{comboPrice}</span>}
          {sandwichPrice && <span className="w-1/4 text-right text-3xl sm:text-4xl font-bold">{sandwichPrice}</span>}
        </div>
      )}

      {description && <p className="text-3xl sm:text-4xl text-gray-400 font-bold mt-2">{description}</p>}
    </div>
  );
};

export default MenuItem;