import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  SliderFilter,
  initialFilterState as initialState,
  FiltersWithoutIsFilterStarted,
  clearedFilterState,
  ClearFilterState,
} from '../../constants/filters';
import { deepCompareObjects } from '../../helpers/deepCompareObjects';

const filterSlide = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    startFilter: (state, action: PayloadAction<boolean>) => {
      state.isFilterStarted = action.payload;
    },
    updateBathrooms: (state, action: PayloadAction<Array<number> | null>) => {
      state.bathrooms = action.payload;
    },
    updateBedrooms: (state, action: PayloadAction<Array<number> | null>) => {
      state.bedrooms = action.payload;
    },
    updateFloorsNumber: (state, action: PayloadAction<Array<number> | null>) => {
      state.floorsNumber = action.payload;
    },
    updatePrice: (state, action: PayloadAction<SliderFilter>) => {
      state.price = action.payload;
    },
    updateSquare: (state, action: PayloadAction<SliderFilter>) => {
      state.square = action.payload;
    },
    compareAndUpdateFilters: (_state, action: PayloadAction<FiltersWithoutIsFilterStarted>) => {
      const { isFilterStarted, ...filteredFilters } = clearedFilterState;
      const isFiltersEqual = deepCompareObjects(filteredFilters, action.payload);

      return {
        ...action.payload,
        isFilterStarted: !isFiltersEqual,
      };
    },
    clearFilters: (_state, action: PayloadAction<ClearFilterState>) => {
      const { price, square } = action.payload;
      const clearedFilters = {
        ...initialState,
        price,
        square,
      };
      return {
        ...clearedFilters,
      };
    },
  },
});

export const {
  startFilter,
  updateBathrooms,
  updateBedrooms,
  updatePrice, updateSquare, updateFloorsNumber, compareAndUpdateFilters, clearFilters,
} = filterSlide.actions;
export default filterSlide.reducer;
