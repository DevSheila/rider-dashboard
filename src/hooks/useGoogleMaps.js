import { useState } from "react";

export const useGoogleMaps = () => {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  // Function to calculate the route between an origin and a destination
  const calculateRoute = async (originRef, destinationRef) => {
    // Ensure both origin and destination have values before proceeding
    if (!originRef.current?.value || !destinationRef.current?.value) return;
    // Initialize the Google Maps DirectionsService API
    const directionsService = new google.maps.DirectionsService();
    // Request route calculation using the Directions API
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    // Update state with the retrieved route details

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  return {
    directionsResponse, // Contains full route data
    distance, // Distance between origin and destination
    duration, // Estimated travel duration
    calculateRoute, // Function to calculate the route
    setDirectionsResponse, // Function to manually update directions response
    setDistance, // Function to manually update distance
    setDuration, // Function to manually update duration
  };
};
