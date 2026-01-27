import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ page = 1, perPage = 10, keyword }, thunkAPI) => {
    try {
      const params = {
        page,
        limit: perPage,
      };

      if (keyword) params.keyword = keyword;

      const { data } = await api.get("/news", { params });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
