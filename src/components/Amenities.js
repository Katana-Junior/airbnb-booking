import React from "react";
import { FiWifi, FiAirplay, FiWatch, FiDroplet } from "react-icons/fi";
import {
  MdOutlineKitchen,
  MdLocalLaundryService,
  MdOutlineLocalParking,
} from "react-icons/md";

const amenityIcons = {
  WiFi: <FiWifi size={24} />,
  Kitchen: <MdOutlineKitchen size={24} />,
  Washer: <MdLocalLaundryService size={24} />,
  Dryer: <MdLocalLaundryService size={24} />,
  AC: <FiAirplay size={24} />,
  Heating: <FiWatch size={24} />,
  TV: <FiAirplay size={24} />,
  Pool: <FiDroplet size={24} />,
  "Hot Tub": <FiDroplet size={24} />,
  BBQ: <MdOutlineKitchen size={24} />,
  "Beach Access": <FiDroplet size={24} />,
  Parking: <MdOutlineLocalParking size={24} />,
  Fireplace: <FiWatch size={24} />,
  Patio: <FiAirplay size={24} />,
  "Self check-in": <FiWatch size={24} />,
};

export default function Amenities({ amenities }) {
  return (
    <div className="py-8 border-t border-airbnb-lightGray">
      <h2 className="text-2xl font-bold text-airbnb-darkGray mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-airbnb-gray transition-colors"
          >
            <div className="text-airbnb-red flex-shrink-0">
              {amenityIcons[amenity] || <FiAirplay size={24} />}
            </div>
            <span className="text-airbnb-darkGray font-medium">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
