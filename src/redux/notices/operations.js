import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (
    {
      page = 1,
      perPage = 10,
      category,
      sex,
      type,
      location,
      keyword,
      popularity,
      price,
    },
    thunkAPI,
  ) => {
    try {
      const params = {};

      if (category) params.category = category;
      if (sex) params.sex = sex;
      if (type) params.type = type;
      if (location) params.location = location;
      if (keyword) params.keyword = keyword;

      // 🔥 СОРТИРОВКА
      if (popularity === "popular") params.sortBy = "popularity";
      if (popularity === "unpopular") params.sortBy = "-popularity";

      if (price === "cheap") params.sortBy = "price";
      if (price === "expensive") params.sortBy = "-price";

      const { data } = await api.get("/notices", {
        params: {
          page,
          limit: perPage,
          ...params,
        },
      });

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  },
);
