import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65eae8dd43ce16418932caaa.mockapi.io";

export const fetchCars = createAsyncThunk(
  "catalogue/fetchAll",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/catalogue?page=${page}&limit=12`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchFilteredCars = createAsyncThunk(
  "catalogue/fetchFiltered",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `/catalogue?page=1&limit=12&filter=${data}`,
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
