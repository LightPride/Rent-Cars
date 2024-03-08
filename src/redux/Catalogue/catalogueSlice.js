import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    favorites: [],
    filteredFavorites: [],
    listOfCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.isLoading = true;
      state.favorites.push(action.payload);
      state.isLoading = false;
    },
    removeFavorite: (state, action) => {
      state.isLoading = true;
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id,
      );
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.listOfCars = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchCars.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addFavorite, removeFavorite } = catalogueSlice.actions;
