import { Card, CardContent } from "@/components/ui/card";
import LocationInfo from "./LocationInfo";
import DriverInfo from "./DriverInfo";

// Props:
// - ride: An object containing ride details (source, destination, fare, distance, driver info, etc.)
const RideHistoryCard = ({ ride }) => {
  return (
    <Card className="max-w-md mx-auto p-4 rounded-2xl w-full">
      <CardContent>
        <LocationInfo
          source={ride.source}
          destination={ride.destination}
          fare={ride.rideModels?.fare}
          distance={ride.distance}
        />
        
        <hr className="my-4" />
        
        <DriverInfo
          driver={ride.driver}
          date={ride.date}
          rideType={ride.rideModels?.type}
        />
      </CardContent>
    </Card>
  );
};

export default RideHistoryCard;