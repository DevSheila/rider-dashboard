import { configureStore } from "@reduxjs/toolkit";
import rideReducer from "@/store/rideSlice";

export const store = configureStore({
  reducer: {
    rides: rideReducer,
  },
});
