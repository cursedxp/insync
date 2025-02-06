import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsOpen: false,
  filesOpen: false,
  currentTab: "chat",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleDetails: (state) => {
      state.detailsOpen = !state.detailsOpen;
    },
    setDetailsClose: (state) => {
      state.detailsOpen = false;
    },

    setFilesClose: (state) => {
      state.filesOpen = false;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const { toggleDetails, setDetailsClose, setFilesClose, setCurrentTab } =
  chatSlice.actions;
export default chatSlice.reducer;
