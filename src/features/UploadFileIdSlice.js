import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fileId: "",
};

export const UploadFileIdSlice = createSlice({
  name: "UploadFileId",
  initialState,
  reducers: {
    getFileId: (state, action) => {
      state.fileId = action.payload;
    },
  },
});
export const { getFileId } = UploadFileIdSlice.actions;
export default UploadFileIdSlice.reducer;
