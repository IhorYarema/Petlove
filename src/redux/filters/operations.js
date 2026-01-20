import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchCategories = createAsyncThunk(
  "filters/fetchCategories",
  async (thunkAPI) => {
    try {
      const { data } = await api.get("/notices/categories");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
