/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildingData, UnitData } from '../../webgl/MainBuildings/types';

type BuildingNumber = 'main' | '1' | '2' | '3';
export function findMinMaxValues(dummyData: BuildingData, buildingNumber: BuildingNumber) {
  let dataToArray: any = Object.values(dummyData);
  const version = import.meta.env.VITE_APP_VERSION;
  const isItSecondVersion = version === 'version_2';

  switch (buildingNumber) {
    case '1':
      dataToArray = Object.values(dummyData.building1);
      break;
    case '2':
      dataToArray = Object.values(dummyData.building2);
      break;
    case '3':
      dataToArray = Object.values(dummyData.building3);
      break;
    case 'main':
      dataToArray = isItSecondVersion ? [
        ...Object.values(dummyData.building1),
        ...Object.values(dummyData.building2),
        ...Object.values(dummyData.building3),
      ] : [
        ...Object.values(dummyData.building1),
        ...Object.values(dummyData.building2),
      ];
      break;
    default:
      dataToArray = isItSecondVersion ? [
        ...Object.values(dummyData.building1),
        ...Object.values(dummyData.building2),
        ...Object.values(dummyData.building3),
      ] : [
        ...Object.values(dummyData.building1),
        ...Object.values(dummyData.building2),
      ];
  }

  return dataToArray.reduce((acc, curr) => {
    if (curr.price < acc.price.min || acc.price.min === undefined) {
      acc.price.min = curr.price;
    }
    if (curr.price > acc.price.max || acc.price.max === undefined) {
      acc.price.max = curr.price;
    }

    if (curr.square < acc.square.min || acc.square.min === undefined) {
      acc.square.min = curr.square;
    }
    if (curr.square > acc.square.max || acc.square.max === undefined) {
      acc.square.max = curr.square;
    }

    return acc;
  }, { price: { min: undefined, max: undefined }, square: { min: undefined, max: undefined } });
}
