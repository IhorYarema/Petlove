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
      if (type) params.species = type;
      if (location) params.locationId = location;
      if (keyword) params.keyword = keyword;

      // 🔥 СОРТИРОВКА
      let sortParams = [];

      if (popularity === "popular") sortParams.push("popularity");
      if (popularity === "unpopular") sortParams.push("-popularity");

      if (price === "cheap") sortParams.push("price");
      if (price === "expensive") sortParams.push("-price");

      if (sortParams.length) params.sortBy = sortParams.join(",");

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
