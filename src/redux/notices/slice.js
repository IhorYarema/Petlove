import { createSlice } from "@reduxjs/toolkit";
import { fetchNotices, toggleFavorite } from "./operations";

const initialState = {
  items: [],
  favorites: [],
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
    setFavorites(state, action) {
      state.favorites = action.payload;
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
        let results = data.results;

        const sortBy = action.meta.arg.sortBy;

        if (sortBy) {
          results = [...results].sort((a, b) => {
            const field = sortBy.replace("-", "");
            const direction = sortBy.startsWith("-") ? -1 : 1;

            const aValue = a[field] ?? 0;
            const bValue = b[field] ?? 0;

            return (aValue - bValue) * direction;
          });
        }

        state.items = results;
        state.page = data.page;
        state.totalPages = data.totalPages;
        state.perPage = data.perPage;
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load notices";
      })
      // .addCase(toggleFavorite.pending, (state) => {
      //   // Убираем loading — оптимистично обновляем UI
      //   // state.loading = true; // ← можно убрать
      // })
      // .addCase(toggleFavorite.fulfilled, (state) => {
      //   // не нужно ничего делать, UI уже обновлён
      // })
      .addCase(toggleFavorite.rejected, (state, action) => {
        // можно показывать toast или ошибку
        console.error(action.payload);
      });
  },
});

export const { setPage, setPerPage, setFavorites } = noticesSlice.actions;
export default noticesSlice.reducer;
