export type SliderFilter = {
  min: number,
  max: number,
  minValue: number,
  maxValue: number,
};

export type Rooms = number | 'Any';

export interface Filters {
  isFilterStarted: boolean;
  bedrooms: Array<Rooms> | null;
  bathrooms: Array<Rooms> | null;
  floorsNumber: Array<Rooms> | null;
  price: SliderFilter | null
  square: SliderFilter | null
}

export type FiltersWithoutIsFilterStarted = Omit<Filters, 'isFilterStarted'>;

export type ClearFilterState = {
  price: SliderFilter,
  square: SliderFilter
};

export const initialFilterState: Filters = {
  isFilterStarted: false,
  bedrooms: null,
  bathrooms: null,
  floorsNumber: null,
  price: {
    min: 0,
    max: 100,
    minValue: 0,
    maxValue: 100,
  } as SliderFilter,
  square: {
    min: 0,
    max: 100,
    minValue: 0,
    maxValue: 100,
  } as SliderFilter,
};

export const updatedFilterState = {
  isFilterStarted: false,
  bedrooms: null,
  bathrooms: 2 as Rooms,
  floorsNumber: 2 as Rooms,
  price: {
    min: 0,
    max: 100,
    minValue: 0,
    maxValue: 100,
  } as SliderFilter,
  square: {
    min: 0,
    max: 100,
    minValue: 0,
    maxValue: 100,
  } as SliderFilter,
};

export const clearedFilterState = {
  isFilterStarted: false,
  bedrooms: null,
  bathrooms: null,
  floorsNumber: null,
  price: null,
  square: null,
};

export type FilterKeys = keyof typeof initialFilterState;
