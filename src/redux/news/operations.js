import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page = 1, perPage = 10 }, thunkAPI) => {
    try {
      const { data } = await api.get(`/news?page=${page}&limit=${perPage}`);
      console.log("API response:", data);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
