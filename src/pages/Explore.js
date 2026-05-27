import React from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Explore() {
  const [filteredProperties, setFilteredProperties] =
    React.useState(properties);
  const [priceFilter, setPriceFilter] = React.useState("all");
  const [ratingFilter, setRatingFilter] = React.useState("all");

  React.useEffect(() => {
    let filtered = properties;

    // Filter by price
    if (priceFilter !== "all") {
      filtered = filtered.filter((prop) => {
        if (priceFilter === "budget") return prop.price < 150;
        if (priceFilter === "mid") return prop.price >= 150 && prop.price < 300;
        if (priceFilter === "luxury") return prop.price >= 300;
        return true;
      });
    }

    // Filter by rating
    if (ratingFilter !== "all") {
      filtered = filtered.filter((prop) => {
        if (ratingFilter === "4.5") return prop.rating >= 4.5;
        if (ratingFilter === "4.7") return prop.rating >= 4.7;
        if (ratingFilter === "4.9") return prop.rating >= 4.9;
        return true;
      });
    }

    setFilteredProperties(filtered);
  }, [priceFilter, ratingFilter]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-airbnb-gray py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-airbnb-darkGray">
            Explore all properties
          </h1>
          <p className="text-gray-600 mt-2">
            Found {filteredProperties.length} places for you
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-48 flex-shrink-0">
            <div className="sticky top-20 space-y-6">
              {/* Price Filter */}
              <div className="bg-white rounded-lg p-4 border border-airbnb-lightGray">
                <h3 className="font-semibold text-airbnb-darkGray mb-4">
                  Price per night
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "All", value: "all" },
                    { label: "Budget (< $150)", value: "budget" },
                    { label: "Mid-range ($150-$300)", value: "mid" },
                    { label: "Luxury (> $300)", value: "luxury" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="price"
                        value={option.value}
                        checked={priceFilter === option.value}
                        onChange={(e) => setPriceFilter(e.target.value)}
                        className="w-4 h-4 accent-airbnb-red"
                      />
                      <span className="text-sm text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div className="bg-white rounded-lg p-4 border border-airbnb-lightGray">
                <h3 className="font-semibold text-airbnb-darkGray mb-4">
                  Rating
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "All ratings", value: "all" },
                    { label: "4.5+ ⭐", value: "4.5" },
                    { label: "4.7+ ⭐", value: "4.7" },
                    { label: "4.9+ ⭐", value: "4.9" },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="rating"
                        value={option.value}
                        checked={ratingFilter === option.value}
                        onChange={(e) => setRatingFilter(e.target.value)}
                        className="w-4 h-4 accent-airbnb-red"
                      />
                      <span className="text-sm text-gray-700">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Properties Grid */}
          <main className="flex-1">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-gray-600 mb-4">
                  No properties match your filters.
                </p>
                <button
                  onClick={() => {
                    setPriceFilter("all");
                    setRatingFilter("all");
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
