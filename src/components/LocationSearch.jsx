import { Autocomplete } from "@react-google-maps/api";
import { FaTimes } from "react-icons/fa";

// Props:
// - originRef: reference to the origin input field
// - destinationRef: reference to the destination input field
// - setSource: function to update the source location
// - setEnd: function to update the destination location
// - clearRoute: function to clear the selected route
const LocationSearch = ({ 
  originRef, 
  destinationRef, 
  setSource, 
  setEnd, 
  clearRoute 
}) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg m-4 z-10 w-full max-w-md ml-8">
      <div className="flex gap-2">
        <Autocomplete
          onPlaceChanged={() => {
            if (originRef.current) setSource(originRef.current.value);
          }}
        >
          <input
            type="text"
            placeholder="Origin"
            ref={originRef}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </Autocomplete>
        <Autocomplete
          onPlaceChanged={() => {
            if (destinationRef.current) setEnd(destinationRef.current.value);
          }}
        >
          <input
            type="text"
            placeholder="Destination"
            ref={destinationRef}
            className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
          />
        </Autocomplete>
        <button
          onClick={clearRoute}
          className="p-2 bg-gray-300 dark:bg-gray-600 rounded"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default LocationSearch;