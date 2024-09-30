import { Filters } from 'src/constants/filters';
import { UnitData } from 'src/webgl/MainBuildings/types';

const filterUnit = (unitData: UnitData, filters: Filters) => {
  const {
    bathrooms, bedrooms, floorsNumber: floors, price, square, isFilterStarted,
  } = filters;

  let isAvailable = false;

  if (unitData) {
    if (unitData.category && unitData.category !== 'unavailable') {
      isAvailable = true;
    }
    if (isFilterStarted) {
      if (bathrooms && bathrooms.length && !bathrooms.includes(unitData.bathrooms)) {
        isAvailable = false;
      }
      if (bedrooms && bedrooms.length && !bedrooms.includes(unitData.bedrooms)) {
        isAvailable = false;
      }
      if (floors && floors.length && !floors.includes(unitData.floors)) {
        isAvailable = false;
      }
      if (price && (price.maxValue < unitData.price || unitData.price < price.minValue)) {
        isAvailable = false;
      }
      if (square && (square.maxValue < unitData.square || unitData.square < square.minValue)) {
        isAvailable = false;
      }
    }
  }
  return isAvailable;
};

export default filterUnit;
