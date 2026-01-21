import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchCities, fetchSex, fetchType } from "./operations";

const initialState = {
  categories: [],
  sex: [],
  types: [],
  cities: [],
  loading: false,
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCH CATEGORIES
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load categories";
      })
      // FETCH SEX
      .addCase(fetchSex.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSex.fulfilled, (state, action) => {
        state.loading = false;
        state.sex = action.payload;
      })
      .addCase(fetchSex.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load sex";
      })
      // FETCH SPECIES
      .addCase(fetchType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchType.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      })
      .addCase(fetchType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load typs";
      })
      // FETCH CITIES
      .addCase(fetchCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load typs";
      });
  },
});

export default filtersSlice.reducer;
