import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriends.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFriends.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchFriends.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load friends";
      });
  },
});

export default friendsSlice.reducer;
