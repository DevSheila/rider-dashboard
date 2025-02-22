import { FaLocationDot } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";

// Props:
// - source: starting location of the trip
// - destination: ending location of the trip
// - fare: cost of the ride
// - distance: total distance of the trip
const LocationInfo = ({ source, destination, fare, distance }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col sm:items-start">
          <div className="flex items-center gap-2 text-gray-800 dark:text-gray-100 text-sm">
            <FaLocationDot className="text-sm text-black-500 dark:text-gray-100" />
            {source}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-100">Pickup point</p>
        </div>
        <span className="text-blue-600 text-sm sm:text-base">
          KES {new Intl.NumberFormat("en-KE").format(fare || 0)}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="flex flex-col sm:items-start">
          <div className="flex items-center gap-2 text-gray-800 text-sm dark:text-gray-100">
            <MdLocationOn className="text-sm text-black dark:text-gray-100" />
            {destination}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-100">Destination</p>
        </div>
        <span className="text-sm text-gray-700 dark:text-gray-100">{distance}</span>
      </div>
    </div>
  );
};

export default LocationInfo;
