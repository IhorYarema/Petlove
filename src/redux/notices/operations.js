import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async (
    { page = 1, limit = 6, category, sex, type, location, keyword, sortBy },
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

export const toggleFavorite = createAsyncThunk(
  "notices/toggleFavorite",
  async (noticeId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const favorites = state.notices.favorites || [];
      const isFavorite = favorites.includes(noticeId);

      const url = isFavorite
        ? `/notices/favorites/remove/${noticeId}`
        : `/notices/favorites/add/${noticeId}`;

      const method = isFavorite ? "delete" : "post";

      await api[method](url);

      // возвращаем обновлённый массив или просто null, потому что UI обновлён оптимистично
      return;
    } catch (error) {
      // игнорируем 409
      if (error.response?.status === 409) return;

      // для остальных ошибок
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
