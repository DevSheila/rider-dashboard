import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

// Props:
// - center: Object containing latitude and longitude for the map's center
// - map: Reference to the map instance
// - setMap: Function to store the map instance when it loads
// - directionsResponse: Google Maps API response for displaying a route
const MapComponent = ({ center, map, setMap, directionsResponse }) => {
  return (
    <div className="absolute inset-0">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerClassName="w-full h-full"
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={setMap}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;