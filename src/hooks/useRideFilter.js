import { useState, useEffect } from "react";
// This hook filters ride data based on a search query.
export const useRideFilter = (rides) => {
  const [search, setSearch] = useState("");
  const [filteredRides, setFilteredRides] = useState([]);

  useEffect(() => {
    if (!search) {
      setFilteredRides(rides);
      return;
    }

    const query = search.toLowerCase();
    setFilteredRides(
      rides.filter((ride) => {
        // Extract and convert ride details to lowercase for comparison
        const driverName = ride.driver?.name?.toLowerCase() || "";
        const carModel = ride.driver?.carModel?.toLowerCase() || "";
        const rideType = ride.rideModels?.type?.toLowerCase() || "";
        const source = ride.source?.toLowerCase() || "";
        const destination = ride.destination?.toLowerCase() || "";
        // Check if any of these fields contain the search query
        return [driverName, carModel, rideType, source, destination].some(
          (field) => field.includes(query)
        );
      })
    );
  }, [search, rides]);

  return { search, setSearch, filteredRides };
};
