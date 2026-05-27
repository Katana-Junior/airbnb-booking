import React from "react";
import SearchBar from "../components/SearchBar";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Home() {
  const [displayProperties, setDisplayProperties] = React.useState(properties);

  const handleSearch = (searchParams) => {
    // Filter based on search parameters
    let filtered = properties;

    if (searchParams.location) {
      filtered = filtered.filter((prop) =>
        prop.location
          .toLowerCase()
          .includes(searchParams.location.toLowerCase()),
      );
    }

    if (searchParams.guests) {
      filtered = filtered.filter(
        (prop) => prop.guests >= parseInt(searchParams.guests),
      );
    }

    setDisplayProperties(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-airbnb-gray to-white pt-8 md:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-airbnb-darkGray mb-8">
            Discover your next adventure
          </h1>

          {/* Search Bar */}
          <div className="mb-8 md:mb-16">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-airbnb-darkGray mb-2">
            Homes for you
          </h2>
          <p className="text-gray-600">
            {displayProperties.length} properties available
          </p>
        </div>

        {/* Properties Grid */}
        {displayProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 mb-4">
              No properties found matching your search.
            </p>
            <button
              onClick={() => setDisplayProperties(properties)}
              className="btn-primary"
            >
              View All Properties
            </button>
          </div>
        )}
      </div>

      {/* FAQ Section */}
      <div className="bg-airbnb-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-airbnb-darkGray mb-12">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "Search",
                description:
                  "Browse thousands of unique properties in the world",
              },
              {
                number: "2",
                title: "Book",
                description:
                  "Reserve your perfect getaway with secure checkout",
              },
              {
                number: "3",
                title: "Enjoy",
                description:
                  "Create unforgettable memories at your chosen destination",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-airbnb-red text-white rounded-full text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-airbnb-darkGray mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
