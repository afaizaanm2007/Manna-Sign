import React from 'react';

interface MenuItemProps {
  name: string;
  price?: string; // For simple price like "$7.99"
  prices?: { label: string; value: string }[]; // For multiple prices like [{ label: "Sm", value: "$5.50" }, { label: "Lg", value: "$9.99" }]
  comboPrice?: string; // For sandwich combo price
  sandwichPrice?: string; // For sandwich only price
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, prices, comboPrice, sandwichPrice }) => {
  const isSandwichType = comboPrice || sandwichPrice;

  return (
    <div className="mb-2 pb-2 border-b border-gray-400 last:border-b-0">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{name}</h3>

        {!isSandwichType && price && <span className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">{price}</span>}
        {!isSandwichType && prices && (
          <div className="flex flex-wrap justify-end gap-x-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            {prices.map((p, index) => (
              <span key={index}>{p.label} {p.value}</span>
            ))}
          </div>
        )}
      </div>

      {isSandwichType && (
        <div className="flex justify-end text-gray-900 mt-1">
          <span className="w-1/2"></span>
          {comboPrice && <span className="w-1/4 text-right text-lg sm:text-xl md:text-2xl font-bold">{comboPrice}</span>}
          {sandwichPrice && <span className="w-1/4 text-right text-lg sm:text-xl md:text-2xl font-bold">{sandwichPrice}</span>}
        </div>
      )}
    </div>
  );
};

export default MenuItem;