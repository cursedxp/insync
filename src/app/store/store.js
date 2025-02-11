import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import chatReducer from "./slices/chatSlice";
import appReducer from "./slices/appSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    chat: chatReducer,
    app: appReducer,
  },
});
