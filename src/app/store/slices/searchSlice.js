import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    isOpen: false,
  },
  reducers: {
    openSearch: (state) => {
      state.isOpen = true;
    },
    closeSearch: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSearch, closeSearch } = searchSlice.actions;
export default searchSlice.reducer;
