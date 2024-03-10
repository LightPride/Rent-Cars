import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../API/axios";

export const fetchCars = createAsyncThunk(
  "catalogue/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/catalogue?page=1&limit=12`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchLoadMore = createAsyncThunk(
  "catalogue/fetchMoreCars",
  async (page, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/catalogue?page=${page}&limit=12`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
