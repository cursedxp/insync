import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFunctionTab: "chat",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentFunctionTab: (state, action) => {
      state.currentFunctionTab = action.payload;
    },
  },
});

export const { setCurrentFunctionTab } = appSlice.actions;
export default appSlice.reducer;
