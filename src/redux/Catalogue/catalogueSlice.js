import { createSlice } from "@reduxjs/toolkit";

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    favorites: [],
    filteredFavorites: [],
    listOfCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
});
