import { configureStore } from "@reduxjs/toolkit";
import petSlice from "./slices/pet.slice";

export const store = configureStore({
  reducer: {
    pets: petSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
