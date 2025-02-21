import { createSlice } from "@reduxjs/toolkit";

// Load rides from localStorage
const loadRidesFromStorage = () => {
  const savedRides = localStorage.getItem("rides");
  return savedRides ? JSON.parse(savedRides) : [];
};

// Save rides to localStorage
const saveRidesToStorage = (rides) => {
  localStorage.setItem("rides", JSON.stringify(rides));
};

const initialState = {
  rides: loadRidesFromStorage(),
};

const rideSlice = createSlice({
  name: "rides",
  initialState,
  reducers: {
    addRide: (state, action) => {
      state.rides.push(action.payload);
      saveRidesToStorage(state.rides);
    },
    clearRides: (state) => {
      state.rides = [];
      saveRidesToStorage([]);
    },
  },
});

export const { addRide, clearRides } = rideSlice.actions;
export default rideSlice.reducer;
