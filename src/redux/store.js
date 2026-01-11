import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import newsSlice from "./news/slice";
import friendsSlice from "./friends/slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsSlice,
    friends: friendsSlice,
  },
});
