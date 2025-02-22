import { useSelector, useDispatch } from "react-redux";
import SearchBar from "@/components/SearchBar";
import { useRideFilter } from "@/hooks/useRideFilter";
import RideHistoryCard from "@/components/RideHistoryCard";
import { clearRides } from "@/store/rideSlice";
const RideHistory = () => {
  const rides = useSelector((state) => state.rides.rides);
  const dispatch = useDispatch();
  const { search, setSearch, filteredRides } = useRideFilter(rides);

  return (
    <div className="flex-1 flex flex-col overflow-y-auto lg:ml-64 md:ml-64 items-center justify h-screen">
      <div className="sm:p-4 px-2">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Ride History
        </h1>
        <SearchBar search={search} onSearch={setSearch} />
        {filteredRides.length === 0 ? (
          <p className="text-gray-500 text-center">No rides found.</p>
        ) : (
          <div className="space-y-4">
            {filteredRides
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((ride) => (
                <RideHistoryCard key={ride.id} ride={ride} />
              ))}
          </div>
        )}


{rides.length > 0 && (
          <button
            onClick={() => dispatch(clearRides())}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full sm:w-auto mx-auto"
          >
            Clear Ride History
          </button>
        )}
      </div>
    </div>
  );
};

export default RideHistory;
