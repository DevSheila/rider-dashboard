import { useDispatch } from "react-redux";
import { addRide } from "@/store/rideSlice";

const BookRideButton = () => {
  const dispatch = useDispatch();

  const handleBookRide = () => {
    const newRide = {
      id: Date.now(),
      driver: "John Doe",
      car: "Toyota Prius",
      fare: (Math.random() * 50 + 10).toFixed(2),
      distance: (Math.random() * 20 + 5).toFixed(1),
      date: new Date().toISOString(),
      status: "Completed",
    };

    dispatch(addRide(newRide));
  };

  return (
    <button 
      onClick={handleBookRide} 
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      Book Ride
    </button>
  );
};

export default BookRideButton;
