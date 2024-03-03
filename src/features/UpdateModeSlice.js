import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updateMode: false,
};

export const UpdateModeSlice = createSlice({
  name: "updateMode",
  initialState,
  reducers: {
    getUpdateMode: (state, action) => {
      state.updateMode = action.payload;
    },
  },
});
export const { getUpdateMode } = UpdateModeSlice.actions;
export default UpdateModeSlice.reducer;
