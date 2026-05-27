import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiStar } from "react-icons/fi";

export default function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <Link to={`/property/${property.id}`}>
      <div className="card group cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-lg bg-gray-200">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          >
            <FiHeart
              size={20}
              className={
                isFavorite
                  ? "fill-airbnb-red text-airbnb-red"
                  : "text-airbnb-darkGray"
              }
            />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4 flex-1 flex flex-col">
          {/* Title and Location */}
          <h3 className="font-semibold text-airbnb-darkGray text-sm md:text-base mb-1 line-clamp-1">
            {property.title}
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mb-3">
            {property.location}
          </p>

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* Rating and Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FiStar
                size={16}
                className="fill-airbnb-darkGray text-airbnb-darkGray"
              />
              <span className="text-sm font-semibold text-airbnb-darkGray">
                {property.rating}
              </span>
              <span className="text-xs text-gray-600">
                ({property.reviews})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-2">
            <p className="text-sm md:text-base">
              <span className="font-bold text-airbnb-darkGray">
                ${property.price}
              </span>
              <span className="text-gray-600"> /night</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
