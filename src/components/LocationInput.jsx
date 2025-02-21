import { Autocomplete } from "@react-google-maps/api";

const LocationInput = ({ placeholder, value, onChange, onLoad, onPlaceChanged }) => {
  return (
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md dark:bg-gray-700"
      />
    </Autocomplete>
  );
};

export default LocationInput;
