import { useSelector, useDispatch } from "react-redux";
import { clearRides } from "@/store/rideSlice";
import Navbar from "@/components/NavBar";

const RideHistory = () => {
  const rides = useSelector((state) => state.rides.rides);
  const dispatch = useDispatch();

  return (
    <>
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Ride History</h1>

      {rides.length === 0 ? (
        <p className="text-gray-500">No rides booked yet.</p>
      ) : (
        <ul className="space-y-4">
          {rides.map((ride) => (
            <li key={ride.id} className="border p-4 rounded-lg shadow">
              <p><strong>Driver:</strong> {ride.driver}</p>
              <p><strong>Car:</strong> {ride.car}</p>
              <p><strong>Fare:</strong> ${ride.fare}</p>
              <p><strong>Distance:</strong> {ride.distance} km</p>
              <p><strong>Date:</strong> {new Date(ride.date).toLocaleString()}</p>
              <p><strong>Status:</strong> {ride.status}</p>
            </li>
          ))}
        </ul>
      )}

      {rides.length > 0 && (
        <button
          onClick={() => dispatch(clearRides())}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear Ride History
        </button>
      )}
    </div>
    </>

  );
};

export default RideHistory;
