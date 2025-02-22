import React from "react";

// Props:
// - driver: object containing driver details (name, photo, car model, car plate)
// - date: ride date and time
// - rideType: type of ride 
const DriverInfo = ({ driver, date, rideType }) => {
    return (
      <div className="flex items-start gap-4">
        <div className="relative">
          <img
            src={driver?.photo || "/placeholder.jpg"}
            alt={driver?.name || "Unknown Driver"}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-800 dark:text-gray-100">
            {driver?.name || "N/A"}
          </p>
          <p className="text-sm text-gray-800 dark:text-gray-100">
            {driver?.carModel || "N/A"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-100">
            {driver?.carPlate || "N/A"}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {date ? new Date(date).toLocaleString() : "Unknown Date"}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-800 dark:text-gray-100">
            {rideType || "N/A"}
          </p>
        </div>
      </div>
    );
  };
  
  export default DriverInfo;