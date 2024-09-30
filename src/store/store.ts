import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './filter/filterSlice';
// eslint-disable-next-line import/no-cycle
import carouselSlice from './carousel/carouselSlice';

export const store = () => configureStore({
  reducer: {
    filters: filterSlice,
    carousel: carouselSlice,
  },
});

type StoreType = ReturnType<typeof store>;

export type RootState = StoreType['getState'];
export type AppDispatch = StoreType['dispatch'];

export default store;
