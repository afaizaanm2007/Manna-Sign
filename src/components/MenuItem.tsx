import React from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-baseline">
        <span className="text-white text-3xl font-bold tracking-wide flex-shrink-0 pr-4">{name}</span>
        <span className="flex-grow border-b border-dotted border-white mx-2"></span>
        <span className="text-white text-3xl font-bold flex-shrink-0 pl-4">{price}</span>
      </div>
      {description && (
        <p className="text-gray-200 text-xl mt-1 leading-tight">{description}</p>
      )}
    </div>
  );
};

export default MenuItem;