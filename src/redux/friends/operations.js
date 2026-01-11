import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const fetchFriends = createAsyncThunk(
  "friends/fetchFriends",
  async (thunkAPI) => {
    try {
      const { data } = await api.get("/friends/");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response?.data || e.message);
    }
  }
);
