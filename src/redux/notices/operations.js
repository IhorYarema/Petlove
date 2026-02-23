import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (
    { page = 1, limit = 10, category, sex, type, location, keyword, sortBy },
    thunkAPI,
  ) => {
    try {
      const params = {
        page,
        limit,
      };

      if (category) params.category = category;
      if (sex) params.sex = sex;
      if (type) params.species = type;
      if (location) params.locationId = location;
      if (keyword) params.keyword = keyword;
      if (sortBy) params.sortBy = sortBy;

      const { data } = await api.get("/notices", { params });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
