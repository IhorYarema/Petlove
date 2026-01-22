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

export const fetchSex = createAsyncThunk(
  "filters/fetchSex",
  async (thunkAPI) => {
    try {
      const { data } = await api.get("/notices/sex");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);

export const fetchType = createAsyncThunk(
  "filters/fetchType",
  async (thunkAPI) => {
    try {
      const { data } = await api.get("/notices/species");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);

export const fetchCities = createAsyncThunk(
  "filters/fetchCities",
  async (keyword, thunkAPI) => {
    try {
      if (!keyword || keyword.length < 3) return [];

      const { data } = await api.get("/cities", {
        params: { keyword },
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
