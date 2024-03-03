import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profileSlice";
import AuthenticationReducer from "../features/AuthenticationSlice";
import UploadFileIdReducer from "../features/UploadFileIdSlice";
import updateModeReducer from "../features/UpdateModeSlice";

export const store = configureStore({
  reducer: {
    profileReducer,
    AuthenticationReducer,
    UploadFileIdReducer,
    updateModeReducer,
  },
});
