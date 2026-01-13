import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async ({ page = 1, perPage = 10 }, thunkAPI) => {
    try {
      const { data } = await api.get(`/notices?page=${page}&limit=${perPage}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
