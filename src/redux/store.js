import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import newsSlice from "./news/slice";
import friendsSlice from "./friends/slice";
import noticesSlice from "./notices/slice";
import filtersSlice from "./filters/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsSlice,
    notices: noticesSlice,
    friends: friendsSlice,
    filters: filtersSlice,
  },
});
