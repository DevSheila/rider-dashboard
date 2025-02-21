import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addRide } from "@/store/rideSlice";
import RideList from "@/components/RideList";
import SearchBar from "@/components/SearchBar";
import BookingModal from "@/components/BookingModal";
import LocationInput from "@/components/LocationInput";
import { toast } from "sonner";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

const AvailableRides = () => {
  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [autocompleteStart, setAutocompleteStart] = useState(null);
  const [autocompleteEnd, setAutocompleteEnd] = useState(null);

  const dispatch = useDispatch();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const mockRides = response.data.map((user) => ({
          id: user.id,
          driver: user.name,
          car: "Toyota Prius",
          fare: (Math.random() * 20 + 5).toFixed(2),
          distance: (Math.random() * 10 + 1).toFixed(1),
        }));
        setRides(mockRides);
        setFilteredRides(mockRides);
      } catch (err) {
        setError("Failed to fetch rides. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
    setFilteredRides(rides.filter((ride) => ride.driver.toLowerCase().includes(query.toLowerCase())));
  };

  const handleBookRide = (ride) => {
    setSelectedRide(ride);
  };

  const confirmBooking = () => {
    if (selectedRide) {
      const newRide = {
        ...selectedRide,
        id: Date.now(),
        date: new Date().toISOString(),
        status: "Completed",
      };

      dispatch(addRide(newRide));
      setSelectedRide(null);
      toast.success("Booking Successful", {
        description: "You have successfully booked a ride.",
      });
    }
  };

  const handlePlaceSelect = (autocompleteInstance, setLocation) => {
    if (autocompleteInstance) {
      const place = autocompleteInstance.getPlace();
      if (place && place.formatted_address) {
        setLocation(place.formatted_address);
      }
    }
  };

  if (loading) return <p className="text-center text-lg">Loading rides...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      <h1 className="text-2xl font-semibold mb-4">Available Rides</h1>

      {/* Location Inputs */}
      {isLoaded && (
        <div className="mb-4">
          <LocationInput
            placeholder="Enter current location"
            value={currentLocation}
            onChange={setCurrentLocation}
            onLoad={setAutocompleteStart}
            onPlaceChanged={() => handlePlaceSelect(autocompleteStart, setCurrentLocation)}
          />
          <LocationInput
            placeholder="Enter destination"
            value={destination}
            onChange={setDestination}
            onLoad={setAutocompleteEnd}
            onPlaceChanged={() => handlePlaceSelect(autocompleteEnd, setDestination)}
          />
        </div>
      )}

      <SearchBar search={search} onSearch={handleSearch} />
      <RideList rides={filteredRides} onBook={handleBookRide} />
      <BookingModal ride={selectedRide} onConfirm={confirmBooking} onCancel={() => setSelectedRide(null)} />
    </div>
  );
};

export default AvailableRides;
