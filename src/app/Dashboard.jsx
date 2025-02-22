import { useRef, useState } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import { useDispatch } from "react-redux";
import { addRide } from "@/store/rideSlice";
import { toast } from "sonner";

import { useRides } from "../hooks/useRides";
import { useGoogleMaps } from "../hooks/useGoogleMaps";
import MapComponent from "@/components/Map";
import LocationSearch from "@/components/LocationSearch";
import RideSearchSection from "@/components/RidesSearchSection";
import SpinLoader from "@/components/SpinLoader";

const center = { lat: -1.286389, lng: 36.817223 };
const libraries = ["places"];

const Dashboard = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const dispatch = useDispatch();
  const originRef = useRef();
  const destinationRef = useRef();
  const [map, setMap] = useState(null);
  const [source, setSource] = useState("");
  const [end, setEnd] = useState("");
  const [search, setSearch] = useState("");
  const [selectedRide, setSelectedRide] = useState(null);

  const {
    directionsResponse,
    distance,
    duration,
    calculateRoute, 
    setDirectionsResponse,
    setDistance,
    setDuration,
  } = useGoogleMaps();

  const { rides, filteredRides, setFilteredRides, loading, error } = useRides(distance);

  const handleSearch = (query) => {
    setSearch(query.toLowerCase());
    setFilteredRides(
      rides.filter((ride) =>
        [
          ride.driver.name.toLowerCase(),
          ride.driver.carModel.toLowerCase(),
          ride.rideModels.type.toLowerCase(),
        ].some((field) => field.includes(query.toLowerCase()))
      )
    );
  };

  // const clearRoute = () => {
  //   setDirectionsResponse(null);
  //   setDistance("");
  //   setDuration("");
  //   originRef.current.value = "";
  //   destinationRef.current.value = "";
  // };
  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
    setSource("");
    setEnd("");
    setShowRideList(false); // Hide the ride list when clearing
    setSelectedRide(null); // Clear any selected ride
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
        source,
        destination: end,
        status: "Completed",
      };

      dispatch(addRide(newRide));
      setSelectedRide(null);
      toast.success("Booking Successful", {
        description: "You have successfully booked a ride.",
      });
    }
  };

  if (!isLoaded) return <SpinLoader />;
  if (loading) return <SpinLoader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative flex flex-col items-start h-screen w-screen bg-gray-100 dark:bg-gray-900 lg:ml-64 md:ml-64 sm:ml-0">
      <MapComponent
        center={center}
        map={map}
        setMap={setMap}
        directionsResponse={directionsResponse}
      />
      
      <LocationSearch
        originRef={originRef}
        destinationRef={destinationRef}
        setSource={setSource}
        setEnd={setEnd}
        clearRoute={clearRoute}
      />

      {originRef.current?.value && destinationRef.current?.value && (
        <RideSearchSection
          search={search}
          onSearch={handleSearch}
          rides={filteredRides}
          onBook={handleBookRide}
          selectedRide={selectedRide}
          onConfirm={confirmBooking}
          onCancel={() => setSelectedRide(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;