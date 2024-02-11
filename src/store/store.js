import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileSlice";
import AuthenticationReducer from "../features/AuthenticationSlice";
import UploadFileIdReducer from "../features/UploadFileIdSlice";

export const store = configureStore({
  reducer: { profileReducer, AuthenticationReducer, UploadFileIdReducer },
});
