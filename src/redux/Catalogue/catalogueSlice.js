import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchLoadMore } from "./operations";

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState: {
    favorites: [],
    filteredCatalogue: [],
    listOfCars: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilteredCatalogue: (state, action) => {
      state.isLoading = true;
      state.listOfCars = action.payload;
      state.isLoading = false;
      state.shouldShowBtn = false;
    },
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
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listOfCars = [...action.payload];

        state.error = null;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchLoadMore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLoadMore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.listOfCars = [...state.listOfCars, ...action.payload];
        state.error = null;
      })
      .addCase(fetchLoadMore.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addFavorite, removeFavorite, setFilteredCatalogue } =
  catalogueSlice.actions;
