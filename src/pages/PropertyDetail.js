import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiMapPin, FiUsers, FiHome, FiDroplet, FiStar } from "react-icons/fi";
import ImageCarousel from "../components/ImageCarousel";
import Amenities from "../components/Amenities";
import ReviewSection from "../components/ReviewSection";
import { properties } from "../data/properties";

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");
  const [bookingMessage, setBookingMessage] = useState("");

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-airbnb-darkGray mb-4">
            Property not found
          </h1>
          <a href="/explore" className="btn-primary">
            Back to Explore
          </a>
        </div>
      </div>
    );
  }

  const handleBook = (e) => {
    e.preventDefault();
    if (!checkIn || !checkOut) {
      setBookingMessage("Please select check-in and check-out dates");
      return;
    }

    setBookingMessage(
      `Booking confirmed! You will stay at ${property.title} from ${checkIn} to ${checkOut} for ${guests} guest(s).`,
    );

    // Reset form after 3 seconds
    setTimeout(() => {
      setCheckIn("");
      setCheckOut("");
      setGuests("1");
      setBookingMessage("");
    }, 3000);
  };

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
        )
      : 1;
  const totalPrice = property.price * Math.max(nights, 1);

  return (
    <div className="min-h-screen bg-white">
      {/* Image Carousel */}
      <div className="bg-white pt-8 md:pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel images={property.images} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Property Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-airbnb-darkGray mb-4">
                {property.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <FiMapPin size={18} />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiStar
                    size={18}
                    className="fill-airbnb-darkGray text-airbnb-darkGray"
                  />
                  <span className="font-semibold text-airbnb-darkGray">
                    {property.rating}
                  </span>
                  <span>({property.reviews} reviews)</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 py-8 border-y border-airbnb-lightGray mb-8">
              <div>
                <div className="flex items-center gap-2 text-airbnb-darkGray font-semibold mb-1">
                  <FiUsers size={20} />
                  <span>Guests</span>
                </div>
                <p className="text-gray-600">{property.guests} guests</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-airbnb-darkGray font-semibold mb-1">
                  <FiHome size={20} />
                  <span>Bedrooms</span>
                </div>
                <p className="text-gray-600">{property.bedrooms} bedrooms</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-airbnb-darkGray font-semibold mb-1">
                  <FiDroplet size={20} />
                  <span>Bathrooms</span>
                </div>
                <p className="text-gray-600">{property.bathrooms} bathrooms</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-airbnb-darkGray mb-4">
                About this place
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <Amenities amenities={property.amenities} />

            {/* Reviews */}
            <ReviewSection reviews={property.reviews_list} />
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 card p-6 md:p-8">
              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-airbnb-darkGray">
                  ${property.price}
                  <span className="text-base font-normal text-gray-600">
                    {" "}
                    /night
                  </span>
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBook} className="space-y-4">
                {/* Check-in */}
                <div>
                  <label className="block text-sm font-semibold text-airbnb-darkGray mb-2">
                    Check In
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Check-out */}
                <div>
                  <label className="block text-sm font-semibold text-airbnb-darkGray mb-2">
                    Check Out
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="input-field"
                  />
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-airbnb-darkGray mb-2">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="input-field"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>

                {/* Price Breakdown */}
                {checkIn && checkOut && nights > 0 && (
                  <div className="py-4 border-t border-b border-airbnb-lightGray space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        ${property.price} x {nights} night
                        {nights > 1 ? "s" : ""}
                      </span>
                      <span className="text-airbnb-darkGray font-semibold">
                        ${property.price * nights}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service fee</span>
                      <span className="text-airbnb-darkGray font-semibold">
                        ${Math.round(totalPrice * 0.1)}
                      </span>
                    </div>
                    <div className="flex justify-between font-bold text-base pt-2">
                      <span>Total</span>
                      <span className="text-airbnb-darkGray">
                        ${Math.round(totalPrice * 1.1)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <button type="submit" className="btn-primary w-full py-3">
                  Reserve
                </button>
              </form>

              {/* Booking Message */}
              {bookingMessage && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-semibold">
                    ✓ {bookingMessage}
                  </p>
                </div>
              )}

              {/* Additional Info */}
              <div className="mt-6 pt-6 border-t border-airbnb-lightGray text-sm text-gray-600">
                <p className="mb-2">You won't be charged yet</p>
                <p>This is a professional property managed on Airbnb.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
