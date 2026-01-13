import { createSlice } from "@reduxjs/toolkit";
import { fetchNotices } from "./operations";

const initialState = {
  items: [],
  page: 1,
  perPage: 10,
  totalPages: 1,
  loading: false,
  error: null,
};

const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setPerPage(state, action) {
      state.perPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        state.loading = false;

        const data = action.payload;

        state.items = data.results;
        state.page = data.page;
        state.totalPages = data.totalPages;
        state.perPage = data.perPage;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load notices";
      });
  },
});

export const { setPage, setPerPage } = noticesSlice.actions;
export default noticesSlice.reducer;
