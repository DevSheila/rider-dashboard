import React from "react";

const RideCard = ({ ride, onBook }) => {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center">
          <div className="w-4 h-4 bg-purple-200 rounded-sm" />
        </div>
        <span
          className={`ml-auto text-xs px-2 py-1 rounded-full ${
            ride.status === "Delivered"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {ride.status}
        </span>
      </div>

      <div className="flex items-center my-4">
        <div className="flex flex-col items-center">
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
          <div
            className="w-0.5 h-16 bg-gray-300 border-dashed"
            style={{ borderStyle: "dashed" }}
          />
          <div className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>

        <div className="flex-1 flex flex-col justify-between h-16 ml-4">
          <div>
            <div className="text-xs text-gray-500">{ride.origin}</div>
            <div className="text-xs text-gray-400">{ride.originDate}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">{ride.destination}</div>
            <div className="text-xs text-gray-400">{ride.destinationDate}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-2">
        <div className="flex items-center">
          <div className="relative">
            <img
              src={ride.driver.photo}
              alt={ride.driver.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <div className="ml-2">
            <div className="text-xs flex items-center">
              <span className="text-green-500 mr-1">•</span>
              {ride.driver.name}
            </div>
            <div className="text-xs text-gray-500">Driver / Courier</div>
          </div>
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={() => onBook(ride)}
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Book Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
