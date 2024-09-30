/* eslint-disable no-nested-ternary */
import { Filters, FilterKeys } from '../../constants/filters';

type ConvertedFilter = {
  value: string;
  name: FilterKeys
};
function convertToInternationalCurrencySystem(labelValue: number) {
  return Math.abs(Number(labelValue)) >= 1.0e+9

    ? `${(Math.abs(Number(labelValue)) / 1.0e+9).toFixed(1)}b`
    : Math.abs(Number(labelValue)) >= 1.0e+6

      ? `${(Math.abs(Number(labelValue)) / 1.0e+6).toFixed(1)}m`
      : Math.abs(Number(labelValue)) >= 1.0e+3

        ? `${(Math.abs(Number(labelValue)) / 1.0e+3).toFixed(1)}k`

        : Math.abs(Number(labelValue));
}

const convertFiltersToArray = (initialState: Filters): ConvertedFilter[] => {
  const result: ConvertedFilter[] = [];
  const { bedrooms, bathrooms, floorsNumber } = initialState;
  if (initialState.square
    && (initialState.square.minValue > 0 || initialState.square.maxValue > 0)) {
    result.push({
      value: `Square feet from ${convertToInternationalCurrencySystem(initialState.square.minValue)} - ${convertToInternationalCurrencySystem(initialState.square.maxValue)}`,
      name: 'square',
    });
  }

  if (initialState.price && (initialState.price.minValue > 0 || initialState.price.maxValue > 0)) {
    result.push({
      value: `Priced from $${convertToInternationalCurrencySystem(initialState.price.minValue)} - $${convertToInternationalCurrencySystem(initialState.price.maxValue)}`,
      name: 'price',
    });
  }

  if (bedrooms && +bedrooms[0] > 0) {
    const sortBedrooms = bedrooms.map((el) => +el).sort((a, b) => a - b);

    result.push({
      value: `Bedrooms from ${sortBedrooms[0]} ${sortBedrooms.length > 1 ? `- ${sortBedrooms[sortBedrooms.length - 1]}` : ''}`,
      name: 'bedrooms',
    });
  }

  if (bathrooms && +bathrooms[0] > 0) {
    const sortBathrooms = bathrooms.map((el) => +el).sort((a, b) => a - b);

    result.push({
      value: `Bathrooms from ${sortBathrooms[0]} ${sortBathrooms.length > 1 ? `- ${sortBathrooms[sortBathrooms.length - 1]}` : ''}`,
      name: 'bathrooms',
    });
  }

  if (floorsNumber && +floorsNumber[0] > 0) {
    const sortFloors = floorsNumber.map((el) => +el).sort((a, b) => a - b);

    result.push({
      value: `Floors from ${sortFloors[0]} ${sortFloors.length > 1 ? `- ${sortFloors[sortFloors.length - 1]}` : ''}`,
      name: 'floorsNumber',
    });
  }

  return result;
};

export { convertFiltersToArray };
