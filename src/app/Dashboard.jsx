import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState, useEffect } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

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

const center = { lat: -1.286389, lng: 36.817223 };

const Dashboard = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const originRef = useRef();
  const destinationRef = useRef();
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const mockRides = response.data.map((user) => ({
          id: user.id,
          driver: {
            name: user.name,
            photo:
              "https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          car: "Toyota Prius",
          fare: (Math.random() * 20 + 5).toFixed(2) * 1000,
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
    setFilteredRides(
      rides.filter((ride) =>
        ride.driver.name.toLowerCase().includes(query.toLowerCase())
      )
    );
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

  if (loading) return <p className="text-center text-lg">Loading rides...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (!isLoaded)
    return <p className="text-gray-500 dark:text-gray-400">Loading...</p>;

  async function calculateRoute() {
    if (!originRef.current.value || !destinationRef.current.value) return;
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div className="relative flex flex-col items-start h-screen w-screen bg-gray-100 dark:bg-gray-900 sm:ml-64">
      <div className="absolute inset-0">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerClassName="w-full h-full"
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={setMap}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg m-4 z-10 w-full max-w-md ml-8">
        <div className="flex gap-2">
          <Autocomplete>
            <input
              type="text"
              placeholder="Origin"
              ref={originRef}
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type="text"
              placeholder="Destination"
              ref={destinationRef}
              className="w-full p-2 border rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            />
          </Autocomplete>
          <button
            onClick={calculateRoute}
            className="px-4 py-2 bg-pink-500 text-white rounded dark:bg-pink-600"
          >
            Calculate
          </button>
          <button
            onClick={clearRoute}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex justify-between items-center mt-4 text-gray-900 dark:text-white">
          <p>Distance: {distance}</p>
          <p>Duration: {duration}</p>
          <button
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
            className="p-2 bg-blue-500 text-white rounded-full dark:bg-blue-600"
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>

      {originRef.current?.value && destinationRef.current?.value ? (

      <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg m-4 z-10 w-full max-w-md ml-8">
        <SearchBar search={search} onSearch={handleSearch} />
        <RideList rides={filteredRides} onBook={handleBookRide} />
        <BookingModal
          ride={selectedRide}
          onConfirm={confirmBooking}
          onCancel={() => setSelectedRide(null)}
        />
      </div>
    ) : (
     <></>
    )}
    </div>
  );
};

export default Dashboard;
