import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsOpen: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setDetailsOpen: (state) => {
      state.detailsOpen = true;
    },
    setDetailsClose: (state) => {
      state.detailsOpen = false;
    },
  },
});

export const { setDetailsOpen, setDetailsClose } = chatSlice.actions;
export default chatSlice.reducer;
