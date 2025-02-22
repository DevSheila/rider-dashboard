import React from "react";
import { Phone, User2 } from "lucide-react";
import rideImages from "@/data/rideImages";


// Props:
// - ride: an object containing ride details (driver, vehicle, fare, duration, etc.)
// - onBook: function to handle ride booking
const RideCard = ({ ride, onBook }) => {
  const {
    rideModels: { type, fare, capacity } = {},
    driver: { photo, name, carModel, carPlate } = {},
    duration,
  } = ride;

  return (
    <div className="p-4 border-t flex flex-col">
      {/* Ride Type and Fare */}
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <img
            src={rideImages[type] || "/assets/default.png"}
            alt={type}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-2">
            <div className="text-xs">{type}</div>
            <div className="text-xs text-gray-500">Fare: KES {fare}</div>
          </div>
        </div>
        <div className="ml-auto flex gap-1 items-center text-gray-500">
          <button className="p-1.5 border rounded-md">
            <User2 size={16} />
          </button>
          <div className="text-xs">{capacity}</div>
        </div>
      </div>

      {/* Driver Info */}
      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={photo}
              alt={name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div className="ml-2 text-xs">
            <div className="text-green-500 flex items-center">•</div>
            <div>{name}</div>
            <div>{carModel}</div>
            <div className="text-gray-500">{carPlate}</div>
          </div>
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <div className="text-xs text-gray-500">{duration} away</div>
          <button className="p-1.5 border rounded-md">
            <Phone size={16} />
          </button>
        </div>
      </div>

      {/* Book Ride Button */}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={() => onBook(ride)}
      >
        Book Ride
      </button>
    </div>
  );
};

export default RideCard;
