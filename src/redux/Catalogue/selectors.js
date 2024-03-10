export const selectCars = (state) => state.catalogue.listOfCars;
export const selectFavorite = (state) => state.catalogue.favorites;
export const selectIsLoading = (state) => state.catalogue.isLoading;
export const selectError = (state) => state.catalogue.error;
export const selectFilteredCars = (state) => {
  state.catalogue.filteredCatalogue;
};
