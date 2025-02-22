import React from "react";
import SearchBar from "./SearchBar";
import RideList from "./RideList";
import BookingModal from "./BookingModal";


// Props:
// - search: Current search term entered by the user
// - onSearch: Function to handle search input changes
// - rides: Array of available ride options
// - onBook: Function to handle booking a ride
// - selectedRide: The ride that the user has selected for booking
// - onConfirm: Function to confirm the booking
// - onCancel: Function to cancel the booking
const RideSearchSection = ({ 
    search, 
    onSearch, 
    rides, 
    onBook, 
    selectedRide, 
    onConfirm, 
    onCancel 
  }) => {
    return (
      <div className="p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg m-4 z-10 w-full max-w-md ml-8">
        <SearchBar search={search} onSearch={onSearch} />
        <RideList rides={rides} onBook={onBook} />
        <BookingModal
          ride={selectedRide}
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </div>
    );
  };
  
  export default RideSearchSection;
  