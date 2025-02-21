import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRides } from "@/store/rideSlice";
import RideHistoryList from "@/components/RideHistoryList";

const RideHistory = () => {
  const dispatch = useDispatch();
  const history = useSelector((state) => state.rides.history);

  useEffect(() => {
    dispatch(loadRides());
  }, [dispatch]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Ride History</h1>
      <RideHistoryList history={history} />
    </div>
  );
};

export default RideHistory;
