import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("1");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch({ location, checkIn, checkOut, guests });
  };

  return (
    <div className="bg-white rounded-full shadow-md p-2 md:p-4 flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
      {/* Location Input */}
      <div className="flex-1 px-4 py-2">
        <label className="text-xs font-semibold text-airbnb-darkGray block mb-1">
          Where
        </label>
        <input
          type="text"
          placeholder="Search destinations"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border-none outline-none text-sm bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-12 bg-airbnb-lightGray"></div>

      {/* Check-in Input */}
      <div className="flex-1 px-4 py-2">
        <label className="text-xs font-semibold text-airbnb-darkGray block mb-1">
          Check In
        </label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full border-none outline-none text-sm bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-12 bg-airbnb-lightGray"></div>

      {/* Check-out Input */}
      <div className="flex-1 px-4 py-2">
        <label className="text-xs font-semibold text-airbnb-darkGray block mb-1">
          Check Out
        </label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full border-none outline-none text-sm bg-transparent"
        />
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px h-12 bg-airbnb-lightGray"></div>

      {/* Guests Input */}
      <div className="flex-1 px-4 py-2">
        <label className="text-xs font-semibold text-airbnb-darkGray block mb-1">
          Guests
        </label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full border-none outline-none text-sm bg-transparent"
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5+ Guests</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="px-2">
        <button
          onClick={handleSearch}
          className="p-3 bg-airbnb-red text-white rounded-full hover:bg-red-600 transition-colors"
        >
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
}
