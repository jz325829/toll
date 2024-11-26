import { Filters } from 'src/constants/filters';
import {
  BuildingData, ExtraDataValue, BuildingDataBuilding,
} from '../../webgl/MainBuildings/types';


const convertToObjectWithUnitKey = (
  obj: BuildingDataBuilding,
  buildingId: string,
  filters: Filters,
) => {
  const {
    bathrooms, bedrooms, floorsNumber: floors, price, square,
  } = filters;
  let buildingName: string;
  switch (buildingId) {
    case 'building1':
      buildingName = 'Building 1';
      break;
    case 'building2':
      buildingName = 'Building 2';
      break;
    case 'building3':
      buildingName = 'Building 3';
      break;
    case 'building4':
      buildingName = 'Building 4';
      break;
    case 'building5':
      buildingName = 'Building 5';
      break;
    case 'building6':
      buildingName = 'Building 6';
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
  buildingId: string,
  sort: string,
  filters: Filters,
) => {
  let arrayData: ExtraDataValue[] = [];
  switch (buildingId) {
    case 'building1':
      arrayData = convertToObjectWithUnitKey(dummyData.building1, 'building1', filters);
      break;
    case 'building2':
      arrayData = convertToObjectWithUnitKey(dummyData.building2, 'building2', filters);
      break;
    case 'building3':
      arrayData = convertToObjectWithUnitKey(dummyData.building3, 'building3', filters);
      break;
    case 'building4':
      arrayData = convertToObjectWithUnitKey(dummyData.building4, 'building4', filters);
      break;
    case 'building5':
      arrayData = convertToObjectWithUnitKey(dummyData.building5, 'building5', filters);
      break;
    case 'building6':
      arrayData = convertToObjectWithUnitKey(dummyData.building6, 'building6', filters);
      break;
    default:
      convertToObjectWithUnitKey(dummyData.building1, 'building1', filters);
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
