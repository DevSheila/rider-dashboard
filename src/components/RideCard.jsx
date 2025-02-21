import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RideCard = ({ ride, onBook }) => {
  return (
    <div className="p-4 border rounded-md shadow-md dark:bg-gray-700">
      <h2 className="text-lg font-semibold">{ride.driver}</h2>
      <p>Car: {ride.car}</p>
      <p>Fare: ${ride.fare}</p>
      <p>Distance: {ride.distance} km</p>
      <button
        onClick={() => onBook(ride)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Book Ride
      </button>
    </div>
  );
};

export default RideCard;
