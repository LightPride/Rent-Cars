import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

export const fetchCars = createAsyncThunk(
  "catalogue/fetchAll",
  async (limit, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/catalogue?page=1&limit=${limit}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
