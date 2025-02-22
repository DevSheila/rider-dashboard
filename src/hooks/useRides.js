import { useState, useEffect } from "react";
import axios from "axios";
import { CAR_MODELS, CAR_PLATES, getRandomItem, MOCK_PHOTOS, PHONE_NUMBERS, RIDE_TYPES } from "@/data/mockData";

const generateMockRide = (user, distance) => ({
  id: user.id,
  rideModels: {
    type: getRandomItem(RIDE_TYPES),
    capacity: [2, 4, 2][Math.floor(Math.random() * 3)],
    photo: getRandomItem(MOCK_PHOTOS.ride),
    fare: ((Math.random() * 10 + 5) * 1000).toFixed(2),
  },
  driver: {
    name: user.name,
    photo: getRandomItem(MOCK_PHOTOS.driver),
    carModel: getRandomItem(CAR_MODELS),
    carPlate: getRandomItem(CAR_PLATES),
    phone: getRandomItem(PHONE_NUMBERS),
  },
  distance: distance || `${(Math.random() * 50 + 10).toFixed(1)} KM`,
  duration: `${Math.floor(Math.random() * 8 + 2)} mins`,
});

export const useRides = (distance) => {
  const [rides, setRides] = useState([]);
  const [filteredRides, setFilteredRides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRides = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const mockRides = response.data.map((user) => generateMockRide(user, distance));
        setRides(mockRides);
        setFilteredRides(mockRides);
      } catch (err) {
        setError("Failed to fetch rides. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRides();
  }, [distance]);

  return { rides, filteredRides, setFilteredRides, loading, error };
};
