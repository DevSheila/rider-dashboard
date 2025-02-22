import { Card, CardContent } from "@/components/ui/card";

const RideHistoryCard = ({ ride }) => {
  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-lg font-bold">🚗 {ride.car}</h2>
        <p>👤 Driver: {ride.driver.name}</p>
        <p>💰 Fare: KES {ride.fare}</p>
        <p>📍 Distance: {ride.distance} km</p>
        <p>🗓 Date: {new Date(ride.date).toLocaleDateString()}</p>
        <p className={ride.status === "Completed" ? "text-green-600" : "text-yellow-500"}>
          ✅ Status: {ride.status}
        </p>
      </CardContent>
    </Card>
  );
};

export default RideHistoryCard;
