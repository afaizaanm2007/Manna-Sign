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
    <div className="mb-2 pb-2 border-b border-gray-700 last:border-b-0"> {/* Reduced margin/padding */}
      <div className="flex justify-between items-baseline mb-1"> {/* Reduced margin */}
        {/* Always display name */}
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400">{name}</h3> {/* Adjusted font size */}

        {/* Display simple price or multiple prices if not a sandwich type */}
        {!isSandwichType && price && <span className="text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400">{price}</span>} {/* Adjusted font size */}
        {!isSandwichType && prices && (
          <div className="flex flex-wrap justify-end gap-x-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-yellow-400"> {/* Adjusted font size and gap */}
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
      </div>

      {/* Display combo/sandwich prices on a new line, aligned to columns */}
      {isSandwichType && (
        <div className="flex justify-end text-yellow-400 mt-1"> {/* Reduced margin */}
          {/* This empty span takes up the space where the name would be in the header row, ensuring prices align */}
          <span className="w-1/2"></span>
          {comboPrice && <span className="w-1/4 text-right text-xl sm:text-2xl md:text-3xl font-bold">{comboPrice}</span>} {/* Adjusted font size */}
          {sandwichPrice && <span className="w-1/4 text-right text-xl sm:text-2xl md:text-3xl font-bold">{sandwichPrice}</span>} {/* Adjusted font size */}
        </div>
      )}

      {description && <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-bold mt-1">{description}</p>} {/* Adjusted font size and margin */}
    </div>
  );
};

export default MenuItem;