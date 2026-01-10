import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import newsSlice from "./news/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsSlice,
  },
});
