import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profileLinks: [],
  profileDetails: [],
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState,
  reducers: {
    addUserLinks: (state, action) => {
      state.profileLinks = action.payload;
    },
    addUserDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
  },
});
export const { addUserLinks, addUserDetails } = profileSlice.actions;
export default profileSlice.reducer;
