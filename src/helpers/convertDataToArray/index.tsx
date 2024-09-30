import { Filters } from 'src/constants/filters';
import {
  BuildingData, ExtraDataValue, BuildingDataBuilding,
} from '../../webgl/MainBuildings/types';

type BuildingNumber = 'main' | '1' | '2' | '3';

const convertToObjectWithUnitKey = (
  obj: BuildingDataBuilding,
  buildingNumber: BuildingNumber,
  filters: Filters,
) => {
  const {
    bathrooms, bedrooms, floorsNumber: floors, price, square,
  } = filters;
  let buildingName: string;
  switch (buildingNumber) {
    case '1':
      buildingName = 'Building 1';
      break;
    case '2':
      buildingName = 'Building 2';
      break;
    case '3':
      buildingName = 'Building 3';
      break;
    default:
      buildingName = 'Building 1';
  }
  const objectsWithKeys = Object.entries(obj).map(([key, value]) => {
    return {
      unit: +key, unitNumber: value.unitNumber, buildingName, ...value,
    };
  });

  const filteredData = objectsWithKeys.map((unitData: ExtraDataValue) => {
    let isAvailable = false 

    if (unitData) {
      if (unitData.category && unitData.category !== 'unavailable') {
        isAvailable = true;
      }
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
    if (isAvailable) {
      return unitData;
    }
    return null;
  });

  return filteredData.filter((value) => value !== null && value !== undefined) as ExtraDataValue[];
};

export const convertDataToArray = (
  dummyData: BuildingData,
  buildingNumber: BuildingNumber,
  sort: string,
  filters: Filters,
) => {
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';
  let arrayData: ExtraDataValue[] = [];
  switch (buildingNumber) {
    case '1':
      arrayData = convertToObjectWithUnitKey(dummyData.building1, '1', filters);
      break;
    case '2':
      arrayData = convertToObjectWithUnitKey(dummyData.building2, '2', filters);
      break;
    case '3':
      arrayData = convertToObjectWithUnitKey(dummyData.building3, '3', filters);
      break;
    case 'main':
      arrayData = isItSecondVersion ? [
        ...convertToObjectWithUnitKey(dummyData.building1, '1', filters),
        ...convertToObjectWithUnitKey(dummyData.building2, '2', filters),
        ...convertToObjectWithUnitKey(dummyData.building3, '3', filters),
      ] : [
        ...convertToObjectWithUnitKey(dummyData.building1, '1', filters),
        ...convertToObjectWithUnitKey(dummyData.building2, '2', filters),
      ];
      break;
    default:
      arrayData = isItSecondVersion ? [
        ...convertToObjectWithUnitKey(dummyData.building1, '1', filters),
        ...convertToObjectWithUnitKey(dummyData.building2, '2', filters),
        ...convertToObjectWithUnitKey(dummyData.building3, '3', filters),
      ] : [
        ...convertToObjectWithUnitKey(dummyData.building1, '1', filters),
        ...convertToObjectWithUnitKey(dummyData.building2, '2', filters),
      ];
  }

  let sortedData: ExtraDataValue[];
  switch (sort) {
    case '$$$ - $':
      sortedData = arrayData.sort((a, b) => b.price - a.price);
      break;
    case '$ - $$$':
      sortedData = arrayData.sort((a, b) => a.price - b.price);
      break;
    case 'Max - Min Sq Ft':
      sortedData = arrayData.sort((a, b) => b.square - a.square);
      break;
    case 'Min - Max Sq Ft':
      sortedData = arrayData.sort((a, b) => a.square - b.square);
      break;
    default:
      sortedData = arrayData;
  }
  return sortedData;
};
