import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    chat: chatReducer,
  },
});
