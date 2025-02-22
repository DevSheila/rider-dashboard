import RideCard from "./RideCard";

const RideList = ({ rides, onBook }) => {
  if (rides.length === 0) {
    return <p className="text-center text-gray-500">No rides available.</p>;
  }

  return (
    <div className="max-h-96 overflow-y-auto flex flex-col border rounded-lg p-4">
      {rides.map((ride) => (
        <RideCard key={ride.id} ride={ride} onBook={onBook} />
      ))}
    </div>
  );
};

export default RideList;
