import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileSlice";
import AuthenticationReducer from "../features/AuthenticationSlice";

export const store = configureStore({
  reducer: { profileReducer, AuthenticationReducer },
});
