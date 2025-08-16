import React from "react";

const BrowseProductCard = ({ product, onClick, className = "" }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden bg-white dark:bg-gray-900 ${className}`}
      title={product.description}
    >
      {/* Image with category badge */}
      <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
        {product.imageUrl ? (
          <>
            
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </>
        ) : (
          <div className="bg-gray-300 dark:bg-gray-700 w-full h-full flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {product.category && (
          <span className="absolute top-3 left-3 bg-primary-light/90 text-primary-dark text-xs font-semibold px-3 py-1 rounded-full shadow-md select-none backdrop-blur-sm">
            {product.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between h-[180px] bg-gradient-to-br from-primary-dark/10 to-primary-light/10">
        <h3 className="text-xl font-bold text-primary-dark mb-2 line-clamp-2">
          {product.title}
        </h3>

        <p
          className="text-sm text-primary-mid mb-4 line-clamp-3 font-light"
          title={product.description}
        >
          {product.description}
        </p>

        {/* Footprint badge */}
        <div className="self-start bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full shadow-sm">
          {product.totalFootprint.toFixed(1)} {product.unit}
        </div>
      </div>
    </div>
  );
};

export default BrowseProductCard;
